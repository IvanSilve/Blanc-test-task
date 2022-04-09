import { TableCols } from '@tokens';

export const CLIENTS_COLS: TableCols[] = [
  {
    header: 'наименование организации',
    field: 'organizationName',
  },
  {
    header: 'ИНН',
    field: 'tin',
  },
  {
    header: 'дата открытия счета',
    field: 'openDate',
    date: true
  },
  {
    header: 'остаток на счёте',
    field: 'balance',
  },
];
