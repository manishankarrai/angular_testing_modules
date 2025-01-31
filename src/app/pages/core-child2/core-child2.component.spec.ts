import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreChild2Component } from './core-child2.component';

describe('CoreChild2Component', () => {
  let component: CoreChild2Component;
  let fixture: ComponentFixture<CoreChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
