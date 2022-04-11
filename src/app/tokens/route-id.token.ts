import { inject, InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export const GET_ROUTE_ID = new InjectionToken<number>(
	'token that gets route id'
);

function getRouteId(): number {
	const routeId = +inject(ActivatedRoute).snapshot.params['id'];
	if (routeId) return routeId;
	throw new Error('В параметрах не найден Id');
}

export const GET_ROUTE_ID_PROVIDER: Provider = {
	provide: GET_ROUTE_ID,
	useFactory: getRouteId
};
