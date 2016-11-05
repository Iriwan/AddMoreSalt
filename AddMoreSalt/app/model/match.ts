import { Timeline } from './timeline';
import { Participant } from './participant';
import { Participantidentity } from './participantidentity';
import { Team } from './team';

export class Match {
   matchId: number;
   matchMode: string;
   matchType: string;
   queueType: string;
   timeline: Timeline;
   participants: Participant[];
   participantIdentities: Participantidentity[];
   teams: Team[];
}