import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { EmbaucheComponent } from './components/embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DefaultImagePipe,
    ItemComponent,
    ListComponent,
    CvComponent,
    DetailComponent,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
