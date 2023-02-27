import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreersComponent } from './carreers.component';

describe('CarreersComponent', () => {
  let component: CarreersComponent;
  let fixture: ComponentFixture<CarreersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
