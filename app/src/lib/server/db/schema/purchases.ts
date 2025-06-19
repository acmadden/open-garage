import { integer, numeric, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { vehicles } from './vehicles';
import { odometer_logs } from './odometer_logs';

export const purchases = pgTable('purchases', {
	id: serial('id').primaryKey(),
	vehicle_id: integer()
		.notNull()
		.references(() => vehicles.id),
	odometer_log_id: integer()
		.notNull()
		.references(() => odometer_logs.id),
	seller: varchar({ length: 150 }).notNull(),
	buyer: varchar({ length: 150 }).notNull(),
	currency: varchar({ length: 3 }).notNull(),
	amount: numeric({ precision: 12, scale: 2 }).notNull(),
	date: timestamp().notNull()
});
