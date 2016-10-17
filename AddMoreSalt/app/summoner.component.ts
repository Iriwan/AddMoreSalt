    import { Component,OnInit} from '@angular/core';
    import { Summoner } from './summoner';    
    import { SummonerService } from './summoner.service';

    @Component({
      selector: 'my-summoners',
      template: `
      <h2>Friends</h2>
      <ul class="summoners">
        <li *ngFor="let summoner of summoners"
          [class.selected]="summoner === selectedSummoner"
          (click)="onSelect(summoner)">
          <span class="badge">{{summoner.id}}</span> {{summoner.name}}
        </li>
      </ul>
      <my-summoner-detail [summoner]="selectedSummoner"></my-summoner-detail>    
    `,   
    })
    
    
   export class SummonerComponent implements OnInit {
    summoners: Summoner[];
    constructor(private summonerService: SummonerService) { }
    getSummoners(): void {
        this.summonerService.getSummoners().then(summoners => this.summoners = summoners);
      }
  
    ngOnInit(): void {
        this.getSummoners();
      }
    
  	selectedSummoner: Summoner;
  	onSelect(summoner: Summoner): void {
    this.selectedSummoner = summoner;
  }
}