import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslDashboardComponent } from './ssl-dashboard.component';

describe('SslDashboardComponent', () => {
  let component: SslDashboardComponent;
  let fixture: ComponentFixture<SslDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SslDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SslDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
