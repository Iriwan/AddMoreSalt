import { Component, Input } from '@angular/core';
import { Champion } from './champion';


@Component({
	  selector: 'my-champion-detail',
	  template: `
	    <div *ngIf="champion">
	      <h2>{{champion.name}}</h2>
	      <div><label>id: </label>{{champion.id}}</div>
	      <div>
	        <label>name: </label>
	        <input [(ngModel)]="champion.name" placeholder="name"/>
	        <img src="//ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/"+{{champion.name}}+".png" class="champ-img"/>
	      </div>
	    </div>
	  `
	})
	export class ChampionDetailComponent {
	  @Input()
	  champion: Champion;
	}