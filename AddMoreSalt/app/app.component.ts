    import { Component } from '@angular/core';
    import 'rxjs/add/observable/throw';

 // Operators
    import 'rxjs/add/operator/catch';
    import 'rxjs/add/operator/debounceTime';
    import 'rxjs/add/operator/distinctUntilChanged';
    import 'rxjs/add/operator/map';
    import 'rxjs/add/operator/switchMap';
    import 'rxjs/add/operator/toPromise';
    
    @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/summoners">Summoners</a> 
        <a routerLink="/champions">Champions</a> 
        <a routerLink="/matches">Matches</a>
        <a routerLink="/currentgame">CurrentGame</a> 
        </nav>
        <router-outlet></router-outlet>
      `
    })
    export class AppComponent {
        title = 'Add More Salt';     
    }