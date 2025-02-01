import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtypeComponent } from './inputtype.component';

describe('InputtypeComponent', () => {
  let component: InputtypeComponent;
  let fixture: ComponentFixture<InputtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputtypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
