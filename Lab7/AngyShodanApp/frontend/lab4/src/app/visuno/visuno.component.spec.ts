import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisunoComponent } from './visuno.component';

describe('VisunoComponent', () => {
  let component: VisunoComponent;
  let fixture: ComponentFixture<VisunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
