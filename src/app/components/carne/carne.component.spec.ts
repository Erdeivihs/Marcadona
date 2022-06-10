import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarneComponent } from './carne.component';

describe('CarneComponent', () => {
  let component: CarneComponent;
  let fixture: ComponentFixture<CarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
