import {TestBed} from '@angular/core/testing';

import {PasswordService} from './password.service';
import {PasswordStrengthEnum} from "../password-strength-enum";

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assert that password is too short', () => {
    const shortPassword: string = 'foo';
    expect(service.checkPassword(shortPassword)).toBe(PasswordStrengthEnum.SHORT);
  });

  it('should test easy password', () => {
    const easyPassword1: string = 'password';
    const easyPassword2: string = '12345678';
    const easyPassword3: string = '________';
    expect(service.checkPassword(easyPassword1)).toBe(PasswordStrengthEnum.EASY);
    expect(service.checkPassword(easyPassword2)).toBe(PasswordStrengthEnum.EASY);
    expect(service.checkPassword(easyPassword3)).toBe(PasswordStrengthEnum.EASY);
  });

  it('should test medium password', () => {
    const mediumPassword1: string = 'p4ssw0rd'
    const mediumPassword2: string = 'passw#rd'
    const mediumPassword3: string = '1234567!@'
    expect(service.checkPassword(mediumPassword1)).toBe(PasswordStrengthEnum.MEDIUM);
    expect(service.checkPassword(mediumPassword2)).toBe(PasswordStrengthEnum.MEDIUM);
    expect(service.checkPassword(mediumPassword3)).toBe(PasswordStrengthEnum.MEDIUM);
  });

  it('should test strong password', () => {
    const strongPassword: string = '$!p_4.55w_0rd';
    expect(service.checkPassword(strongPassword)).toBe(PasswordStrengthEnum.STRONG);
  });

  it('should assert that password is empty', () => {
    const emptyString: string = '';
    expect(service.checkPassword(emptyString)).toBe(PasswordStrengthEnum.EMPTY);
  });
});
