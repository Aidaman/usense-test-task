import {Injectable} from '@angular/core';
import {AbstractPasswrodSerivce} from "./abstract-passwrod-serivce";
import {PasswordStrengthEnum} from "../password-strength-enum";

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends AbstractPasswrodSerivce {
  checkPassword(password: string): PasswordStrengthEnum {
    if (password.length === 0) {
      return PasswordStrengthEnum.EMPTY;
    }

    if (password.length < 8 && password.length > 0) {
      return PasswordStrengthEnum.SHORT;
    }

    console.log(`password ${password} is ${password.length} character long`);

    if (this.strongPasswordCheck.test(password)) {
      return PasswordStrengthEnum.STRONG;
    }
    if (this.mediumPasswordCheck.test(password)) {
      return PasswordStrengthEnum.MEDIUM;
    }

    return PasswordStrengthEnum.EASY;
  }


}
