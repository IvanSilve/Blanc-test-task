import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'phone-editable-input',
  templateUrl: './phone-editable-input.component.html',
  styleUrls: ['./phone-editable-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneEditableInputComponent {
  @Input() set phone(phone: number | undefined | null) {
    console.log(phone);

    if (!phone) return;

    this.initialPhone = phone;
    this.phoneModel = phone;
    this.phoneEditMode.next(false);
  }

  @Output() onConfirm = new EventEmitter<number>();

  @ViewChild('phoneInput') private phoneInput?: InputMask;

  private initialPhone?: number;

  phoneModel?: number;

  phoneEditMode = new BehaviorSubject(false);

  constructor(private cd: ChangeDetectorRef) {}

  openEdit() {
    this.phoneEditMode.next(true);
    this.phoneInput?.focus();
  }

  cancelEdit() {
    this.phoneEditMode.next(false);

    this.phoneModel = this.initialPhone;
    this.cd.detectChanges();
  }

  preventDefault(event: MouseEvent) {
    event.preventDefault();
  }

  acceptPhone() {
    this.onConfirm.emit(this.phoneModel);
  }
}
