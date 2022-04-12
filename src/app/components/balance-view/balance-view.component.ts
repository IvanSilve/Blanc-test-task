import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CURRENCY } from './constants';

@Component({
  selector: 'balance-view',
  templateUrl: './balance-view.component.html',
  styleUrls: ['./balance-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceViewComponent {
  @Input() balance?: number;
  @Input() numbersAfterDot = 2;
  @Input() minBeforeDot: number | null = null;
  @Input() currency: keyof typeof CURRENCY = 'RUB';

  get formattedBalance() {
    const beforeDot = Math.floor(this.balance || 0).toString();
    let positiveBeforeDot = beforeDot;
    if (this.balance && this.balance < 0) {
      positiveBeforeDot = beforeDot.slice(1);
    }

    if (this.minBeforeDot) {
      const missingCharts = Math.max(
        this.minBeforeDot - positiveBeforeDot.length + 1,
        0
      );
      for (let i = 0; i < missingCharts; i++) {
        positiveBeforeDot = '0' + positiveBeforeDot;
      }
    }

    const beforeDotFormatted: string[] = [];
    for (let i = positiveBeforeDot.length - 1; i >= 0; i--) {
      beforeDotFormatted.unshift(
        (positiveBeforeDot.length - i - 1) % 3 === 0 &&
          i !== positiveBeforeDot.length - 1
          ? positiveBeforeDot[i] + ' '
          : positiveBeforeDot[i]
      );
    }

    if (this.balance && this.balance < 0) {
      beforeDotFormatted.unshift('- ');
    }
    

    const formattedAll =
      beforeDotFormatted.join('') +
      this.balance?.toFixed(this.numbersAfterDot).slice(beforeDot.length);
    return formattedAll;
  }

  get currencyIcon() {
    return CURRENCY[this.currency];
  }
}
