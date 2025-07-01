import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { vehicles } from './vehicles';

export const garages = pgTable('garages', {
	id: serial('id').primaryKey(),
	name: varchar({ length: 100 }).notNull()
});

export const garage_vehicles = relations(garages, ({ many }) => ({
	vehicles: many(vehicles)
}));
