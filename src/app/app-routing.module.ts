import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlackjackbingoComponent } from './blackjackbingo/blackjackbingo.component';
import { AppListComponent } from './app-list/app-list.component';
import { RankerComponent } from './ranker/ranker.component'; // Import the RankerComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blackjackbingo', component: BlackjackbingoComponent },
  { path: 'apps', component: AppListComponent },
  { path: 'ranker', component: RankerComponent }, // Add route for RankerComponent
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
