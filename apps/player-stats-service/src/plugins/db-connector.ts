// src/plugins/db.ts
import 'reflect-metadata'
import fp from 'fastify-plugin'
import { createConnection, getConnectionOptions } from 'typeorm'
import { GameStateEntity } from '../entities/game';
import { PlayerGameEntity } from '../entities/player-game';
import { PlayerEntity } from '../entities/player';
import { SettingsEntity } from '../entities/settings';

const dbConnector = fp(async server => {
    console.log('Connecting to DB!');
    try {
        // getConnectionOptions will read from ormconfig.js (or .env if that is prefered)
        const connectionOptions = await getConnectionOptions()
        Object.assign(connectionOptions, {
            options: { encrypt: true },
            synchronize: true,
            entities: [
                GameStateEntity,
                PlayerEntity,
                PlayerGameEntity,
                SettingsEntity
            ]
        })
        const connection = await createConnection(connectionOptions)

        // this object will be accessible from any fastify server instance
        server.decorate('db', {
            game: connection.getRepository(GameStateEntity),
            player: connection.getRepository(PlayerEntity),
            playerGame: connection.getRepository(PlayerGameEntity),
            settings: connection.getRepository(SettingsEntity),
        })
    } catch (error) {
        console.log(error)
    }
})

export default dbConnector;
