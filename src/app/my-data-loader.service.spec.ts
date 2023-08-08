import { TestBed } from '@angular/core/testing';

import { MyDataLoaderService } from './my-data-loader.service';

describe('MyDataLoaderService', () => {
  let service: MyDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
