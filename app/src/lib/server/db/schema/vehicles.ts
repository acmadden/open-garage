import { date, integer, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { garages } from './garages';
import { relations } from 'drizzle-orm';
import { service_visits } from './service_visits';

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
		model: varchar({ length: 100 }),
		title_no: varchar({ length: 50 }),
		purchase_date: date()
	},
	(table) => [uniqueIndex('vin_idx').on(table.vin)]
);

export const vehicle_garage = relations(vehicles, ({ one }) => ({
	garage: one(garages, {
		fields: [vehicles.garage_id],
		references: [garages.id]
	})
}));

export const vehicle_service_visits = relations(vehicles, ({ many }) => ({
	service_visits: many(service_visits)
}));
