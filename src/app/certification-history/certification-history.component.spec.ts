import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationHistoryComponent } from './certification-history.component';

describe('CertificationHistoryComponent', () => {
  let component: CertificationHistoryComponent;
  let fixture: ComponentFixture<CertificationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
