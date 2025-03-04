import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonStateComponent } from './person-state.component';

describe('PersonStateComponent', () => {
  let component: PersonStateComponent;
  let fixture: ComponentFixture<PersonStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
