import { Team } from './team.model';

export class Game {
    public team1: Team;
    public team2: Team;
    public gamesPlayed: number;
    constructor(team1: Team, team2: Team, gamesPlayed: number) {
        this.team1 = team1;
        this.team2 = team2;
        this.gamesPlayed = gamesPlayed;
    }
}
