import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientCard } from './models/client-card.model';

const mockData: { [key: string]: ClientCard } = {
  '67': {
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
  },
  '1': {
    id: 1,
    organizationName: 'Blanc',
    tin: 3664069397,
    openDate: 1649494401000,
    balance: 6789342692,
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
  },
  '28': {
    id: 28,
    organizationName: 'Dio',
    tin: 4664059391,
    openDate: 1249494401000,
    balance: 342692,
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
  },
  '44': {
    id: 44,
    organizationName: 'Sber',
    tin: 7664029396,
    openDate: 1599494401000,
    balance: 2934232,
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
  },
  '90': {
    id: 90,
    organizationName: 'Виа',
    tin: 8864068393,
    openDate: 1549494401000,
    balance: 4789342692,
    phone: 79929339282,
    transactions: [
      {
        paymentDate: 1649494401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'out',
      },
    ],
  },
  '112': {
    id: 112,
    organizationName: 'Another organization',
    tin: 2664029322,
    openDate: 1644494401000,
    balance: 89342692,
    phone: 79929339282,
    transactions: [
      {
        paymentDate: 1649494401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'out',
      },
    ],
  },
  '132': {
    id: 132,
    organizationName: 'very long name of some unknown organiztion',
    tin: 3624669191,
    openDate: 1649494401000,
    balance: -200,
    phone: 79929339282,
    transactions: [
      {
        paymentDate: 1649494401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'out',
      },
    ],
  },
  '133': {
    id: 133,
    organizationName: 'see you later',
    tin: 4664069397,
    openDate: 1649224401000,
    balance: 50000,
    phone: 79929339282,
    transactions: [
      {
        paymentDate: 1649494401000,
        сounterparty: 'Dia',
        amount: 89600,
        paymentType: 'out',
      },
    ],
  },
};

@Injectable()
export class ClientCardInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isClientCardRequest(req)) {
      const id = req.url.slice(8);
      return of(new HttpResponse({ status: 200, body: mockData[id] }));
    }

    return next.handle(req);
  }

  isClientCardRequest(req: HttpRequest<any>): boolean {
    return (
      req.url.includes('clients/') &&
      req.method === 'GET' &&
      Number(req.url.slice(8)) !== NaN
    );
  }
}
