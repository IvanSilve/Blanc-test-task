import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list.component';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [ClientsListComponent],
  exports: [ClientsListComponent],
})
export class ClientsListModule {}
