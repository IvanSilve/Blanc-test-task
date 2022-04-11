import { Injectable } from '@angular/core';
import { Store } from '@utils';
import { ClientsList } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ClientListStore extends Store<ClientsList> {}
