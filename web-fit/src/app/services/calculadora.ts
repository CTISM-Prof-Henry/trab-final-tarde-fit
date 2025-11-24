// Interface entradas
export interface FormData {
  nome: string;
  peso: number | null;
  altura: number | null;
  idade: number | null;
  sexo: string;
  nivelAtividade: string;
}

// Interface saidas
export interface Resultados {
  agua: number;
  tmb: number;
  get: number;
  deficit: number;
  metaCalorias: number;
}

export class CalculadoraFit {

  public calcular(data: FormData, deficit: number = 500): Resultados {

    this.validar(data);

    const agua = this.calcularAgua(data.peso!);
    const tmb = this.calcularTMB(data.peso!, data.altura!, data.idade!, data.sexo);
    const get = this.calcularGET(tmb, data.nivelAtividade);
    const metaCalorias = get - deficit;

    return {
      agua: agua,
      tmb: tmb,
      get: get,
      deficit: deficit,
      metaCalorias: metaCalorias
    };
  }

  private validar(data: FormData): void {
    const { peso, altura, idade, sexo, nivelAtividade } = data;

    if (peso === null || altura === null || idade === null || !sexo || !nivelAtividade) {
      throw new Error("Por favor, preencha todos os campos.");
    }

    if (peso <= 0 || altura <= 0 || idade <= 0) {
      throw new Error("Peso, altura e idade devem ser valores positivos.");
    }
  }

  private calcularAgua(peso: number): number {
    // Fórmula: 35ml * peso
    return (peso * 35) / 1000; // Litros
  }

  //Taxa metabolica basal
  private calcularTMB(peso: number, altura: number, idade: number, sexo: string): number {
    const basePeso = 10 * peso;
    const baseAltura = 6.25 * altura;
    const baseIdade = 5 * idade;

    if (sexo === 'masculino') {
      return basePeso + baseAltura - baseIdade + 5;
    } else {
      return basePeso + baseAltura - baseIdade - 161;
    }
  }

  // Gasto energético total
  private calcularGET(tmb: number, nivelAtividade: string): number {
    return tmb * (+nivelAtividade);
  }
}