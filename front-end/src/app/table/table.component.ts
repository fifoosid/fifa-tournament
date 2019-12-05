import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/Label.js";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  teams: Array<any> =  [
    {
      name: "Man Utd",
      player: "Ivan",
      played_games: 8,
      won_games: 6,
      draw_games: 1,
      lost_games: 1,
      scored_goals: 24,
      received_goals: 8,
      goal_difference: 16,
      points: 19
    },
    {
      name: "Man Utd",
      player: "Ivan",
      played_games: 8,
      won_games: 6,
      draw_games: 1,
      lost_games: 1,
      scored_goals: 24,
      received_goals: 8,
      goal_difference: 16,
      points: 19
    },
    {
      name: "Man Utd",
      player: "Ivan",
      played_games: 8,
      won_games: 6,
      draw_games: 1,
      lost_games: 1,
      scored_goals: 24,
      received_goals: 8,
      goal_difference: 16,
      points: 19
    },
    {
      name: "Man Utd",
      player: "Ivan",
      played_games: 8,
      won_games: 6,
      draw_games: 1,
      lost_games: 1,
      scored_goals: 24,
      received_goals: 8,
      goal_difference: 16,
      points: 19
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
