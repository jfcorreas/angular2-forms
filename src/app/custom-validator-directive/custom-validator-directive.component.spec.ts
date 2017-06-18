import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorDirectiveComponent } from './custom-validator-directive.component';

describe('CustomValidatorDirectiveComponent', () => {
  let component: CustomValidatorDirectiveComponent;
  let fixture: ComponentFixture<CustomValidatorDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidatorDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidatorDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
