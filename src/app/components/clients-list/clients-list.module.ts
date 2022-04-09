import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientsListComponent],
  exports: [ClientsListComponent]
})
export class ClientsListModule { }
