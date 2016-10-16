import { Component, Input } from '@angular/core';
import { Summoner } from './summoner';

@Component({
	  selector: 'my-summoner-detail',
	  template: `
	    <div *ngIf="summoner">
	      <h2>{{summoner.name}} details!</h2>
	      <div><label>id: </label>{{summoner.id}}</div>
	      <div>
	        <label>name: </label>
	        <input [(ngModel)]="summoner.name" placeholder="name"/>
	      </div>
	    </div>
	  `
	})
	export class SummonerDetailComponent {
	  @Input()
	  summoner: Summoner;
	}