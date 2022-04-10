import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'client-card-view',
  templateUrl: './client-card-view.component.html',
  styleUrls: ['./client-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardViewComponent {
  @Input() set data(data: any) {
    this._data = data;
    this.phone = data.phone;
  }


  private _data: any;
  phone: number | undefined;

  get data() {
    return this._data;
  }

  get header() {
    return `Карточка клиента ${this.data.organizationName}`;
  }

}
