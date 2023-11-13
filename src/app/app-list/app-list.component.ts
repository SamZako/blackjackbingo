// src/app/app-list/app-list.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  apps = [
    { name: 'blackjackbingo', path: 'blackjackbingo' },
    // Add more apps as needed
  ];
}
