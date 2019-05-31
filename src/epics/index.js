import { combineEpics } from 'redux-observable';

import {
	kamehamehaChargingEpic,
} from './kamehameha-epic';

const epics = combineEpics(
	kamehamehaChargingEpic,
);

export default epics;
