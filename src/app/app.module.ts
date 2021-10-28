import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ListaPreguntasComponent } from './lista-preguntas/lista-preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    ListaPreguntasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
