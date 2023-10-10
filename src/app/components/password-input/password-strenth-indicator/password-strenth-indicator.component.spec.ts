import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrenthIndicatorComponent } from './password-strenth-indicator.component';

describe('PasswordStrenthIndicatorComponent', () => {
  let component: PasswordStrenthIndicatorComponent;
  let fixture: ComponentFixture<PasswordStrenthIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordStrenthIndicatorComponent]
    });
    fixture = TestBed.createComponent(PasswordStrenthIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
