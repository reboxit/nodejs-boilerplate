import './env';
import pino from 'pino';

const level = process.env.MORDOR_LOG_LEVEL || 'info';

export const logger = pino({
  name: 'reboxit',
  level,
});
