import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { clientsRoutes } from './constants';
import { ClientsListModule } from '@components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientsRoutes),
    ClientsListModule
  ],
  declarations: [ClientsComponent]
})
export class ClientsModule {}
