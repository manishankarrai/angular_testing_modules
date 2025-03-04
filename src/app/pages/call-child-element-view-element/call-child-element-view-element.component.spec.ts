import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallChildElementViewElementComponent } from './call-child-element-view-element.component';

describe('CallChildElementViewElementComponent', () => {
  let component: CallChildElementViewElementComponent;
  let fixture: ComponentFixture<CallChildElementViewElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallChildElementViewElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallChildElementViewElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
