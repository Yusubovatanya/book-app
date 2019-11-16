import { TestBed } from '@angular/core/testing';

import { BookCoreService } from './book-core.service';

describe('BookCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookCoreService = TestBed.get(BookCoreService);
    expect(service).toBeTruthy();
  });
});
