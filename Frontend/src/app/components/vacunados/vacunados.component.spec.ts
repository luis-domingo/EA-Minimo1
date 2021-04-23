import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunadosComponent } from './vacunados.component';

describe('VacunadosComponent', () => {
  let component: VacunadosComponent;
  let fixture: ComponentFixture<VacunadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
