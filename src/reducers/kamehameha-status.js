import {
	STOP_KAMEHAMEHA,
	CHARGE_KAMEHAMEHA,
	FIRE_KAMEHAMEHA,
} from '../actions/action-types';

import { KamehamehaStatusEnum } from '../utils/utils';

const INITIAL_STATE = KamehamehaStatusEnum.NORMAL;

export default function kamehamehaStatus(state = INITIAL_STATE, action) {
	switch (action.type) {
		case STOP_KAMEHAMEHA:
			return KamehamehaStatusEnum.NORMAL;

		case CHARGE_KAMEHAMEHA:
			return KamehamehaStatusEnum.CHARGE;

		case FIRE_KAMEHAMEHA:
			return KamehamehaStatusEnum.FIRE;

		default:
			return state;
	}
}
