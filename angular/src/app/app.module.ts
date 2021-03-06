import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from "./heroes.component";
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from "./hero.service";
import { DashboardComponent }   from "./dashboard.component";
import { HeroSearchComponent } from "app/hero-search.component";

import { AppRoutingModule }     from './app-routing.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
