import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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
  @Input() phone?: number;

  phoneEditMode = new BehaviorSubject(false);

  @ViewChild('phoneInput') private phoneInput?: InputMask;


  editPhone(mode: boolean) {
    this.phoneEditMode.next(mode);
    if (mode) this.phoneInput?.focus();
  }
}
