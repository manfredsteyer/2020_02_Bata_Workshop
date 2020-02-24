import { async, TestBed } from '@angular/core/testing';
import { CheckinFeatureCheckinModule } from './checkin-feature-checkin.module';

describe('CheckinFeatureCheckinModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckinFeatureCheckinModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckinFeatureCheckinModule).toBeDefined();
  });
});
