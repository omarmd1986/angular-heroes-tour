import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidattionComponent } from './form-validattion.component';

describe('FormValidattionComponent', () => {
  let component: FormValidattionComponent;
  let fixture: ComponentFixture<FormValidattionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidattionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidattionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
