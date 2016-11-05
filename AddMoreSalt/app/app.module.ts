    import { NgModule }  from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { RouterModule }   from '@angular/router';
    import { FormsModule }   from '@angular/forms';
    import { HttpModule, JsonpModule }    from '@angular/http';
    import { AppComponent }  from './app.component';
    import { SummonerComponent }  from './summoner.component';
    import { ChampionComponent }  from './champion.component';
    import { MatchComponent }  from './match.component';
    import { ChampionDetailComponent } from './champion-detail.component';
    import { SummonerDetailComponent } from './summoner-detail.component';
    import { MatchDetailComponent } from './match-detail.component';
    import { CurrentGameComponent }  from './currentgame.component';
    import { ChampionService } from './champion.service';
    import { SummonerService } from './summoner.service';
    import { MatchService } from './match.service';
    import { CurrentGameService } from './currentgame.service';
    import { AppRoutingModule } from './app-routing.module';
  
    

 // Imports for loading & configuring the in-memory web api
  
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        SummonerComponent,
        ChampionComponent,
        MatchComponent,      
        SummonerDetailComponent,
        ChampionDetailComponent,
        MatchDetailComponent,
        CurrentGameComponent
      ],
      
      providers: [
                  SummonerService, ChampionService, MatchService, CurrentGameService
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }