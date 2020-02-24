import { async, TestBed } from '@angular/core/testing';
import { CheckinDomainModule } from './checkin-domain.module';

describe('CheckinDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckinDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckinDomainModule).toBeDefined();
  });
});
