import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { PhoneEditableInputComponent } from '../phone-editable-input/phone-editable-input.component';

@Component({
  selector: 'client-card-view',
  templateUrl: './client-card-view.component.html',
  styleUrls: ['./client-card-view.component.scss'],
  providers: [ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardViewComponent {
  @Input() set data(data: any) {
    this._data = data;
    this.phone.next(data.phone);
  }

  @Output() onPhoneChange = new EventEmitter<number>();

  @ViewChild(PhoneEditableInputComponent)
  private phoneInputComponent!: PhoneEditableInputComponent;

  private _data: any;
  phone = new BehaviorSubject<number | null>(null);

  constructor(private confirmService: ConfirmationService) {}

  get data() {
    return this._data;
  }

  get header() {
    return `Карточка клиента ${this.data.organizationName}`;
  }

  openPhoneConfirmDialog(phone: number) {
    this.confirmService.confirm({
      message: 'Уверены, что хотите сменить номер телефона?',
      accept: () => {
        this.onPhoneChange.emit(phone);
        this.phone.next(phone)
      },
      reject: () => {
        this.phoneInputComponent.cancelEdit();
      },
    });
  }
}
