import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneEditableInputComponent } from './phone-editable-input.component';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, InputMaskModule, ButtonModule, FormsModule],
  declarations: [PhoneEditableInputComponent],
  exports: [PhoneEditableInputComponent],
})
export class PhoneEditableInputModule {}
