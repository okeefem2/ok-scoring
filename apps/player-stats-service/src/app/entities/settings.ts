import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Settings } from '../../@types/game-state-body';

@Entity()
export class SettingsEntity implements Settings {

    @PrimaryColumn()
    key: string;

    @Column()
    gameKey: string;

    @Column()
    startingScore?: number;

    @Column()
    defaultScoreStep?: number;

    @Column()
    highScoreWins: boolean;
}
