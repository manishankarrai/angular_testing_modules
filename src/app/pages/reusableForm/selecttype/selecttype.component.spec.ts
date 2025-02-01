import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttypeComponent } from './selecttype.component';

describe('SelecttypeComponent', () => {
  let component: SelecttypeComponent;
  let fixture: ComponentFixture<SelecttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelecttypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
