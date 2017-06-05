import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedModelDrivenFormComponent } from './nested-model-driven-form.component';

describe('NestedModelDrivenFormComponent', () => {
  let component: NestedModelDrivenFormComponent;
  let fixture: ComponentFixture<NestedModelDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedModelDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
