import {
	STOP_KAMEHAMEHA,
	CHARGE_KAMEHAMEHA,
	FIRE_KAMEHAMEHA,
} from './action-types';

function stopKamehamehaAction() {
	return {
		type: STOP_KAMEHAMEHA,
	};
}

function chargeKamehamehaAction() {
	return {
		type: CHARGE_KAMEHAMEHA,
	};
}

function fireKamehamehaAction() {
	return {
		type: FIRE_KAMEHAMEHA,
	};
}
