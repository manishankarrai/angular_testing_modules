import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglaHeaderComponent } from './singla-header.component';

describe('SinglaHeaderComponent', () => {
  let component: SinglaHeaderComponent;
  let fixture: ComponentFixture<SinglaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglaHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
