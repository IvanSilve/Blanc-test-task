import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './client-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientCardViewModule } from '@components';

export const routes: Routes = [
	{
		path: '',
		component: ClientCardComponent
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];
@NgModule({
  imports: [
    CommonModule,  RouterModule.forChild(routes), ClientCardViewModule
  ],
  declarations: [ClientCardComponent]
})
export class ClientCardModule { }
