import { db } from '../db';
import Result from 'ts-results';
import { GarageNotFound, GetGarageFailure } from './errors';

/**
 * Retrieves a garage by its unique identifier,
 * including associated vehicles and their **most recent**
 * service visit.
 *
 * @param garage_id - The unique identifier (encoded string)
 * of the garage to retrieve.
 * @returns A `Result.Ok` containing the found `Garage` object
 * (with nested vehicles and their most recent service visit)
 * if successful. If the garage is not found, returns a `Result.Err`
 * containing a `GarageNotFound` error.
 *
 * In case of an unexpected error during retrieval, a `Result.Err`
 * containing a `GetGarageFailure` error will be returned.
 */
const get = async (garage_id: string) => {
	try {
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
	} catch (error: any) {
		return Result.Err(new GetGarageFailure(error.message));
	}
};

export const store = {
	get
};
