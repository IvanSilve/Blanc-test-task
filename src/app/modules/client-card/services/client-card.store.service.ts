import { Injectable } from '@angular/core';
import { Store } from '@utils';
import { ClientCard } from '../models/client-card.model';

type StoreModel = {
  [key: number]: ClientCard;
};

@Injectable({
  providedIn: 'root',
})
export class ClientCardStore extends Store<StoreModel> {
  constructor() {
    super({});
  }
}
