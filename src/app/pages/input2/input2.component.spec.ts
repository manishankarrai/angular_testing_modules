import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input2Component } from './input2.component';

describe('Input2Component', () => {
  let component: Input2Component;
  let fixture: ComponentFixture<Input2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Input2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
