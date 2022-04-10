import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CLIENTS_COLS } from '../clients-list/constants';
import { rowKeys } from './constants';

@Component({
  selector: 'client-card-view',
  templateUrl: './client-card-view.component.html',
  styleUrls: ['./client-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardViewComponent {
  @Input() data: any;

  get header() {
    return `Карточка клиента ${this.data.organizationName}`;
  }
}
