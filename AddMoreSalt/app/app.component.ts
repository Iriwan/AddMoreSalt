    import { Component,OnInit} from '@angular/core';
    import { Champion } from './champion';
    import { Summoner } from './summoner';
    import { ChampionService } from './champion.service';
    import { SummonerService } from './summoner.service';
    
   
   
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
      
      
      
    `,   
    providers: [SummonerService, ChampionService]
    })
    
    
   export class AppComponent {
    title = 'Add More Salt';
    summoners: Summoner[];
    champions: Champion[];
    constructor(private championService: ChampionService, private summonerService: SummonerService) { }
    getChampions(): void {
        this.championService.getChampions().then(champions => this.champions = champions);
      }
    getSummoners(): void {
        this.summonerService.getSummoners().then(summoners => this.summoners = summoners);
      }
    ngOnInit(): void {
        this.getSummoners();
        this.getChampions();
      }
    
  	selectedSummoner: Summoner;
  	onSelect(summoner: Summoner): void {
    this.selectedSummoner = summoner;
  }
}