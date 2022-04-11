import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { ClientCardStore } from './client-card.store.service';
import { ClientCard } from '../models/client-card.model';

@Injectable({
  providedIn: 'root',
})
export class ClientsCardService {
  constructor(private http: HttpClient, private store: ClientCardStore) {}

  getClient(clientId: number): Observable<ClientCard> {
    return (
      this.http.get(`clients/${clientId}`) as Observable<ClientCard>
    ).pipe(
      tap((client) => this.store.update(client.id, client)),
      switchMap(() => this.store.select(clientId))
    );
  }

  updateClient(clientId: number, body: Partial<ClientCard>) {
    return (
      this.http.put(`clients/${clientId}`, body) as Observable<ClientCard>
    ).pipe(tap((client) => this.store.update(client.id, client)));
  }
}
