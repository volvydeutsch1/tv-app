import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './view/shows/shows.component';
import { SearchboxComponent } from './view/searchbox/searchbox.component';
import { SeasonsComponent } from './view/seasons/seasons.component';

const routes: Routes = [
  { path: '', component: SearchboxComponent},
  { path: 'show/:search', component: ShowsComponent},
  { path: 'seasons/:id', component: SeasonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
