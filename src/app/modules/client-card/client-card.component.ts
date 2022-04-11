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
    phone: 79929339282,
    transactions: [
      {
        paymentDate: 1649494401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'out'
      },
      {
        paymentDate: 1639492401000,
        сounterparty: 'Sber',
        amount: 9000,
        paymentType: 'in'
      },
      {
        paymentDate: 1629491401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'in'
      },
      {
        paymentDate: 1619489401000,
        сounterparty: 'Виа',
        amount: 100000,
        paymentType: 'out'
      },
    ],
  };
  changePhone(phone: number) {
    console.log(`change phone on ${phone}`)
  }
}
