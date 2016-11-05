    import { Component,OnInit} from '@angular/core';
    import { Champion } from './model/champion';
    import { ChampionService } from './champion.service';

    @Component({
      selector: 'my-champions',
      template: `
      <h2>Champions</h2>
	    <ul class="champions">
	      <li *ngFor="let champion of champions"
	        [class.selected]="champion === selectedChampion"
	        (click)="onSelect(champion)">
	        <img src="http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/{{champion.name}}.png" class="champ-img"/>
	        <span class="badge">{{champion.id}}</span> 
	      </li>
	    </ul>    `,   
    })
    
    
   export class ChampionComponent implements OnInit {
    champions: Champion[];
    constructor(private championService: ChampionService) { }
    getChampions(): void {
      this.championService.getChampions().then(champions => this.champions = champions);
    }
  
    ngOnInit(): void {
    	  this.getChampions();
      }
  }