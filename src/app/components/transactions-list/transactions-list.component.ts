import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { TableCols, TABLE_COLS } from '@tokens';
import { Transaction } from 'app/modules/client-card/models/client-card.model';
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
  @Input() data?: Transaction[];

  constructor(@Inject(TABLE_COLS) public cols: TableCols[]) {}
}
