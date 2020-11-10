import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { GameStateEntity } from './game';
import { PlayerEntity } from './player';

@Entity({ name: 'player_game' })
export class PlayerGameEntity {

    @PrimaryColumn()
    playerKey: string;

    @ManyToOne(type => PlayerEntity, player => player)
    @JoinColumn({
        name: 'playerKey',
        referencedColumnName: 'key'
    })
    player: PlayerEntity;

    @PrimaryColumn()
    gameKey: string;

    @ManyToOne(type => GameStateEntity, game => game.players)
    @JoinColumn({
        name: 'gameKey',
        referencedColumnName: 'key'
    })
    game: GameStateEntity;
}
