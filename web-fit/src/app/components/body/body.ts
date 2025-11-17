import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CalculadoraFit, FormData, Resultados } from '../../services/calculadora';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {

  private calculadora = new CalculadoraFit();

  public formData: FormData = {
    peso: null,
    altura: null,
    idade: null,
    sexo: '',
    nivelAtividade: ''
  };

  public resultados: Resultados = {
    agua: 0,
    tmb: 0,
    get: 0,
    deficit: 500,
    metaCalorias: 0
  };

  public calculado = false;
  public errorMessage: string | null = null;

  constructor() { }

  public calcular(): void {
    try {
      const novosResultados = this.calculadora.calcular(this.formData);

      this.resultados = novosResultados;
      this.calculado = true;
      this.errorMessage = null;

    } catch (error) {
      this.calculado = false;
      this.errorMessage = (error as Error).message; // Exibe o erro
    }
  }
}