import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloComponent } from './estilo.component';

describe('EstiloComponent', () => {
  let component: EstiloComponent;
  let fixture: ComponentFixture<EstiloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstiloComponent]
    });
    fixture = TestBed.createComponent(EstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
