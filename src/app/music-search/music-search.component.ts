// src/app/music-search/music-search.component.ts

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent {
  artistName: string = '';
  artist: any; // Add this line to store the artist information

  constructor(private apiService: ApiService) {} // Inject ApiService

  search(): void {
    // Implement your search logic here using this.artistName
    console.log('Search button clicked! Artist name:', this.artistName);

    // Call the API service
    this.apiService.getArtistId(this.artistName).subscribe(
      (response) => {
        console.log('API response:', response);
        // Extract the artist information from the response
        this.artist = response.artists.items[0];
      },
      (error) => {
        console.error('API error:', error);
      }
    );
  }
}
