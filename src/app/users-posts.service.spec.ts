import { TestBed } from '@angular/core/testing';

import { UserPostService } from './users-posts.service';

describe('UserPostService', () => {
  let service: UserPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
