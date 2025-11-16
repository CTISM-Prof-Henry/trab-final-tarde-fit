import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [FormsModule, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {

  public formData: {
    peso: number | null,
    altura: number | null,
    idade: number | null,
    sexo: string,
    nivelAtividade: string,
  } = {
    peso: null,
    altura: null,
    idade: null,
    sexo: '',
    nivelAtividade: ''
  };

  public resultados: {
    agua: number,
    tmb: number,
    get: number,
    deficit: number,
    metaCalorias: number
  } = {
    agua: 0,
    tmb: 0,
    get: 0,
    deficit: 500,
    metaCalorias: 0
  };

  public calculado = false;

  constructor() { }
  public calcular(): void {
    if (!this.formData.peso || !this.formData.altura || !this.formData.idade || !this.formData.sexo || !this.formData.nivelAtividade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    this.resultados.agua = (this.formData.peso * 35) / 1000;

    let tmb = 0;
    if (this.formData.sexo === 'masculino') {
      tmb = (10 * this.formData.peso) + (6.25 * this.formData.altura) - (5 * this.formData.idade) + 5;
    } else {
      tmb = (10 * this.formData.peso) + (6.25 * this.formData.altura) - (5 * this.formData.idade) - 161;
    }
    this.resultados.tmb = tmb;
    this.resultados.get = tmb * (+this.formData.nivelAtividade);
    this.resultados.metaCalorias = this.resultados.get - this.resultados.deficit;
    this.calculado = true;
  }
}
