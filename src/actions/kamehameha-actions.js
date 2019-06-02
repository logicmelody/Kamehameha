import {
	STOP_KAMEHAMEHA,
	CHARGE_KAMEHAMEHA,
	FIRE_KAMEHAMEHA,
} from './action-types';

export function stopKamehamehaAction() {
	return {
		type: STOP_KAMEHAMEHA,
	};
}

export function chargeKamehamehaAction() {
	return {
		type: CHARGE_KAMEHAMEHA,
	};
}

export function fireKamehamehaAction() {
	return {
		type: FIRE_KAMEHAMEHA,
	};
}
