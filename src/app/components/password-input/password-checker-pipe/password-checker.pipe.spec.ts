import {PasswordCheckerPipe} from './password-checker.pipe';
import {TestBed} from "@angular/core/testing";

describe('PasswordCheckerPipe', () => {
  
  it('create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const pipe = new PasswordCheckerPipe();
      expect(pipe).toBeTruthy();
    })
  });
});
