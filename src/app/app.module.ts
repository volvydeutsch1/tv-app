import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchboxComponent } from './view/searchbox/searchbox.component';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './view/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { ShowsComponent } from './view/shows/shows.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { SeasonsComponent } from './view/seasons/seasons.component';
import { EpisodesComponent } from './view/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    ToolbarComponent,
    ShowsComponent,
    SeasonsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
