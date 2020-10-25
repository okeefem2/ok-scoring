import fastify from 'fastify';
import { OkScoringDB } from '../src/plugins/db-connector'
import { GameService } from '../src/plugins/services/game.service';
declare module 'fastify' {
    export interface FastifyInstance<
        HttpServer = Server,
        HttpRequest = IncomingMessage,
        HttpResponse = ServerResponse,
        > {
        db: OkScoringDB;
        gameService: GameService;
    }
}
