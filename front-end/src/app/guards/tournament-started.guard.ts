import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from '../services/tournament.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentStartedGuard implements CanActivate {
  constructor(private tournamentService: TournamentService) {}

  canActivate(): any {
    // return this.tournamentService.getTournamentStarted()
    //   .subscribe((response: any) => {
    //     return response.data.started;
    //   })

    return true;
  }
  
}
