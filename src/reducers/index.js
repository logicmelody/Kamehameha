import { combineReducers } from 'redux';

import kamehamehaStatus from "./kamehameha-status";
import isVegetaAttackStatus from './is-vegeta-attack-status';

export default combineReducers({
	kamehamehaStatus,
	isVegetaAttackStatus,
});
