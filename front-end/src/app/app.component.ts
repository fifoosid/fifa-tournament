import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from './services/notification.service';

import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";
import "@ui5/webcomponents-icons/dist/icons/add-employee.js";
import "@ui5/webcomponents-icons/dist/icons/add.js";
import { TeamService } from './services/team.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  private newGameDetails;

  constructor(
    private router: Router,
    private notificationsService: NotificationsService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.notificationsService.getNewGame()
      .subscribe((newGameDetails: any) => {

        combineLatest(
          this.teamService.getTeamName(newGameDetails.homeTeam),
          this.teamService.getTeamName(newGameDetails.awayTeam)).subscribe(([homeTeam, awayTeam]: any) => {
            debugger;
            this.newGameDetails = {
              homeTeam: homeTeam.data,
              awayTeam: awayTeam.data,
              homeTeamScore: newGameDetails.homeTeamScore,
              awayTeamScore: newGameDetails.awayTeamScore,
            }
          })

        setTimeout(() => {
          this.newGameDetails = undefined;
        }, 3000);
      });
  }

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  navigatToTable() {
    this.router.navigate(["/table"]);
  }

  navigatToAddTeam() {
    this.router.navigate(["/add-team"]);
  }

  navigatToAddResult() {
    this.router.navigate(["add-result"]);
  }
}