import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompthreeComponent } from './compthree.component';

describe('CompthreeComponent', () => {
  let component: CompthreeComponent;
  let fixture: ComponentFixture<CompthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
