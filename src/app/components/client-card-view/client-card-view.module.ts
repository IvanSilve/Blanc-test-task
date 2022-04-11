import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardViewComponent } from './client-card-view.component';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { PhoneEditableInputModule } from '../phone-editable-input/phone-editable-input.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TransactionsListModule } from '../transactions-list/transactions-list.module';
import { BalanceViewModule } from '../balance-view/balance-view.module';
@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    PhoneEditableInputModule,
    ConfirmDialogModule,
    TransactionsListModule,
    BalanceViewModule
  ],
  declarations: [ClientCardViewComponent],
  exports: [ClientCardViewComponent],
})
export class ClientCardViewModule {}
