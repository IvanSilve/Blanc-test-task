import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list.component';
import { TableModule } from 'primeng/table';
import { TransactionTypeModule } from './pipes';

@NgModule({
  imports: [
    CommonModule, TableModule, TransactionTypeModule
  ],
  declarations: [TransactionsListComponent],
  exports: [TransactionsListComponent]
})
export class TransactionsListModule { }
