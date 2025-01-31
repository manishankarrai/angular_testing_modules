import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistneruserComponent } from './hostlistneruser.component';

describe('HostlistneruserComponent', () => {
  let component: HostlistneruserComponent;
  let fixture: ComponentFixture<HostlistneruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostlistneruserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostlistneruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
