import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatustableComponent } from './statustable.component';

describe('StatustableComponent', () => {
  let component: StatustableComponent;
  let fixture: ComponentFixture<StatustableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatustableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
