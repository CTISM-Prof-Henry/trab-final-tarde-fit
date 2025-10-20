# :material-play-circle: Executando o Projeto

Um guia para configurar e iniciar o ambiente de desenvolvimento local
---

!!! warning
    **Antes** de prosseguir, certifique-se de que a maquina esteja configurado com a versão do Node.js(v22.19.0), **recomendado** seguir a documentação presente em [[🚀 Configuração de Ambiente com mise]](1helpMise.md).

## 1. :material-package: Instalação das Dependências

Acesse a pasta raiz do projeto `web-fit` e execute o comando:

```Bash
npm install
```
Este comando irá ler o arquivo package.json e instalará todas as dependências necessárias do projeto 

## 2. :material-rocket: Executando a aplicação

```Bash
npm run start
```

!!!note
    O processo de compilação pode levar alguns segundos. O terminal avisará quando a aplicação estiver pronta e rodando.

Após a compilação ser finalizada com sucesso, a aplicação esterá disponivel em: `http://localhost:4200/`
