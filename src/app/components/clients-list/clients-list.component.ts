import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsListComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
