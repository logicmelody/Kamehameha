import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import {
	switchMap,
	map,
	flatMap,
	delay,
	takeUntil,
	filter,
} from 'rxjs/operators';

import {
	STOP_KAMEHAMEHA,
	CHARGE_KAMEHAMEHA,
} from '../actions/action-types';

import {
	fireKamehamehaAction,
} from '../actions/kamehameha-actions';

import {
	vegetaAttackAction,
} from '../actions/vegeta-actions';

export function kamehamehaChargeEpic(action$) {
	return action$.pipe(
		// filter(action => CHARGE_KAMEHAMEHA === action.type),
		ofType(CHARGE_KAMEHAMEHA),
		switchMap(action =>
			of(0).pipe(
				delay(5000),
				takeUntil(action$.pipe(ofType(STOP_KAMEHAMEHA))),
				// map(fireKamehamehaAction),
				flatMap(action => [fireKamehamehaAction(), vegetaAttackAction()]),
			)
		)
	);
}
