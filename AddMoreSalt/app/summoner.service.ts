import { Injectable } from '@angular/core';

import { Summoner } from './summoner';
import { SUMMONERS } from './mocks/mock-summoners';

@Injectable()
export class SummonerService {
	getSummoners(): Promise<Summoner[]> {
	    return Promise.resolve(SUMMONERS);
	  }
}