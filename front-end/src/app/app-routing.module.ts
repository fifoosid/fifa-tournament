import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddResultComponent } from './add-result/add-result.component';
import { TournamentStartedGuard } from './guards/tournament-started.guard';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'add-team', component: AddTeamComponent, canActivate: [TournamentStartedGuard] },
  { path: 'add-result', component: AddResultComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
