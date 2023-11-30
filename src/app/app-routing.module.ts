import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { TodoComponent } from './components/todo/todo.component';
import { RainbowInputComponent } from './components/rainbow-input/rainbow-input.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { PereComponent } from './components/pere/pere.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { CvDetailComponent } from './components/cv-detail/cv-detail.component';

const routes: Routes = [
  {
    path: 'cv/:id',
    component: CvDetailComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'rainbow',
    component: RainbowInputComponent,
  },
  {
    path: 'word',
    component: MiniWordComponent,
  },
  {
    path: 'carte-visite',
    component: CarteVisiteComponent,
  },
  {
    path: 'pere',
    component: PereComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
