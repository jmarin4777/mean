import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrairieComponent } from './prairie.component';

describe('PrairieComponent', () => {
  let component: PrairieComponent;
  let fixture: ComponentFixture<PrairieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrairieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
