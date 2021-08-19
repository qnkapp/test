import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { FormationComponent } from './formation/formation.component';
import { SessionFormationComponent } from './session-formation/session-formation.component';
import { ExempleProjetComponent } from './exemple-projet/exemple-projet.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    FormationComponent,
    SessionFormationComponent,
    ExempleProjetComponent,
    DetailFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
