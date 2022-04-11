import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientListStore } from './client-list.store.service';
import { Observable, switchMap, take, tap } from 'rxjs';
import { ClientsList } from '../models';
@Injectable({
  providedIn: 'root',
})
export class ClientsListService {
  constructor(private http: HttpClient, private store: ClientListStore) {}

  getClientList() {
    if (this.store.getAll()) return this.store.selectAll();
    return (this.http.get(`clients`) as Observable<ClientsList>).pipe(
      tap((response) => this.store.set(response)),
      switchMap(() => this.store.selectAll())
    );
  }
}
