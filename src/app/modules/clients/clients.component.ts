import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent implements OnInit {
  ngOnInit() {}

  clientsData = [{
    organizationName: 'Blanc',
    inn: 3664069397,
    opanDate: 1649494401,
    balance: 6789342692
  },{
    organizationName: 'Dio',
    inn: 4664059391,
    opanDate: 1249494401,
    balance: 6789342692
  },{
    organizationName: 'Sber',
    inn: 7664029396,
    opanDate: 1599494401,
    balance: 6789342692
  },{
    organizationName: 'ООО Спар',
    inn: 1264065395,
    opanDate: 1645494401,
    balance: 6789342692
  },{
    organizationName: 'Виа',
    inn: 8864068393,
    opanDate: 1549494401,
    balance: 6789342692
  },{
    organizationName: 'Another organization',
    inn: 2664029322,
    opanDate: 1644494401,
    balance: 6789342692
  },{
    organizationName: 'very long name of some unknown organiztion',
    inn: 3624669191,
    opanDate: 1649494401,
    balance: -200
  },{
    organizationName: 'see you later',
    inn: 4664069397,
    opanDate: 1649224401,
    balance: 50000
  }];
}
