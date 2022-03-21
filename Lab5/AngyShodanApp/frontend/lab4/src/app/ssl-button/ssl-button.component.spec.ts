import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslButtonComponent } from './ssl-button.component';

describe('SslButtonComponent', () => {
  let component: SslButtonComponent;
  let fixture: ComponentFixture<SslButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SslButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
