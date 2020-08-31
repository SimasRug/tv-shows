import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodaysShowsComponent } from './components/todays-shows/todays-shows.component';
import { ShowComponent } from './components/show/show.component';
import { SearchComponent } from './components/search/search.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'live-today', pathMatch: 'full' },
  { path: 'live-today', component: TodaysShowsComponent },
  { path: 'show/:id', component: ShowComponent},
  { path: 'search', component: SearchContainerComponent},
  {path: '**', redirectTo: 'live-today', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
