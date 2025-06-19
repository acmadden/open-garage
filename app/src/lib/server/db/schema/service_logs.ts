import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { vehicles } from './vehicles';
import { odometer_logs } from './odometer_logs';

export const service_logs = pgTable('service_logs', {
	id: serial('id').primaryKey(),
	vehicle_id: integer()
		.notNull()
		.references(() => vehicles.id),
	odometer_log_id: integer()
		.notNull()
		.references(() => odometer_logs.id),
	notes: text().notNull(),
	date: timestamp().notNull()
});
