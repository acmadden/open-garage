import { integer, pgTable, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { garages } from './garages';

export const parts = pgTable(
	'parts',
	{
		id: serial('id').primaryKey(),
		garage_id: integer()
			.notNull()
			.references(() => garages.id),
		number: varchar({ length: 100 }).notNull(),
		name: varchar({ length: 100 }).notNull(),
		quantity: integer().notNull(),
		notes: text().notNull(),
		added_on: timestamp().notNull(),
		updated_on: timestamp().notNull()
	},
	(table) => [uniqueIndex('part_no_idx').on(table.number)]
);
