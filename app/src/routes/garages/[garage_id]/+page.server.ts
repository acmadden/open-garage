import { garages, logger } from '$lib';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const garage_id = params.garage_id;

	const garage = await garages.store.get(garage_id);

	if (garage.err) {
		switch (garage.val.type) {
			case 'garage-not-found':
				error(404, 'no findy');
			default:
				logger.error(garage.val.message);
				error(500, 'server go boom');
		}
	}

	return {
		garage: garage.val
	};
};
