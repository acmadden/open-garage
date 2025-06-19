import { integer, numeric, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';
import { parts } from './parts';

export const receipts = pgTable('receipts', {
	id: serial('id').primaryKey(),
	part_id: integer()
		.notNull()
		.references(() => parts.id),
	vendor: varchar({ length: 150 }),
	price: numeric({ precision: 12, scale: 2 }).notNull(),
	rebate: numeric({ precision: 12, scale: 2 }),
	image: varchar(),
	date: timestamp().notNull()
});
