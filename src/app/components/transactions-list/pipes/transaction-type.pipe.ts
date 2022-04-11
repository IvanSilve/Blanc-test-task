import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType',
})
export class TransactionTypePipe implements PipeTransform {
  transform(value: 'in' | 'out'): string {
    switch (value) {
      case 'out':
        return 'Исходящий';
      case 'in':
		  return 'Входящий';
      default:
        return value;
    }
  }
}

@NgModule({
	declarations: [TransactionTypePipe],
	exports: [TransactionTypePipe]
})
export class TransactionTypeModule {}