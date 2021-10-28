import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() emitirData = new EventEmitter();

  pregunta: string = '';

  enviarPregunta() {
    this.emitirData.emit(this.pregunta)
    this.pregunta = '';
  }

}
