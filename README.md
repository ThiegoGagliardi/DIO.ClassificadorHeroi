# Classificador de Heróis

Projeto desenvolvido para classificar heróis com base em seus nomes e na quantidade de experiência (XP). Utilizando HTML, CSS (Modules CSS) e JavaScript, criamos uma aplicação simples que classifica heróis em diferentes níveis de acordo com a experiência informada.

## Estrutura do Projeto

### Diretório Raiz:
- **`index.html`**: Arquivo principal que carrega a interface do projeto.
- **`README.md`**: Documentação do projeto.

### Diretório `src`:

#### Subdiretório `styles`:
- **`styles.css`**: Estilos do projeto utilizando Modules CSS.

#### Subdiretório `scripts`:
- **`classificadorHeroi.mjs`**: Lógica para definir o nível do herói com base na experiência informada.
- **`heroi.mjs`**: Módulo para gerenciar a criação de heróis.
- **`niveisXp.mjs`**: Definições das regras de classificação por XP.
- **`index.js`**: Arquivo Node.js para rodar a aplicação no servidor.

### Outros Arquivos:
- **`package.json`**: Configurações de dependências e scripts do projeto.
- **`package-lock.json`**: Controle das dependências instaladas.
- **`node_modules`**: Diretório com os módulos do Node.js.

## Classificação de Nível do Herói

Os níveis do herói são definidos de acordo com a seguinte tabela:

| Experiência (XP)          | Nível      |
|----------------------------|-------------|
| Menor do que 1.000         | Ferro       |
| Entre 1.001 e 2.000        | Bronze      |
| Entre 2.001 e 5.000        | Prata       |
| Entre 5.001 e 7.000        | Ouro        |
| Entre 7.001 e 8.000        | Platina     |
| Entre 8.001 e 9.000        | Ascendente  |
| Entre 9.001 e 10.000       | Imortal     |
| Maior ou igual a 10.001    | Radiante    |

## Tecnologias Utilizadas

- **HTML5**: Estrutura da interface.
- **CSS3 (Modules CSS)**: Estilização modularizada para isolação de estilos.
- **JavaScript (ES Modules)**: Divisão da lógica do projeto em módulos reutilizáveis.
- **Node.js**: Para rodar a aplicação no servidor e gerenciar dependências.

## Como Rodar o Projeto

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Clone o repositório ou copie os arquivos do projeto.
3. No diretório raiz, instale as dependências executando:
   ```bash
   npm install
   ```
4. Para rodar o projeto no Node.js, execute:
   ```bash
   node src/scripts/index.js
   ```
5. Abra o arquivo `index.html` em seu navegador para testar a interface.

## Funcionalidades

- Entrada de nome e XP do herói.
- Classificação dinâmica com base na XP fornecida.
- Interface responsiva e estilizada com Modules CSS.
