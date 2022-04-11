import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { TableCols, TABLE_COLS } from '@tokens';
import { TRANSACTIONS_COLS } from './constants';

@Component({
  selector: 'transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
  providers: [
    {
      provide: TABLE_COLS,
      useValue: TRANSACTIONS_COLS,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsListComponent {
  @Input() data: any;

  constructor(@Inject(TABLE_COLS) public cols: TableCols[]) {}
}
