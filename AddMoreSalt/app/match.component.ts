    import { Component,OnInit} from '@angular/core';
    import { Match } from './model/match';
    import { MatchService } from './match.service';

    @Component({
      selector: 'my-matches',
      template: `
      <h2>Match</h2>
      <ul class="matches">
      <li *ngFor="let match of matches"
        [class.selected]="match === selectedMatch"
        (click)="onSelect(match)">
        <span class="badge">{{match.matchId}}</span> 
      </li>
      </ul>    `,   
    })
    
    
   export class MatchComponent implements OnInit {
    matches: Match[];
    constructor(private matchService: MatchService) { }
    getMatches(): void {
    this.matchService.getMatches().then(matches => this.matches = matches);
  }
  
    ngOnInit(): void {
    	  this.getMatches();
      }
  }