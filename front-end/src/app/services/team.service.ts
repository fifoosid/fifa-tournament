import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private ENDPOINT: string = "http://localhost:8080/api/team";
  private TEAM_NAME_ENDPOINT = "http://localhost:8080/api/team-name";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  addTeam(teamName, playerName) {
    return this.http.post(this.ENDPOINT, {
      teamName,
      playerName,
    }, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllTeams() {
    return this.http.get(this.ENDPOINT, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getTeamName(id) {
    return this.http.post(this.TEAM_NAME_ENDPOINT,{
      id,
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
