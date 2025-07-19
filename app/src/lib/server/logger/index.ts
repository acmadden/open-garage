import { env } from '$env/dynamic/private';
import { createLogger, format, transports } from 'winston';
import LokiTransport from 'winston-loki';

if (!env.LOG_HOST) throw new Error('LOG_HOST is not set');

export const logger = createLogger({
	level: env.LOG_LEVEL,
	transports: [
		new LokiTransport({
			host: env.LOG_HOST,
			labels: { job: 'opengarage' },
			json: true,
			format: format.json(),
			replaceTimestamp: true,
			onConnectionError: (err) => console.error(err)
		}),
		new transports.Console({
			format: format.combine(format.colorize(), format.simple())
		})
	]
});
