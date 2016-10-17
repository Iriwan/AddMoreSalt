    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { RouterModule }   from '@angular/router';
    import { FormsModule }   from '@angular/forms';
    import { AppComponent }  from './app.component';
    import { SummonerComponent }  from './summoner.component';
    import { ChampionComponent }  from './champion.component';
    import { MatchComponent }  from './match.component';
    import { ChampionDetailComponent } from './champion-detail.component';
    import { SummonerDetailComponent } from './summoner-detail.component';
    import { MatchDetailComponent } from './match-detail.component';
    import { ChampionService } from './champion.service';
    import { SummonerService } from './summoner.service';
    import { MatchService } from './match.service';
    
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
                              {
                                path: 'summoners',
                                component: SummonerComponent
                              },
                              {
                                  path: 'champions',
                                  component: ChampionComponent
                              },
                              {
                                  path: 'matches',
                                  component: MatchComponent
                              },
                            ])
      ],
      declarations: [
        AppComponent,
        SummonerComponent,
        ChampionComponent,
        MatchComponent,      
        SummonerDetailComponent,
        ChampionDetailComponent,
        MatchDetailComponent
      ],
      
      providers: [
                  SummonerService, ChampionService, MatchService
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }