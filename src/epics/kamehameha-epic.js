import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import {
	switchMap,
	map,
	delay,
	takeUntil,
} from 'rxjs/operators';

import {
	STOP_KAMEHAMEHA,
	CHARGE_KAMEHAMEHA,
} from '../actions/action-types';

import {
	fireKamehamehaAction,
} from '../actions/kamehameha-actions';

export function kamehamehaChargeEpic(action$) {
	return action$.pipe(
		ofType(CHARGE_KAMEHAMEHA),
		switchMap(() =>
			of(0).pipe(
				delay(5000),
				takeUntil(action$.pipe(ofType(STOP_KAMEHAMEHA))),
				map(fireKamehamehaAction),
			)
		)
	);
}
