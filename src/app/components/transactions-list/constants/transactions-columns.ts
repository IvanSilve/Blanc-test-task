import { TableCols } from '@tokens';


export const TRANSACTIONS_COLS: TableCols[] = [
  {
    header: 'Дата платежа',
    field: 'paymentDate',
    date: true,
  },
  {
    header: 'Контрагент',
    field: 'сounterparty',
  },
  {
    header: 'Сумма',
    field: 'amount',
  },
  {
    header: 'Тип',
    field: 'paymentType',
  },
];

