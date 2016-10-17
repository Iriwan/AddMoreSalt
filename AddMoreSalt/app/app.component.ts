    import { Component } from '@angular/core';
    
    @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/summoners">Summoners</a> 
        <a routerLink="/champions">Champions</a> 
        <a routerLink="/matches">Matches</a> 
        </nav>
        <router-outlet></router-outlet>
      `
    })
    export class AppComponent {
        title = 'Add More Salt';     
    }