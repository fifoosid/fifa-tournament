import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import "@ui5/webcomponents/dist/Panel.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/MessageStrip.js";
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  
})
export class AddTeamComponent implements OnInit {
  private newTeamForm;
  private newTeammAdded: boolean = false;

  constructor(private formBuilder: FormBuilder, private teamService: TeamService) {
    this.newTeamForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      player: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newTeamForm.value); 
    this.teamService.addTeam(this.newTeamForm.value.name, this.newTeamForm.value.player)
      .subscribe(team => {
        this.newTeammAdded = true;

        setTimeout(() => {
          this.newTeammAdded = false;
        }, 3000);
      })
  }

}
