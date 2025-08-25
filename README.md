# 🥗 Simulador de Dieta e Calorias

**Simulador de Dieta e Calorias** é um software desenvolvido seguindo o **Modelo Incremental** de Engenharia de Software.  
O objetivo é permitir que usuários planejem suas dietas, calculem calorias diárias e acompanhem o histórico de consumo alimentar, com uma **interface intuitiva** e armazenamento de dados em **JSON**.

---

## 📌 1. Visão Geral

O sistema possibilita:
- Cadastro de alimentos e refeições.
- Cálculo automático de calorias, macronutrientes e micronutrientes.
- Definição de metas diárias.
- Histórico de consumo e progresso.
- Salvamento e carregamento de dados em **JSON** para fácil portabilidade.

---

## ⚙️ 2. Modelo de Desenvolvimento: Incremental

O projeto será construído **em ciclos incrementais**, permitindo entregas parciais e funcionais em cada fase.

| Incremento | Funcionalidades | Objetivo |
|------------|-----------------|----------|
| **1** | Estrutura base, cadastro simples de alimentos, cálculo de calorias. | Disponibilizar núcleo funcional. |
| **2** | Inclusão de refeições, metas diárias e interface aprimorada. | Melhorar experiência do usuário. |
| **3** | Histórico de consumo e gráficos de progresso. | Adicionar acompanhamento visual. |
| **4** | Exportação/importação de dados em JSON. | Garantir persistência e portabilidade. |
| **5** | Ajustes finais, responsividade e testes. | Preparar para deploy e uso real. |

---

## 🛠️ 3. Tecnologias Utilizadas
- **Protótipo:** Aplicativo Figma
- **Frontend:** HTML5, CSS3, Bootstrap JavaScript (Vanilla ou Framework como React).
- **Persistência:** JSON (armazenado localmente ou via API).
- **Controle de Versão:** Git + GitHub.
- **Design:** Interface intuitiva com foco em usabilidade.
- **Gráficos:** Biblioteca como Chart.js (opcional).
- **Cores**:
  - Laranja (#FF7043) – energia, metabolismo, movimento.
  - Verde Limão (#9CCC65) – vitalidade, frescor.
  - Turquesa (#4DD0E1) – inovação, leveza.
  - Branco (#FAFAFA) – clareza.
  - Cinza Médio (#2D2D2D) – contraste elegante. 

---

## 🗂️ 4. Estrutura de Dados (JSON)

Exemplo de como os dados serão salvos:

```json
{
    "usuario": {
      "nome": "João Silva",
      "Peso":null,
      "altura": null,
      "meta_calorias": 2000,
      "macro_nutientes" : null,
      "micro_nutrientes": null,
      "idade":  null
    }
    
  }
