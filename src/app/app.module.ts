import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule } from '@angular-redux/store';

import { StoreModule } from './modules/store.modules';
import { MaterialImportsModule } from './modules/material-imports.modules';


import { SocketioService } from './services/socket-io/socketio.service';
import { ShowSortService } from './services/sorting/show-sort.service';

import { TodaysShowsComponent } from './components/todays-shows/todays-shows.component';
import { ShowComponent } from './components/show/show.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { ShowsComponent } from './components/shows/shows.component';
import { SortingComponent } from './components/sorting/sorting.component';



@NgModule({
  declarations: [
    AppComponent,
    TodaysShowsComponent,
    ShowComponent,
    NavbarComponent,
    SearchComponent,
    SearchContainerComponent,
    ShowsComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    StoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule,

  ],
  providers: [SocketioService, ShowSortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
