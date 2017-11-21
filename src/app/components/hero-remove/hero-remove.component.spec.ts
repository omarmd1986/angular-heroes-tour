import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRemoveComponent } from './hero-remove.component';

describe('HeroRemoveComponent', () => {
  let component: HeroRemoveComponent;
  let fixture: ComponentFixture<HeroRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
