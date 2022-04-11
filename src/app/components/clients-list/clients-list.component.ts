import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output
} from '@angular/core';
import { TableCols, TABLE_COLS } from '@tokens';
import { CLIENTS_COLS } from './constants';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  providers: [
    {
      provide: TABLE_COLS,
      useValue: CLIENTS_COLS,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent {
  @Input() data: any;

  @Output() onClientClick = new EventEmitter<number>()

  constructor(@Inject(TABLE_COLS) public cols: TableCols[]) {}
}
