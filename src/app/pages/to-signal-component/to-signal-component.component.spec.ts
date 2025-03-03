import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSignalComponentComponent } from './to-signal-component.component';

describe('ToSignalComponentComponent', () => {
  let component: ToSignalComponentComponent;
  let fixture: ComponentFixture<ToSignalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToSignalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToSignalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
