import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string

  constructor() { console.log(this.frases)}

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event):void
  {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

}
