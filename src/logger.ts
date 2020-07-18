import pino from 'pino';

const logLevel = 'debug';
export const logger = pino({
  name: 'app',
  level: logLevel,
});
