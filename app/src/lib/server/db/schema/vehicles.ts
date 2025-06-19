import { integer, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { garages } from './garages';

export const vehicles = pgTable(
	'vehicles',
	{
		id: serial('id').primaryKey(),
		garage_id: integer()
			.notNull()
			.references(() => garages.id),
		name: varchar({ length: 100 }),
		vin: varchar({ length: 17 }),
		year: varchar({ length: 4 }),
		make: varchar({ length: 100 }),
		model: varchar({ length: 100 })
	},
	(table) => [uniqueIndex('vin_idx').on(table.vin)]
);
