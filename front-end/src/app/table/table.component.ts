import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/Label.js";
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  teams: Array<any> =  [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams()
      .subscribe((teams: any) => {
        this.teams = teams.data;
      });
  }

}
