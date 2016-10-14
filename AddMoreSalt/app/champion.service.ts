import { Injectable } from '@angular/core';

import { Champion } from './champion';
import { CHAMPIONS } from './mocks/mock-champions';

@Injectable()
export class ChampionService {
	getChampions(): Promise<Champion[]> {
	    return Promise.resolve(CHAMPIONS);
	  }
}