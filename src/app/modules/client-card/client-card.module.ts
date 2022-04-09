import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardComponent } from './client-card.component';
import { RouterModule, Routes } from '@angular/router';

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
    CommonModule,  RouterModule.forChild(routes)
  ],
  declarations: [ClientCardComponent]
})
export class ClientCardModule { }
