import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private ENDPOINT: string = "http://localhost:8080/api/tournament-started";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  constructor(private http: HttpClient) { }

  getTournamentStarted() {
    return this.http.get(this.ENDPOINT, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  setTournamentStarted(tournamentStarted: boolean) {
    return this.http.post(this.ENDPOINT, {
      started: tournamentStarted,
    }, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
