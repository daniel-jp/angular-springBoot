import { TestBed } from '@angular/core/testing';

import { AngspringResolver } from './angspring.resolver';

describe('AngspringResolver', () => {
  let resolver: AngspringResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AngspringResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
