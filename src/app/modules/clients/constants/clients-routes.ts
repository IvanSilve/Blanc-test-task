
import { Routes } from '@angular/router';
import { ClientsComponent } from '../clients.component';

export const clientsRoutes: Routes = [
	{
		path: 'clients',
		data: {
			title: 'admin_accounts_list.nav_title'
		},
		component: ClientsComponent
	},
	{
		path: '**',
		redirectTo: 'clients',
		pathMatch: 'full'
	}
];
