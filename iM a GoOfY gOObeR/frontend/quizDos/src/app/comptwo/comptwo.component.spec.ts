import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptwoComponent } from './comptwo.component';

describe('ComptwoComponent', () => {
  let component: ComptwoComponent;
  let fixture: ComponentFixture<ComptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
