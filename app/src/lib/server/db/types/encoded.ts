import { customType } from 'drizzle-orm/pg-core';
import Sqids from 'sqids';

const _sqids = new Sqids({
	minLength: 10,
	alphabet: 'zAjk2YJrelTbwy9PWEuKcRmCSIdMQ1h8fXpnFZO7qGUtxDvsaoHLi65NBV430g'
});

const encode = (id: number) => _sqids.encode([id]);

const decode = (id: string) => _sqids.decode(id)[0];

const pk = customType<{ data: string; driverData: number }>({
	dataType() {
		return 'serial';
	},
	toDriver(value: string): number {
		return decode(value);
	},
	fromDriver(value: number): string {
		return encode(value);
	}
});

const fk = customType<{ data: string; driverData: number }>({
	dataType() {
		return 'integer';
	},
	toDriver(value: string): number {
		return decode(value);
	},
	fromDriver(value: number): string {
		return encode(value);
	}
});

export const encoded = {
	pk,
	fk
};
