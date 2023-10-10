import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordInputComponent} from './password-input.component';
import {PasswordStrenthIndicatorComponent} from "./password-strenth-indicator/password-strenth-indicator.component";
import {PasswordCheckerPipe} from "./password-checker-pipe/password-checker.pipe";

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordInputComponent, PasswordStrenthIndicatorComponent, PasswordCheckerPipe]
    });
    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
