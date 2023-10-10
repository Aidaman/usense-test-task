import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageNotFoundComponent} from './page-not-found.component';
import {CardTitleComponent} from "../../shared/components/card-title/card-title.component";
import {CardContentComponent} from "../../shared/components/card-content/card-content.component";
import {CardLinkComponent} from "../../shared/components/card-link/card-link.component";
import {CardComponent} from "../../shared/components/card/card.component";
import {ActivatedRoute, RouterModule} from "@angular/router";

class MockActivatedRoute {
}

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent, CardComponent, CardTitleComponent, CardContentComponent, CardLinkComponent],
      imports: [RouterModule],
      providers: [
        {provide: ActivatedRoute, useClass: MockActivatedRoute}
      ]
    });
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
