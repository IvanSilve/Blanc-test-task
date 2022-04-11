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

  changePhone(phone: number) {
    this.clientCardService.updateClient(this.clientId, { phone }).subscribe();
  }
}
