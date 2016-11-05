import { Component, Input } from '@angular/core';
import { Match } from './model/match';


@Component({
	  selector: 'my-match-detail',
	  template: `
	    <div *ngIf="match">
	      <h2>{{match.matchId}}</h2>
	      <div><label>id: </label>{{match.matchId}}</div>
	    </div>
	  `
	})
	export class MatchDetailComponent {
	  @Input()
	  match: Match;
	}