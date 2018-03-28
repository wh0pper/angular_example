import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonService } from './person.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PersonService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
