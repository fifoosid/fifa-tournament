import { Component, OnInit } from '@angular/core';

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Title.js";
import { TournamentService } from '../services/tournament.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private tournamentStarted: boolean = false;

  constructor(private tournamentService: TournamentService, private router: Router) { }

  ngOnInit() {
    this.tournamentService.getTournamentStarted()
      .subscribe((response: any) => {
        this.tournamentStarted = response.data.started;
      });
  }

  startTournament() {
    this.tournamentService.setTournamentStarted(true)
      .subscribe((response: any) => {
        this.tournamentStarted = response.data.started;
      });
  }

  redirectToStanding() {
    if (this.tournamentStarted) {
      return;
    }

    this.router.navigate(["/table"]);
  }

}
