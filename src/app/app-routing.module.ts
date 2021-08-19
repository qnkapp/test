import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempleProjetComponent } from './exemple-projet/exemple-projet.component';
import { FormationComponent } from './formation/formation.component';
import { SessionFormationComponent } from './session-formation/session-formation.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {component: UsersListComponent, path: 'user-list'},
  {component: FormationComponent, path: 'formation'},
  {component: SessionFormationComponent, path: 'session-formation'},
  {component: ExempleProjetComponent, path: 'exemple-projet'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
