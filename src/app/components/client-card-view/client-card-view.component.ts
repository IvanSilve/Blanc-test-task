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
  @Input() set data(data: any) {
    this._data = data;
    // можно было и без этого, мне больше нравится, когда template чистый
    this.rows = Object.keys(data)
      .filter((key) => {
        return rowKeys.includes(key);
      })
      .map((key) => {
        const fromClientCols = CLIENTS_COLS.find((col) => col.field === key);
        return {
          field: fromClientCols?.header,
          value: data[key],
          date: fromClientCols?.date,
        };
      });
  }

  private _data: any;
  rows: any;

  get data() {
    return this._data;
  }

  get header() {
    return `Карточка клиента ${this.data.organizationName}`;
  }
}
