import { TestBed, async, inject } from '@angular/core/testing';

import { TournamentStartedGuard } from './tournament-started.guard';

describe('TournamentStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentStartedGuard]
    });
  });

  it('should ...', inject([TournamentStartedGuard], (guard: TournamentStartedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
