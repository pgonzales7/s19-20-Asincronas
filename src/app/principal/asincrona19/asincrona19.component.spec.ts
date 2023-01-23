import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asincrona19Component } from './asincrona19.component';

describe('Asincrona19Component', () => {
  let component: Asincrona19Component;
  let fixture: ComponentFixture<Asincrona19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asincrona19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asincrona19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
