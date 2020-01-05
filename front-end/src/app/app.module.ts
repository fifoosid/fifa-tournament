import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OrigamiFormsModule } from '@codebakery/origami/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { HomeComponent } from './home/home.component';
import { AddResultComponent } from './add-result/add-result.component';
import { NotificationsService } from './services/notification.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddTeamComponent,
    HomeComponent,
    AddResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OrigamiFormsModule,
    HttpClientModule,
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
