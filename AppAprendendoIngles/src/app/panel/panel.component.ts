import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta: string = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.AtualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy()
  {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
    // console.log(this.resposta)
  }

  public verificarResposta(): void 
  {
    if (this.rodadaFrase.frasePtBr === this.resposta) 
    {
      // Trocar pergunta da rodada
      this.rodada++;

      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      this.rodadaFrase = this.frases[this.rodada]

      if(this.rodada === 4)
      {
        this.encerrarJogo.emit('vitoria')
      }

      this.AtualizaRodada()
    } 
    else 
    {
      //alert('A tradução está errada.');
      //Diminuir a variavel tentativas
      this.tentativas--
      if(this.tentativas === -1)
      {
        this.encerrarJogo.emit('derrota')
      }
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
