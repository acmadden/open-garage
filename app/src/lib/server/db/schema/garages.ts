import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const garages = pgTable('garages', {
	id: serial('id').primaryKey(),
	name: varchar({ length: 100 }).notNull()
});
