import {Entity, Column, PrimaryColumn} from 'typeorm';
import { Player } from '../types/game-state-body';

@Entity()
export class PlayerEntity implements Player {

    @PrimaryColumn()
    key: string;

    @Column()
    name: string;
}
