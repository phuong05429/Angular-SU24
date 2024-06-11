import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab02Component } from './lab02.component';

describe('Lab02Component', () => {
  let component: Lab02Component;
  let fixture: ComponentFixture<Lab02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
