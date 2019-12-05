import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import "@ui5/webcomponents/dist/Panel.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "@ui5/webcomponents/dist/Label.js";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  
})
export class AddTeamComponent implements OnInit {
  private newTeamForm;
  constructor(private formBuilder: FormBuilder) {
    this.newTeamForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      player: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newTeamForm.value);
  }

}
