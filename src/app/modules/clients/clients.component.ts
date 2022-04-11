import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsList } from './models';
import { ClientsListService } from './services';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  constructor(
    private router: Router,
    private clientListService: ClientsListService
  ) {}

  clientsList$ = this.clientListService.getClientList();

  openCard(id: number) {
    this.router.navigateByUrl(`clients/card/${id}`);
  }
}
