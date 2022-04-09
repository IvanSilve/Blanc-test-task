/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientsListService } from './clients-list.service';

describe('Service: ClientsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsListService]
    });
  });

  it('should ...', inject([ClientsListService], (service: ClientsListService) => {
    expect(service).toBeTruthy();
  }));
});
