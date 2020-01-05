import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from './services/notification.service';

import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";
import "@ui5/webcomponents-icons/dist/icons/add-employee.js";
import "@ui5/webcomponents-icons/dist/icons/add.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  constructor(private router: Router, private notificationsService: NotificationsService) {
    setTimeout(() => {
      notificationsService.emitGame({
        homeTeam: "1",
        awayTeam: "2",
        homeTeamScore: "2",
        awayTeamScore: "3",
      });
    }, 1000);
  }

  ngOnInit() {
    this.notificationsService.getNewGame()
      .subscribe((newGameDetails: String) => {
        console.log(newGameDetails);
      })
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