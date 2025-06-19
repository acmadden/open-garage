import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { vehicles } from './vehicles';

export const odometer_logs = pgTable('odometer_logs', {
	id: serial('id').primaryKey(),
	vehicle_id: integer()
		.notNull()
		.references(() => vehicles.id),
	distance: integer().notNull(),
	date: timestamp().notNull()
});
