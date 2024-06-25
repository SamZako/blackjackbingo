import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlackjackbingoComponent } from './blackjackbingo/blackjackbingo.component';
import { AppListComponent } from './app-list/app-list.component';
import { RankerComponent } from './ranker/ranker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlackjackbingoComponent,
    AppListComponent,
    RankerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
