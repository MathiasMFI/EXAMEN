import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEspaciosComponent } from './new-espacios.component';

describe('AddEmployeeComponent', () => {
  let component: NewEspaciosComponent;
  let fixture: ComponentFixture<NewEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEspaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
