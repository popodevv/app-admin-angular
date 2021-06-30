import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDistriComponent } from './edit-distri.component';

describe('EditDistriComponent', () => {
  let component: EditDistriComponent;
  let fixture: ComponentFixture<EditDistriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDistriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDistriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
