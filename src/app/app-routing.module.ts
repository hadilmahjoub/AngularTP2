import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { TodoComponent } from './components/todo/todo.component';
import { RainbowInputComponent } from './components/rainbow-input/rainbow-input.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { PereComponent } from './components/pere/pere.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { CvDetailComponent } from './components/cv-detail/cv-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { AuthComponent } from './components/auth/auth.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'cv/add',
    component: AddCvComponent,
  },
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
  {
    path: 'test-form',
    component: TestFormComponent,
  },
  {
    path: 'app-image-carousel',
    component: ImageCarouselComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
