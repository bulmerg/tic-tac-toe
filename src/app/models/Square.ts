import { Player } from './Player';

export class Square {
    id: number;
    player: Player;

    constructor(id: number, player: Player) {
        this.id = id;
        this.player = new Player(
            player.id,
            player.name,
            player.value
        );
    }
}