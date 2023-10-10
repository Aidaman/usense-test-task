import {Component, Input} from '@angular/core';
import {PasswordStrengthEnum} from "../../../shared/password-strength-enum";

@Component({
  selector: 'app-password-strenth-indicator',
  templateUrl: './password-strenth-indicator.component.html',
  styleUrls: ['./password-strenth-indicator.component.scss']
})
export class PasswordStrenthIndicatorComponent {
  @Input({required: true}) public passwordStrength: PasswordStrengthEnum = PasswordStrengthEnum.EMPTY;

  public get styles(): object {
    return {
      'password-strength-indicator': true,
      'password-strength-indicator--empty': this.passwordStrength === PasswordStrengthEnum.EMPTY,
      'password-strength-indicator--short': this.passwordStrength === PasswordStrengthEnum.SHORT,
      'password-strength-indicator--easy': this.passwordStrength === PasswordStrengthEnum.EASY,
      'password-strength-indicator--medium': this.passwordStrength === PasswordStrengthEnum.MEDIUM,
      'password-strength-indicator--strong': this.passwordStrength === PasswordStrengthEnum.STRONG,
    }
  }
}
