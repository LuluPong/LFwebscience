import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisdosComponent } from './visdos.component';

describe('VisdosComponent', () => {
  let component: VisdosComponent;
  let fixture: ComponentFixture<VisdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisdosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
