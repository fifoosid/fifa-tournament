import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../services/team.service';

import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputSuggestions.js"
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/MessageStrip.js";
import "@ui5/webcomponents/dist/StandardListItem.js";
import { MatchService } from '../services/match.service';
import { NotificationsService } from '../services/notification.service';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {
  private newResultAdded: boolean;
  private newResultForm;
  private teams: [] = [];
  @ViewChild("homeTeam") homeTeam: ElementRef;
  @ViewChild("awayTeam") awayTeam: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private matchService: MatchService,
    private notificationsService: NotificationsService) {
    this.newResultForm = this.formBuilder.group({
      homeTeam:[''],
      awayTeam: [''],
      homeTeamScore: ['', [Validators.required]],
      awayTeamScore: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.teamService.getAllTeams()
      .subscribe((teams: any) => {
        this.teams = teams.data;
      })
  }

  addNewResult() {
    const teams = this.homeTeam.nativeElement.querySelectorAll("ui5-li");
    let homeTeam, awayTeam;

    teams.forEach(element => {
      if (element.textContent === this.homeTeam.nativeElement.value){
        homeTeam = element.id
      }
    });
    
    teams.forEach(element => {
      if (element.textContent === this.awayTeam.nativeElement.value) {
        awayTeam = element.id
      }
    });

    this.matchService.addNewMatch({
      homeTeam,
      awayTeam,
      homeTeamScore: this.newResultForm.value.homeTeamScore,
      awayTeamScore: this.newResultForm.value.awayTeamScore,
    })
      .subscribe(response => {
        this.newResultAdded = true;

        setTimeout(() => {
          this.newResultAdded = false;
        }, 3000);
      });

      this.notificationsService.emitGame({
        homeTeam,
        awayTeam,
        homeTeamScore: this.newResultForm.value.homeTeamScore,
        awayTeamScore: this.newResultForm.value.awayTeamScore,
      });
  }

}
