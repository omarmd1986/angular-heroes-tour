import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputComponent } from './forms-input.component';

describe('FormsInputComponent', () => {
  let component: FormsInputComponent;
  let fixture: ComponentFixture<FormsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
