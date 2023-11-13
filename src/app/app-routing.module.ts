// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlackjackbingoComponent } from './blackjackbingo/blackjackbingo.component';
import { AppListComponent } from './app-list/app-list.component'; // Import the AppListComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blackjackbingo', component: BlackjackbingoComponent },
  { path: 'apps', component: AppListComponent }, // Add this route for the AppListComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
