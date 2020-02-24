import { async, TestBed } from '@angular/core/testing';
import { ValidationModule } from './validation.module';

describe('ValidationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ValidationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ValidationModule).toBeDefined();
  });
});
