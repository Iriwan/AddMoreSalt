    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { RouterModule, Routes}   from '@angular/router';
    import { FormsModule }   from '@angular/forms';
    import { AppComponent }  from './app.component';
    import { SummonerComponent }  from './summoner.component';
    import { ChampionComponent }  from './champion.component';
    import { MatchComponent }  from './match.component';
    import { CurrentGameComponent }  from './currentgame.component';
    import { ChampionDetailComponent } from './champion-detail.component';
    import { SummonerDetailComponent } from './summoner-detail.component';
    import { MatchDetailComponent } from './match-detail.component';
    

const routes: Routes = [
  { path: '', redirectTo: '/currentgame', pathMatch: 'full' },
  { path: 'currentgame',  component: CurrentGameComponent },
  { path: 'matches',  component: MatchComponent },
  { path: 'champions', component: ChampionComponent },
  { path: 'summoners',  component: SummonerComponent }
];
    
@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
  })
 export class AppRoutingModule {}