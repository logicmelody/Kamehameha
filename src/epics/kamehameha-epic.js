import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import {
	switchMap,
	map,
	delay,
} from 'rxjs/operators';

import {
	CHARGE_KAMEHAMEHA,
} from '../actions/action-types';

import {
	stopKamehamehaAction,
	fireKamehamehaAction,
} from '../actions/kamehameha-actions';

export function kamehamehaChargeEpic(action$) {
	return action$.pipe(
		ofType(CHARGE_KAMEHAMEHA),
		switchMap(() =>
			of(0).pipe(
				delay(5000),
				map(fireKamehamehaAction),
			)
		)
	);
}
