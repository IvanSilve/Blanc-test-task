import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCardViewComponent } from './client-card-view.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, PanelModule, ButtonModule],
  declarations: [ClientCardViewComponent],
  exports: [ClientCardViewComponent],
})
export class ClientCardViewModule {}
