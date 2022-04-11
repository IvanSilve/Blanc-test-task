import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ClientsList } from './models';

const clientsData: ClientsList = [
  {
    id: 1,
    organizationName: 'Blanc',
    tin: 3664069397,
    openDate: 1649494401000,
    balance: 6789342692,
  },
  {
    id: 28,
    organizationName: 'Dio',
    tin: 4664059391,
    openDate: 1249494401000,
    balance: 342692,
  },
  {
    id: 44,
    organizationName: 'Sber',
    tin: 7664029396,
    openDate: 1599494401000,
    balance: 2934232,
  },
  {
    id: 67,
    organizationName: 'ООО Спар',
    tin: 1264065395,
    openDate: 1645494401000,
    balance: 67893,
  },
  {
    id: 90,
    organizationName: 'Виа',
    tin: 8864068393,
    openDate: 1549494401000,
    balance: 4789342692,
  },
  {
    id: 112,
    organizationName: 'Another organization',
    tin: 2664029322,
    openDate: 1644494401000,
    balance: 89342692,
  },
  {
    id: 132,
    organizationName: 'very long name of some unknown organiztion',
    tin: 3624669191,
    openDate: 1649494401000,
    balance: -200,
  },
  {
    id: 133,
    organizationName: 'see you later',
    tin: 4664069397,
    openDate: 1649224401000,
    balance: 50000,
  },
];

@Injectable()
export class ClientsListInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === 'clients' && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: clientsData }));
    }

    return next.handle(req);
  }
}
