import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input({required: true}) public label!: string;

  public val: string = "";
  public disabled: boolean = false;

  public onChange = (value: any) => {
  };
  public onTouched = () => {
  };

  public set value(value: any) {
    if (value && this.val === value) {
      return;
    }

    this.val = value;

    this.onChange(value);
    this.onTouched();
  }

  public writeValue(obj: any): any {
    this.value = obj;
    return obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
