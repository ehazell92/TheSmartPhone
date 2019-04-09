import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneIconsComponent } from './phone-icons.component';

describe('PhoneIconsComponent', () => {
  let component: PhoneIconsComponent;
  let fixture: ComponentFixture<PhoneIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
