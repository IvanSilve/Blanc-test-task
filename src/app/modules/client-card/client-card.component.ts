import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { GET_ROUTE_ID, GET_ROUTE_ID_PROVIDER } from '@tokens';
import { ClientCard } from './models/client-card.model';
import { ClientsCardService } from './services';

export type ClientDetails = {};
@Component({
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  providers: [GET_ROUTE_ID_PROVIDER],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardComponent {
  clientCard$ = this.clientCardService.getClient(this.clientId);
  constructor(
    private clientCardService: ClientsCardService,
    @Inject(GET_ROUTE_ID) private clientId: number
  ) {}

  mockData: ClientCard = {
    id: 67,
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
        paymentType: 'out',
      },
      {
        paymentDate: 1639492401000,
        сounterparty: 'Sber',
        amount: 9000,
        paymentType: 'in',
      },
      {
        paymentDate: 1629491401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'in',
      },
      {
        paymentDate: 1619489401000,
        сounterparty: 'Виа',
        amount: 100000,
        paymentType: 'out',
      },
    ],
  };
  changePhone(phone: number) {
    this.clientCardService.updateClient(this.clientId, { phone }).subscribe();
  }
}
