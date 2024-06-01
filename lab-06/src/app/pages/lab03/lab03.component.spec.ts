import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab03Component } from './lab03.component';

describe('Lab03Component', () => {
  let component: Lab03Component;
  let fixture: ComponentFixture<Lab03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
