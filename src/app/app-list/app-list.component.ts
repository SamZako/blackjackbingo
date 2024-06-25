// src/app/app-list/app-list.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  apps = [
    { name: 'Blackjack Bingo', path: 'blackjackbingo', icon: 'bbb-icon.png' },
    { name: 'Ranker', path: 'ranker', icon: 'bbb-icon.png' },
    // Add more apps as needed
  ];

  constructor(private router: Router) {}
}
