import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { vehicles } from '../schema/vehicles';
import { relations } from 'drizzle-orm';
import { encoded } from '../types/encoded';

export const service_visits = pgTable('service_visits', {
	id: encoded.pk().primaryKey(),
	vehicle_id: encoded
		.fk()
		.notNull()
		.references(() => vehicles.id),
	odometer: integer().notNull(),
	notes: text().notNull(),
	date: timestamp().notNull()
});

export const service_visit_relations = relations(service_visits, ({ one }) => ({
	vehicle: one(vehicles, {
		fields: [service_visits.vehicle_id],
		references: [vehicles.id]
	})
}));
