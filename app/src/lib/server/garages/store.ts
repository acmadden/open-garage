import { db } from '../db';
import Result from 'ts-results';
import { GarageNotFound } from './errors';

/**
 * Retrieves a single garage by its unique identifier, including associated vehicles and their service visit details.
 *
 * @param garage_id - The unique identifier (encoded string) of the garage to retrieve.
 * @returns A `Result.Ok` containing the found `Garage` object (with nested vehicles and service visits)
 * if successful. If the garage is not found, returns a `Result.Err` containing a `GarageNotFound` error.
 */
const get = async (garage_id: string) => {
	const garage = await db.query.garages.findFirst({
		with: {
			vehicles: {
				with: {
					service_visits: {
						orderBy: (table, { desc }) => desc(table.date),
						limit: 1
					}
				}
			}
		},
		where: (garages, { eq }) => eq(garages.id, garage_id)
	});

	if (!garage) {
		return Result.Err(new GarageNotFound());
	}

	return Result.Ok(garage);
};

export const store = {
	get
};
