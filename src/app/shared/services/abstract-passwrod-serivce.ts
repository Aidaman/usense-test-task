import {PasswordStrengthEnum} from "../password-strength-enum";

export abstract class AbstractPasswrodSerivce {
  protected mediumPasswordCheck: RegExp = new RegExp('((?=.*?[A-Za-z])(?=.*?\\d)|(?=.*?[A-Za-z])(?=.*?[\\W_])|(?=.*?[\\W_])(?=.*?\\d))', 'g');
  protected strongPasswordCheck: RegExp = new RegExp('(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[\\W_])', 'g');

  public abstract checkPassword(password: string): PasswordStrengthEnum;
}
