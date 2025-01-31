import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodcardComponent } from './goodcard.component';

describe('GoodcardComponent', () => {
  let component: GoodcardComponent;
  let fixture: ComponentFixture<GoodcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoodcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
