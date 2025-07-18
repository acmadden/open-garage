import { relations } from 'drizzle-orm';
import { pgTable, varchar } from 'drizzle-orm/pg-core';
import { vehicles } from './vehicles';
import { encoded } from '../types/encoded';

export const garages = pgTable('garages', {
	id: encoded.pk().primaryKey(),
	name: varchar({ length: 100 }).notNull()
});

export const garage_vehicles = relations(garages, ({ many }) => ({
	vehicles: many(vehicles)
}));
