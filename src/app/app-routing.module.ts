// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlackjackbingoComponent } from './blackjackbingo/blackjackbingo.component';
import { AppListComponent } from './app-list/app-list.component'; // Import the AppListComponent
import { AuthGuard } from './auth.guard'; // Import the AuthGuard
import { MusicSearchComponent } from './music-search/music-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'music-search', component: MusicSearchComponent},
  { path: 'blackjackbingo',component: BlackjackbingoComponent,canActivate: [AuthGuard]},
  { path: 'apps',component: AppListComponent,canActivate: [AuthGuard]},
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
