import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list.component';
import { TableModule } from 'primeng/table';
import { BalanceViewModule } from '../balance-view/balance-view.module';
@NgModule({
  imports: [CommonModule, TableModule, BalanceViewModule],
  declarations: [ClientsListComponent],
  exports: [ClientsListComponent],
})
export class ClientsListModule {}
