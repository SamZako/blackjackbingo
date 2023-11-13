// src/app/blackjackbingo/blackjackbingo.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-blackjackbingo',
  templateUrl: './blackjackbingo.component.html',
  styleUrls: ['./blackjackbingo.component.css']
})
export class BlackjackbingoComponent {
  card1: string = '';
  card2: string = '';
  dealerCard: string = '';
  action: string = '';

  // Updated hands array with all possible combinations of 3 cards
  hands = [
    ['1', '1', '1', 'Hit'],
    ['1', '1', '2', 'Stay'],
    ['1', '1', '3', 'Stay'],
    ['1', '1', '4', 'Stay'],
    ['1', '1', '5', 'Stay'],
    ['1', '1', '6', 'Stay'],
    ['1', '1', '7', 'Stay'],
    ['1', '1', '8', 'Stay'],
    ['1', '1', '9', 'Stay'],
    ['1', '1', '10', 'Stay'],
    ['1', '2', '1', 'Stay'],
    ['1', '2', '2', 'Stay'],
    ['1', '2', '3', 'Stay'],
    ['1', '2', '4', 'Stay'],
    ['1', '2', '5', 'Stay'],
    ['1', '2', '6', 'Stay'],
    ['1', '2', '7', 'Stay'],
    ['1', '2', '8', 'Stay'],
    ['1', '2', '9', 'Stay'],
    ['1', '2', '10', 'Stay'],
    // Add more combinations as needed
  ];

  updateAction(): void {
    // Replace face cards with 10
    const replaceFaceCard = (card: string): string => {
      return ['K', 'Q', 'J'].includes(card) ? '10' : card;
    };

    // Convert card values to string and replace face cards
    const card1Value = replaceFaceCard(this.card1).toString();
    const card2Value = replaceFaceCard(this.card2).toString();
    const dealerCardValue = replaceFaceCard(this.dealerCard).toString();

    const matchingHand = this.hands.find(hand =>
      hand[0] === card1Value && hand[1] === card2Value && hand[2] === dealerCardValue
    );

    this.action = matchingHand ? matchingHand[3] : '';
  }

  areAnyEmpty(): boolean {
    return !this.card1 || !this.card2 || !this.dealerCard;
  }
}
