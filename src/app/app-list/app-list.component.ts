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
    // { name: 'app2', path: 'app2', icon: 'placeholder-icon' },
    // { name: 'app3', path: 'app3', icon: 'placeholder-icon' },
    // { name: 'app4', path: 'app4', icon: 'placeholder-icon' },
    // { name: 'app5', path: 'app5', icon: 'placeholder-icon' },
    // Add more apps as needed
  ];

  constructor(private router: Router) {}
}
