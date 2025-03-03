import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartoggleComponent } from './sidebartoggle.component';

describe('SidebartoggleComponent', () => {
  let component: SidebartoggleComponent;
  let fixture: ComponentFixture<SidebartoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebartoggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
