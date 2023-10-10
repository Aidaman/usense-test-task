import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardLinkComponent} from './card-link.component';
import {ActivatedRoute, RouterModule} from "@angular/router";

class MockActivatedRoute {
}

describe('CardLinkComponent', () => {
  let component: CardLinkComponent;
  let fixture: ComponentFixture<CardLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLinkComponent],
      imports: [RouterModule],
      providers: [
        {provide: ActivatedRoute, useClass: MockActivatedRoute}
      ]
    });
    fixture = TestBed.createComponent(CardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
