
import { Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

export const clientsRoutes: Routes = [
	{
		path: 'clients',
		component: ClientsComponent
	},
	{
		path: 'clients/card/:id',
		loadChildren: () =>
			import('../client-card/client-card.module').then(
				m => m.ClientCardModule
			)
	},
	{
		path: '**',
		redirectTo: 'clients',
		pathMatch: 'full'
	}
];