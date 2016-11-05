//https://developer.riotgames.com/api/methods#!/976/3336
import {Type, plainToClass } from "class-transformer";
	
export class CurrentGameInfo {
	
   @Type(() => BannedChampion)
   bannedChampions: BannedChampion[];
   
   gameId: number;
   gameLength: string;
   matchMode: string;
   gameQueueConfigId: number;
   
   gameStartTime: number;
   gameType: string;
   mapId: number;
   
   @Type(() => Observer)
   observers: Observer;
   
   @Type(() => CurrentGameParticipant)
   participants: CurrentGameParticipant[];
   platformId: string
}

export class BannedChampion {	
	championId: number;
	pickTurn: number;
	teamId: number
}

export class CurrentGameParticipant {
	bot: boolean;
	championId: number;

	@Type(() => Mastery)
	masteries: Mastery[];

	profileIconId: number;
	
	@Type(() => Rune)
	runes: Rune[];
	
	spell1Id: number;
	spell2Id: number;
	summonerId: number;	
	summonerName: string;
	teamId: number
}

export class Observer {
	encryptionKey: string
}

export class Mastery{
	masteryId: number;
	rank: number
}

export class Rune{
	count: number;
	runeId: number
}