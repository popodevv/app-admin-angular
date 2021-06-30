import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistriComponent } from './list-distri.component';

describe('ListDistriComponent', () => {
  let component: ListDistriComponent;
  let fixture: ComponentFixture<ListDistriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDistriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDistriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
