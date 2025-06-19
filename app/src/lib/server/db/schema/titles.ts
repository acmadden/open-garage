import { integer, pgTable, serial, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { vehicles } from './vehicles';

export const titles = pgTable(
	'titles',
	{
		id: serial('id').primaryKey(),
		vehicle_id: integer()
			.notNull()
			.references(() => vehicles.id),
		number: varchar({ length: 20 }).notNull(),
		issue_date: timestamp().notNull()
	},
	(table) => [uniqueIndex('title_no_idx').on(table.number)]
);
