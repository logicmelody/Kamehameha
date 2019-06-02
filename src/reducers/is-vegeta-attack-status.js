import {
	VEGETA_ATTACK,
	STOP_VEGETA_ATTACK,
} from '../actions/action-types';

const INITIAL_STATE = false;

export default function isVegetaAttackStatus(state = INITIAL_STATE, action) {
	switch (action.type) {
		case VEGETA_ATTACK:
			return true;

		case STOP_VEGETA_ATTACK:
			return false;

		default:
			return state;
	}
}
