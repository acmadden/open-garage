import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { vehicles } from '../schema/vehicles';
import { relations } from 'drizzle-orm';

export const service_visits = pgTable('service_visits', {
	id: serial('id').primaryKey(),
	vehicle_id: integer()
		.notNull()
		.references(() => vehicles.id),
	odometer: integer().notNull(),
	notes: text().notNull(),
	date: timestamp().notNull()
});

export const service_visit_vehicle = relations(service_visits, ({ one }) => ({
	vehicle: one(vehicles, {
		fields: [service_visits.vehicle_id],
		references: [vehicles.id]
	})
}));
