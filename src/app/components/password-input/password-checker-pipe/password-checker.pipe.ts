import {inject, Pipe, PipeTransform} from '@angular/core';
import {PasswordService} from "../../../shared/services/password.service";
import {PasswordStrengthEnum} from "../../../shared/password-strength-enum";

@Pipe({
  name: 'passwordChecker'
})
export class PasswordCheckerPipe implements PipeTransform {
  private passwordService: PasswordService = inject(PasswordService);

  transform(value: string, ...args: unknown[]): PasswordStrengthEnum {
    return this.passwordService.checkPassword(value);
  }

}
