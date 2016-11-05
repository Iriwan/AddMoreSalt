    import { Component,OnInit} from '@angular/core';
    import { CurrentGameInfo } from './model/currentgameinfo';
    import { CurrentGameService } from './currentgame.service';

    @Component({
      moduleId: module.id,
      selector: 'my-currentgame',
      templateUrl: 'currentgame.component.html',   
    })
    
    
   export class CurrentGameComponent implements OnInit {
    errorMessage: string;
    currentgame: CurrentGameInfo;
    constructor(private currentGameService: CurrentGameService) { }
    getCurrentgame() {
    	 this.currentGameService.getCurrentgame().then(
    		currentgame => this.currentgame = currentgame,
    		error =>  this.errorMessage = <any>error )
    		
  }
  
    ngOnInit() {
    	  this.getCurrentgame();
    	
      }
  }