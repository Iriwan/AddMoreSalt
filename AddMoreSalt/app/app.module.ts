    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule }   from '@angular/forms';
    import { AppComponent }  from './app.component';
    import { ChampionDetailComponent } from './champion-detail.component';
    import { SummonerDetailComponent } from './summoner-detail.component';
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        ChampionDetailComponent,
        SummonerDetailComponent
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }