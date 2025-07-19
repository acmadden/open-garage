export class GarageNotFound extends Error {
	public readonly type = 'garage-not-found';
}

export class GetGarageFailure extends Error {
	public readonly type = 'get-garage-failure';
}
