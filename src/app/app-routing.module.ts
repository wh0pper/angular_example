import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PersonDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
