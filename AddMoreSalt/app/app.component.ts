    import { Component,OnInit} from '@angular/core';
    import { Champion } from './champion';
    import { Summoner } from './summoner';
    import { Match } from './match';
    import { ChampionService } from './champion.service';
    import { SummonerService } from './summoner.service';
    import { MatchService } from './match.service';
    
    
   
   
    @Component({
      selector: 'my-app',
      template: `
      <h1>{{title}}</h1>
      <h2>Friends</h2>
      <ul class="summoners">
        <li *ngFor="let summoner of summoners"
          [class.selected]="summoner === selectedSummoner"
          (click)="onSelect(summoner)">
          <span class="badge">{{summoner.id}}</span> {{summoner.name}}
        </li>
      </ul>
      <my-summoner-detail [summoner]="selectedSummoner"></my-summoner-detail>
      <h2>Champions</h2>
      <ul class="champions">
        <li *ngFor="let champion of champions"
          [class.selected]="champion === selectedChampion"
          (click)="onSelect(champion)">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/{{champion.name}}.png" class="champ-img"/>
          <span class="badge">{{champion.id}}</span> 
        </li>
      </ul>
      <h2>Match</h2>
      <ul class="matches">
        <li *ngFor="let match of matches"
          [class.selected]="match === selectedMatch"
          (click)="onSelect(match)">
          <span class="badge">{{match.matchId}}</span> 
        </li>
      </ul>
      
      
    `,   
    providers: [SummonerService, ChampionService, MatchService]
    })
    
    
   export class AppComponent {
    title = 'Add More Salt';
    summoners: Summoner[];
    champions: Champion[];
    matches: Match[];
    constructor(private championService: ChampionService, private summonerService: SummonerService, private matchService: MatchService) { }
    getChampions(): void {
        this.championService.getChampions().then(champions => this.champions = champions);
      }
    getSummoners(): void {
        this.summonerService.getSummoners().then(summoners => this.summoners = summoners);
      }
    getMatches(): void {
        this.matchService.getMatches().then(matches => this.matches = matches);
      }
    ngOnInit(): void {
        this.getSummoners();
        this.getChampions();
        this.getMatches();
      }
    
  	selectedSummoner: Summoner;
  	onSelect(summoner: Summoner): void {
    this.selectedSummoner = summoner;
  }
}