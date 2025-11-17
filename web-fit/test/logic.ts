// Importa a classe de lógica pura e a interface
// (Atenção ao caminho do ficheiro, ajuste se o seu for diferente)
import { CalculadoraFit, FormData } from '../src/app/services/calculadora';

QUnit.module('FitnessCalculator Logic', hooks => {

    let calculator: CalculadoraFit;

    hooks.beforeEach(() => {
        calculator = new CalculadoraFit();
    });

    // Teste 1 > Calculo para sexo masculino
    QUnit.test('Deve calcular corretamente para sexo masculino (deficit padrão)', assert => {
        const formData: FormData = {
            peso: 80,
            altura: 180,
            idade: 30,
            sexo: 'masculino',
            nivelAtividade: '1.55'
        };

        const resultados = calculator.calcular(formData); 

        assert.ok(Math.abs(resultados.tmb - 1780) < 0.01, 'TMB (Masculino) deve ser 1780');
        assert.ok(Math.abs(resultados.agua - 2.8) < 0.01, 'Água deve ser 2.8 L');
        assert.ok(Math.abs(resultados.get - 2759) < 0.01, 'GET deve ser 2759');
        assert.ok(Math.abs(resultados.metaCalorias - 2259) < 0.01, 'Meta de Calorias deve ser 2259');
        assert.strictEqual(resultados.deficit, 500, 'Deficit deve ser o padrão 500');
    });

    // Teste 1 > Calculo para sexo feminino
    QUnit.test('Deve calcular corretamente para sexo feminino (deficit padrão)', assert => {
        const formData: FormData = {
            peso: 60,
            altura: 165,
            idade: 25,
            sexo: 'feminino',
            nivelAtividade: '1.375'
        };

        const resultados = calculator.calcular(formData);

        assert.ok(Math.abs(resultados.tmb - 1345.25) < 0.01, 'TMB (Feminino) deve ser 1345.25');
        assert.ok(Math.abs(resultados.agua - 2.1) < 0.01, 'Água deve ser 2.1 L');
        assert.ok(Math.abs(resultados.get - 1849.71875) < 0.01, 'GET deve ser ~1849.72');
        assert.ok(Math.abs(resultados.metaCalorias - 1349.71875) < 0.01, 'Meta de Calorias deve ser ~1349.72');
    });

    // Teste 3 > Valida se campo é nulo
    QUnit.test('Deve LANÇAR ERRO se o peso for nulo', assert => {
        const formData: FormData = {
            peso: null,
            altura: 180,
            idade: 30,
            sexo: 'masculino',
            nivelAtividade: '1.55'
        };

        assert.throws(
            () => { calculator.calcular(formData); },
            new Error("Por favor, preencha todos os campos."),
            'Deve lançar erro de campos faltando (peso nulo).'
        );
    });

    // Teste 4 > Validação (Campos Faltando - 'string' vazia)
    QUnit.test('Deve LANÇAR ERRO se o sexo não for selecionado', assert => {
        // 1. Prepara (Arrange)
        const formData: FormData = {
            peso: 80,
            altura: 180,
            idade: 30,
            sexo: '', // Sexo vazio
            nivelAtividade: '1.55'
        };

        assert.throws(
            () => { calculator.calcular(formData); },
            new Error("Por favor, preencha todos os campos."),
            'Deve lançar erro de campos faltando (sexo vazio).'
        );
    });

    // Teste 5 > Validação (Valores Inválidos - Zero)
    QUnit.test('Deve LANÇAR ERRO se o peso for zero', assert => {
        const formData: FormData = {
            peso: 0, //inválido
            altura: 180,
            idade: 30,
            sexo: 'masculino',
            nivelAtividade: '1.55'
        };

        assert.throws(
            () => { calculator.calcular(formData); },
            new Error("Peso, altura e idade devem ser valores positivos."),
            'Deve lançar erro de valor positivo (peso zero).'
        );
    });

    // Teste 6 > Validação (Valores Inválidos - Negativo)
    QUnit.test('Deve LANÇAR ERRO se a idade for negativa', assert => {
        const formData: FormData = {
            peso: 80,
            altura: 180,
            idade: -30, //inválido
            sexo: 'masculino',
            nivelAtividade: '1.55'
        };

        assert.throws(
            () => { calculator.calcular(formData); },
            new Error("Peso, altura e idade devem ser valores positivos."),
            'Deve lançar erro de valor positivo (idade negativa).'
        );
    });

    // Teste 7 > Funcionalidade (Deficit Customizado)
    QUnit.test('Deve calcular corretamente com um deficit customizado', assert => {
        const formData: FormData = {
            peso: 80,
            altura: 180,
            idade: 30,
            sexo: 'masculino',
            nivelAtividade: '1.55'
        };
        const deficitCustomizado = 1000; // Valor diferente do padrão 500
        const resultados = calculator.calcular(formData, deficitCustomizado);

        assert.strictEqual(resultados.deficit, deficitCustomizado, 'O deficit no resultado deve ser 1000');
        assert.ok(Math.abs(resultados.metaCalorias - 1759) < 0.01, 'Meta de Calorias deve ser 1759');
    });

});