import { FastifyInstance, FastifyRequest, RouteShorthandOptions, HookHandlerDoneFunction, FastifyError, ValidationResult } from 'fastify'
 // import json schemas as normal
import GameStateBodySchema from '../schemas/game-state-body.json';
// import the generated interfaces
import { GameStateBodySchema as GameStateBodySchemaInterface } from '../types/game-state-body';
import * as Ajv from 'ajv';
import * as AjvErrors from 'ajv-errors';
const ajv = new Ajv({allErrors: true, jsonPointers: true});

AjvErrors(ajv);
type GameStatePostRequest = {
    Body: GameStateBodySchemaInterface
};

function preValidatePost(request: FastifyRequest<GameStatePostRequest>, reply, done: HookHandlerDoneFunction) {
    const validate = ajv.compile(GameStateBodySchema)
    const isValid = validate(request.body);
    console.log(validate.errors)
    done(!isValid ? { statusCode: 400, validation: validate.errors } as FastifyError : undefined)
}

export default async function (fastify: FastifyInstance, opts: any) {
    const gameStatePostOpts: RouteShorthandOptions = {
        schema: {
            body: GameStateBodySchema,
        },
        // To add extra validation
        preValidation: preValidatePost
    }
    fastify.post<GameStatePostRequest>('/', gameStatePostOpts, async function (request, reply) {
        const gameState = request.body;
        console.log(gameState);
        return `Adding ${gameState.key}`;
    });
}
