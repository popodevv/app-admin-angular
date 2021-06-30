import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistriComponent } from './add-distri.component';

describe('AddDistriComponent', () => {
  let component: AddDistriComponent;
  let fixture: ComponentFixture<AddDistriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
