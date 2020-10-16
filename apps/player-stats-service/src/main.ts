// Require the framework and instantiate it
import fastify from 'fastify'
import dbConnector from './plugins/db-connector'
import gameRoutes from './routes/game'
const server = fastify({
    logger: true
})

const apiBase = 'api/player-stats';

server.register(dbConnector);
server.register(gameRoutes, { prefix: `${apiBase}/game` });

// Run the server!
server.listen(3001, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`server listening on ${address}`)
})
