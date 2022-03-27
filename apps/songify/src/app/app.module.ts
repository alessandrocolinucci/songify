import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongsDetailsComponent } from './songs/songs-details/songs-details.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SongsComponent, HomeComponent, SongsListComponent, SongsDetailsComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, StoreModule.forRoot({}, {}), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
