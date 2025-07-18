import { db } from '../db';
import Result from 'ts-results';
import { GarageNotFound } from './errors';

const get = async (garage_id: string) => {
	const garage = await db.query.garages.findFirst({
		with: {
			vehicles: {
				with: {
					service_visits: {
						columns: {
							id: true,
							odometer: true,
							date: true
						}
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
