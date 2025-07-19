import { pgTable, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { garages } from './garages';
import { relations } from 'drizzle-orm';
import { service_visits } from './service_visits';
import { encoded } from '../types/encoded';

export const vehicles = pgTable(
	'vehicles',
	{
		id: encoded.pk().primaryKey(),
		garage_id: encoded
			.fk()
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

export const vehicle_relations = relations(vehicles, ({ one, many }) => ({
	garage: one(garages, {
		fields: [vehicles.garage_id],
		references: [garages.id]
	}),
	service_visits: many(service_visits)
}));
