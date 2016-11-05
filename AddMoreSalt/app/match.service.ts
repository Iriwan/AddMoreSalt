import { Injectable } from '@angular/core';

import { Match } from './model/match';
import { MATCHES } from './mocks/mock-matches';

@Injectable()
export class MatchService {
	getMatches(): Promise<Match[]> {
	    return Promise.resolve(MATCHES);
	  }
}