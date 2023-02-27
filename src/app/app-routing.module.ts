import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreersComponent } from './carreers/carreers.component';
import { DirectoryComponent } from './directory/directory.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { StudentsdetailsComponent } from './studentsdetails/studentsdetails.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "carrers", component: CarreersComponent },
  { path: "directory", component: DirectoryComponent },
  { path: "events", component: EventsComponent },
  { path: "stories", component: StoriesComponent },
  { path: "students", component: StudentsdetailsComponent },
  { path: "studentsdetails/:studentsID", component: StudentsdetailsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
