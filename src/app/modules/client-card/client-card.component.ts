import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export type ClientDetails = {}
@Component({
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  mockData = {
    clientId: 67,
    organizationName: 'ООО Спар',
    tin: 1264065395,
    openDate: 1645494401000,
    balance: 67893,
    phone: 89929339282,
    transactions: [
      {
        paymentDate: 1649494401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'out'
      },
      {
        paymentDate: 1649492401000,
        сounterparty: 'Sber',
        amount: 9000,
        paymentType: 'in'
      },
      {
        paymentDate: 1649491401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'in'
      },
      {
        paymentDate: 1649489401000,
        сounterparty: 'Виа',
        amount: 100000,
        paymentType: 'out'
      },
    ],
  };
}
