import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarthasComponent } from './marthas.component';

describe('MarthasComponent', () => {
  let component: MarthasComponent;
  let fixture: ComponentFixture<MarthasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarthasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarthasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
