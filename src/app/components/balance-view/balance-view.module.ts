import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceViewComponent } from './balance-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BalanceViewComponent],
  exports: [BalanceViewComponent]
})
export class BalanceViewModule { }
