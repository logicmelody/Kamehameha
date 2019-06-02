import {
	VEGETA_ATTACK,
	STOP_VEGETA_ATTACK,
} from './action-types';

export function vegetaAttackAction() {
	return {
		type: VEGETA_ATTACK,
	};
}

export function stopVegetaAttackAction() {
	return {
		type: STOP_VEGETA_ATTACK,
	};
}
