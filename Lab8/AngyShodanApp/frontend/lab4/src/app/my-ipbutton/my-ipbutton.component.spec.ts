import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIPbuttonComponent } from './my-ipbutton.component';

describe('MyIPbuttonComponent', () => {
  let component: MyIPbuttonComponent;
  let fixture: ComponentFixture<MyIPbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIPbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIPbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
