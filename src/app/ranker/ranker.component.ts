import { Component, OnDestroy } from '@angular/core';
import { FileLoaderService } from '../file-loader.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Team {
  name: string;
  eloRating: number;
  matchups: number;
}

@Component({
  selector: 'app-ranker',
  templateUrl: './ranker.component.html',
  styleUrls: ['./ranker.component.css']
})
export class RankerComponent implements OnDestroy {
  teamList: string = '';
  teams: Team[] = [];
  rankedList: Team[] = [];
  matchups: { team1: Team, team2: Team }[] = [];
  currentMatchupIndex: number = 0;
  currentMatch: Team[] = [];
  totalMatchups: number = 0;
  matchupsProgress: number = 0;
  complexity: string = 'medium'; // Default complexity
  matchupsPerTeam: number = 3;

  predefinedLists = ['mlb.txt', 'cfb.txt', 'nfl.txt', 'nba.txt'];
  selectedList: string = '';

  private destroy$ = new Subject<void>(); // Subject to handle unsubscription
  private fileLoaderSubscription: Subscription | undefined;

  constructor(private fileLoaderService: FileLoaderService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isValid(): boolean {
    return this.teamList.trim().length > 0;
  }

  startRanking(): void {
    this.resetRanking();
    const teamNames = this.teamList.trim().split('\n').map(name => name.trim()).filter(name => name !== '');
    if (teamNames.length < 2) {
      alert('Please provide at least two teams to rank.');
      return;
    }
    this.teams = teamNames.map(name => ({ name: name, eloRating: 1000, matchups: 0 }));

    this.generateMatchups();
    this.nextMatchup();
  }

  private resetRanking(): void {
    this.teams = [];
    this.rankedList = [];
    this.matchups = [];
    this.currentMatchupIndex = 0;
    this.currentMatch = [];
    this.totalMatchups = 0;
    this.matchupsProgress = 0;
  }

  private generateMatchups(): void {
    const n = this.teams.length;
    this.matchups = [];

    // Calculate number of matchups based on complexity
    let factor = 1;
    if (this.complexity === 'medium') {
      factor = 2;
    } else if (this.complexity === 'high') {
      factor = 3;
    }

    while (this.matchups.length < this.matchupsPerTeam * n / factor) {
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (this.teams[i].matchups < this.matchupsPerTeam && this.teams[j].matchups < this.matchupsPerTeam) {
            this.matchups.push({ team1: this.teams[i], team2: this.teams[j] });
            this.teams[i].matchups++;
            this.teams[j].matchups++;
          }
        }
      }
    }

    this.totalMatchups = this.matchups.length;
    this.shuffleArray(this.matchups);
  }

  private shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  nextMatchup(): void {
    if (this.currentMatchupIndex >= this.matchups.length) {
      this.rankedList = this.teams.slice().sort((a, b) => b.eloRating - a.eloRating);
      return;
    }

    const matchup = this.matchups[this.currentMatchupIndex];
    this.currentMatchupIndex++;
    this.currentMatch = [matchup.team1, matchup.team2];
    this.matchupsProgress = this.currentMatchupIndex;
  }

  chooseTeam(index: number): void {
    const chosenTeam = this.currentMatch[index];
    const otherTeam = this.currentMatch[1 - index];

    const expectedScoreChosen = 1 / (1 + Math.pow(10, (otherTeam.eloRating - chosenTeam.eloRating) / 400));
    const expectedScoreOther = 1 / (1 + Math.pow(10, (chosenTeam.eloRating - otherTeam.eloRating) / 400));

    chosenTeam.eloRating += 32 * (1 - expectedScoreChosen);
    otherTeam.eloRating += 32 * (0 - expectedScoreOther);

    this.nextMatchup();
  }

  loadTeamList(filename: string): void {
    if (this.fileLoaderSubscription) {
      this.fileLoaderSubscription.unsubscribe(); // Unsubscribe previous subscription if exists
    }
    this.fileLoaderSubscription = this.fileLoaderService.loadFile(filename)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {
          this.teamList = data; // Set the loaded text file content to teamList
          this.startRanking(); // Start ranking automatically after loading
        },
        error => {
          console.error('Failed to load team list from file:', error);
        }
      );
  }

  onSelectList(): void {
    if (this.selectedList) {
      this.loadTeamList(this.selectedList); // Load the selected list
    }
  }

  onComplexityChange(): void {
    this.generateMatchups(); // Regenerate matchups when complexity changes
  }
}
