import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
