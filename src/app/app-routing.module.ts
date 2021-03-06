import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,data:{animation:'isLeft'}
  },
  {
    path: 'done',
    redirectTo: '/done',
    pathMatch:'full'
  },
  {
    path: 'courses-details/:id',
    component: CourseDetailsComponent
    ,data:{animation:'isRight'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
