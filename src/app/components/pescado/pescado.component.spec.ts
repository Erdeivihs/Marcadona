import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescadoComponent } from './pescado.component';

describe('PescadoComponent', () => {
  let component: PescadoComponent;
  let fixture: ComponentFixture<PescadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PescadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PescadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
