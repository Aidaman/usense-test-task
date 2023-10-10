import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordStrengthComponent} from './password-strength.component';
import {CardComponent} from "../../shared/components/card/card.component";
import {CardTitleComponent} from "../../shared/components/card-title/card-title.component";
import {CardContentComponent} from "../../shared/components/card-content/card-content.component";
import {PasswordInputComponent} from "../../components/password-input/password-input.component";
import {
  PasswordStrenthIndicatorComponent
} from "../../components/password-input/password-strenth-indicator/password-strenth-indicator.component";
import {PasswordCheckerPipe} from "../../components/password-input/password-checker-pipe/password-checker.pipe";

describe('PasswordStrenghComponent', () => {
  let component: PasswordStrengthComponent;
  let fixture: ComponentFixture<PasswordStrengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordStrengthComponent, CardComponent, CardTitleComponent, CardContentComponent, PasswordInputComponent, PasswordStrenthIndicatorComponent, PasswordCheckerPipe],
    });
    fixture = TestBed.createComponent(PasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create page', () => {
    expect(component).toBeTruthy();
  });
});
