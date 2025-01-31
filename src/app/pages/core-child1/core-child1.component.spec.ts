import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreChild1Component } from './core-child1.component';

describe('CoreChild1Component', () => {
  let component: CoreChild1Component;
  let fixture: ComponentFixture<CoreChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
