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
  @Input() set phone(phone: number | undefined) {
    if (!phone) return;

    this.initialPhone = phone;
    this.phoneModel = phone;
  }

  @Output() onConfirm = new EventEmitter<number>();

  @ViewChild('phoneInput') private phoneInput?: InputMask;

  phoneModel?: number;
  private initialPhone?: number;

  phoneEditMode = new BehaviorSubject(false);

  constructor(private cd: ChangeDetectorRef) {}

  openEdit() {
    this.phoneEditMode.next(true);
    this.phoneInput?.focus();
  }

  cancelEdit() {
    this.phoneModel = this.initialPhone;
    this.cd.detectChanges();
    this.phoneEditMode.next(false);
  }

  preventDefault(event: MouseEvent) {
    event.preventDefault()
  }
}
