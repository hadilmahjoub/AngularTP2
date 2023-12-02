import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { EmbaucheComponent } from './components/embauche/embauche.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowInputComponent } from './components/rainbow-input/rainbow-input.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { HeaderComponent } from './components/header/header.component';
import { CvDetailComponent } from './components/cv-detail/cv-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DefaultImagePipe,
    ItemComponent,
    ListComponent,
    CvComponent,
    DetailComponent,
    EmbaucheComponent,
    CarteVisiteComponent,
    FilsComponent,
    PereComponent,
    MiniWordComponent,
    RainbowInputComponent,
    RainbowDirective,
    HeaderComponent,
    CvDetailComponent,
    NotFoundComponent,
    TestFormComponent,
    AddCvComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      // timeOut: 3000,
      preventDuplicates: true,
      // progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
