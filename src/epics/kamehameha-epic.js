import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
	switchMap,
	map,
	catchError,
} from 'rxjs/operators';

export function kamehamehaChargingEpic(action$) {
	return action$.pipe(
		switchMap(() =>
			ajax({
				url: `${apiBaseUrl}/release`,
				method: "GET",
				headers: Object.assign({}, DefaultHeader, {
					"Accept": "application/json"
				})
			}).pipe(
				map(payload => payload.response),
				map(fetchLatestReleaseSuccessAction),
				catchError(error => catchErrorMessageForEpics(error, fetchLatestReleaseFailedAction))
			)
		)
	);
}
