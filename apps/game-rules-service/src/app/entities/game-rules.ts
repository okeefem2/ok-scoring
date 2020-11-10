import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'game_rules' })
export class GameRulesEntity {
    @PrimaryColumn()
    gameRulesKey: string;
}
