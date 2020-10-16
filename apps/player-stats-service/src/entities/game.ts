import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from 'typeorm';

import { GameStateBodySchema as GameStateInterface, Player, PlayerScoreHistory, Settings } from '../types/game-state-body';

@Entity()
export class GameStateEntity implements GameStateInterface {
    @PrimaryColumn()
    key: string;

    @Column()
    date: string;

    @Column()
    duration: number;

    @Column()
    winningPlayerKey: string;

    @Column()
    description: string;

    @OneToMany('PlayerGameEntity', 'player')
    players: Player[];

    @OneToOne('SettingsEntity', 'settings')
    settings: Settings;

    @Column('json')
    scoreHistory: { [k: string]: PlayerScoreHistory }
}
