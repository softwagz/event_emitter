import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Daniela';
  listado_de_preguntas = [
    "Cual es tu nombre",
    "Cual es tu edad"
  ]

  recibirPregunta(pregunta: any) {
    this.listado_de_preguntas.push(pregunta);
  }
}
