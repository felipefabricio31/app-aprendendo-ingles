import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta: string = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  constructor() {
    this.AtualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
    // console.log(this.resposta)
  }

  public verificarResposta(): void 
  {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert('A tradução está correta');
      // Trocar pergunta da rodada
      this.rodada++;

      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      this.rodadaFrase = this.frases[this.rodada]

      this.AtualizaRodada()
    } 
    else 
    {
      alert('A tradução está errada.');
    }

  }

  public AtualizaRodada(): void
  {
    //Defini a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];
    
    //limpa a resposta
    this.resposta = ''
  }

}
