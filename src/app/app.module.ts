import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
