import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { GameStateBodySchema as GameState } from '../../../@types/game-state-body';
import { GameStateEntity } from '../../entities/game';

export interface GameService {
    insertGameState: (gameState: GameState) => Promise<boolean>
}

const gameService = fp((fastify: FastifyInstance) => {
    const {
        gameRepo,
    } = fastify.db;
    const gameService = {
        insertGameState: async (gameState: GameState) => {
            const result = await gameRepo.insert(gameState);
            return !!result;
        }
    };
    fastify.decorate('gameService', gameService);
});

export default gameService;
