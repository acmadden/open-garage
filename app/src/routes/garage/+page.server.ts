import { db } from '$lib';

export const load = async () => {
	const garage_id = 1;

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

	return {
		garage
	};
};
