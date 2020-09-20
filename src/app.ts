import {logger} from './logger';
import {handleError, handleTerminationSignal} from './support/processHandlers';
import createServer from './server';
import knexConfig from './knexfile';
import Knex from 'knex';
import {Model} from 'objection';

const port = process.env.API_PORT || 3000;

// Initialize knex.
const knexConfiguration =
  process.env.NODE_ENV === 'production' ? knexConfig.production : knexConfig.development;
const knex = Knex(knexConfiguration);
Model.knex(knex);

// HTTP server
const server = createServer();
server.listen(port);
server.on('error', handleError);
server.on('listening', () => {
  logger.info(`Server listening at http://127.0.0.1:${port}`);
});

// Process termination
const signalsArray: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
signalsArray.forEach((signal) => {
  process.once(signal, handleTerminationSignal);
});

process.on('exit', () => logger.info('Process terminated'));
