import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css']
})
export class ListaPreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() preguntas: any;
}
