import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent implements OnInit {
  ngOnInit() {}

  clientsData = [
    {
      organizationName: 'Blanc',
      tin: 3664069397,
      openDate: 1649494401000,
      balance: 6789342692,
    },
    {
      organizationName: 'Dio',
      tin: 4664059391,
      openDate: 1249494401000,
      balance: 342692,
    },
    {
      organizationName: 'Sber',
      tin: 7664029396,
      openDate: 1599494401000,
      balance: 2934232,
    },
    {
      organizationName: 'ООО Спар',
      tin: 1264065395,
      openDate: 1645494401000,
      balance: 67893,
    },
    {
      organizationName: 'Виа',
      tin: 8864068393,
      openDate: 1549494401000,
      balance: 4789342692,
    },
    {
      organizationName: 'Another organization',
      tin: 2664029322,
      openDate: 1644494401000,
      balance: 89342692,
    },
    {
      organizationName: 'very long name of some unknown organiztion',
      tin: 3624669191,
      openDate: 1649494401000,
      balance: -200,
    },
    {
      organizationName: 'see you later',
      tin: 4664069397,
      openDate: 1649224401000,
      balance: 50000,
    },
  ];
}
