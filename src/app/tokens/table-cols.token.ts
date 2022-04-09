import { InjectionToken } from '@angular/core';

export const TABLE_COLS = new InjectionToken<TableCols[]>(
  'token to provide columns for prime table',
  {
    factory: () => [],
  }
);

export type TableCols = {
  header: string;
  field: string;
  date?: boolean;
};
