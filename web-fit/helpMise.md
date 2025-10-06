# 🚀Configuração de Ambiente com mise
Este guia rápido mostra como instalar o mise e configurar o ambiente de desenvolvimento.

## 🤔 O que é o mise?
Mise é um gerenciador de ambientes de desenvolvimento que permite definir as versões das ferramentas diretamente no projeto. Isso garante que toda a equipe use exatamente as mesmas versões, evitando problemas de compatibilidade.

## 1. 📦 Instalação do mise
Primeiro, você precisa ter o mise instalado na sua máquina. Se você já o tem, pode pular para o próximo passo.

<details>
<summary><strong>Clique aqui para ver as instruções de instalação</strong></summary>

Para macOS ou Linux (usando Homebrew)
```Bash
brew install mise
```
Para macOS ou Linux (usando o instalador oficial)
```Bash
curl https://mise.run | sh
```
Para Windows (usando winget)
```Bash
winget install mise.rtx
```

💡 Importante: Após a instalação, siga as instruções no terminal para adicionar o mise ao seu shell (ex: echo 'eval "$(mise activate bash)"' >> ~/.bashrc). Isso garante que ele funcione automaticamente. Para mais detalhes, consulte a [documentação oficial do mise](https://mise.jdx.dev/getting-started.html)

</details>

## 2. ⚙️ Instalando as Ferramentas do Projeto
Com o mise instalado, o resto é muito fácil. Nosso projeto já contém um arquivo .mise.toml que especifica as ferramentas necessárias.

Basta entrar na pasta do projeto e executar o comando:

```Bash
mise install
```
Este comando irá ler o arquivo .mise.toml, baixar e instalar as versões corretas das ferramentas (como a versão 22.19.0 do Node.js).

## 3. ✅ Verificando a Instalação
Para confirmar que tudo está funcionando, execute os comandos das ferramentas definidas no projeto. Por exemplo, para verificar a versão do Node.js:

```Bash
node -v
A saída deve ser a versão especificada no arquivo .mise.toml:
```
```Bash
v22.19.0
Pronto! 🎉 Seu ambiente de desenvolvimento está configurado e pronto para uso.
```