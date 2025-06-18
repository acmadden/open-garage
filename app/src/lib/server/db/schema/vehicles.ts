import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const vehicles = pgTable('vehicles', {
	id: serial('id').primaryKey()
});
