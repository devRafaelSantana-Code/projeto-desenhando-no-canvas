# 🎨 Lousa Digital Interativa — HTML5 Canvas API (JavaScript Vanilla)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Canvas_API-FF6F00?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Canvas API">
  <img src="https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JavaScript">
</p>

## 📌 Sobre o Projeto

A **Lousa Digital Interativa** é uma aplicação web de desenho livre desenvolvida com HTML5, CSS3 e JavaScript Vanilla, utilizando a **HTML5 Canvas API** para permitir a criação de traços diretamente na tela do navegador.

Desenvolvido a partir dos desafios práticos da plataforma **B7Web**, o projeto oferece uma interface de desenho com seleção dinâmica de cores, controle de traços e recurso de limpeza da área de trabalho.

O principal objetivo do desenvolvimento é consolidar conhecimentos em computação gráfica para aplicações web, manipulação de coordenadas cartesianas, eventos de interação e renderização gráfica bidimensional.

## 🛠️ Tecnologias Utilizadas

| Tecnologia             | Aplicação no Projeto                                                             |
| ---------------------- | -------------------------------------------------------------------------------- |
| **HTML5**              | Estruturação dos elementos da aplicação e criação da área de desenho com Canvas. |
| **CSS3**               | Estilização da interface, identidade visual e estados interativos.               |
| **JavaScript Vanilla** | Gerenciamento dos eventos, controle dos desenhos e manipulação gráfica.          |
| **HTML5 Canvas API**   | Renderização de desenhos e traços em duas dimensões.                             |
| **DOM API**            | Manipulação dos elementos e atualização dinâmica da interface.                   |

## ⚙️ Funcionalidades

- **Desenho Livre:** Criação de traços diretamente na área de desenho utilizando o ponteiro do mouse.
- **Paleta de Cores:** Seleção dinâmica de cores para personalização dos desenhos.
- **Traços Suavizados:** Utilização de junções e extremidades arredondadas para melhorar a aparência dos desenhos.
- **Cursor de Precisão:** Utilização do cursor `crosshair` durante a interação com a área de desenho.
- **Limpeza da Lousa:** Remoção completa dos desenhos por meio de uma função de reinicialização do Canvas.
- **Controle de Interação:** Gerenciamento dos estados de desenho para evitar traços indesejados.

## 🧠 Engenharia de Código e Implementação Técnica

### 🎨 Manipulação da HTML5 Canvas API

A aplicação utiliza o método `getContext("2d")` para acessar o contexto gráfico bidimensional do elemento Canvas.

As propriedades `lineJoin` e `lineCap`, configuradas com o valor `round`, permitem produzir junções e extremidades arredondadas nos traços, proporcionando uma experiência de desenho mais natural.

### 📐 Cálculo e Normalização de Coordenadas

Os eventos do mouse fornecem coordenadas relativas à viewport do navegador por meio das propriedades `clientX` e `clientY`.

Para converter essas posições em coordenadas relativas à área de desenho, a aplicação utiliza `getBoundingClientRect()`, compensando o posicionamento do Canvas na página.

As coordenadas são calculadas pelas seguintes expressões:

\[
\text{pointX} = \text{e.clientX} - \text{rect.left}
\]

\[
\text{pointY} = \text{e.clientY} - \text{rect.top}
\]

Esse procedimento permite posicionar os traços corretamente dentro da área gráfica.

### 🖱️ Gerenciamento de Eventos e Máquina de Estados

O fluxo de desenho é controlado por uma variável booleana denominada `canDraw`, responsável por determinar quando a aplicação está autorizada a registrar novos traços.

- **`mousedown`:** inicia o processo de desenho.
- **`mousemove`:** registra o deslocamento do ponteiro e executa a renderização dos traços.
- **`mouseup`:** interrompe o desenho quando o botão do mouse é liberado.

O evento `mouseup` é monitorado globalmente no objeto `window`, evitando que o estado de desenho permaneça ativo quando o usuário solta o botão fora da área do Canvas.

### 🧹 Reinicialização do Contexto Gráfico

A função `clearScreen` é responsável por limpar a área de desenho e restaurar o contexto gráfico para suas condições iniciais.

Antes da limpeza, o método `setTransform(1, 0, 0, 1, 0, 0)` redefine a matriz de transformação para a configuração padrão.

Em seguida, o método `clearRect()` remove os pixels da área especificada, garantindo a limpeza do quadro.

## 🎨 Interface e Design

### 🌙 Dark Mode

A identidade visual utiliza uma paleta de cores escura, com variáveis CSS centralizadas na pseudo-classe `:root`, facilitando a manutenção e a padronização dos elementos visuais.

### 📐 Dimensionamento da Interface

A área principal utiliza `height: calc(100vh - 50px)` para considerar o espaço disponível da viewport, reservando a altura destinada ao rodapé.

### 🖌️ Experiência de Desenho

A aplicação utiliza o cursor `crosshair` sobre o Canvas para indicar visualmente a área operacional de desenho, além de elementos interativos com transições CSS.

## 🚀 Como Executar Localmente

O projeto utiliza tecnologias nativas do navegador e não exige instalação de dependências externas.

**1. Clone o repositório:**

```bash
git clone URL_DO_REPOSITORIO
```

**2. Acesse o diretório do projeto:**

```bash
cd projeto-desenhando-no-canvas
```

**3. Execute a aplicação:**

Abra o arquivo `index.html` diretamente em um navegador moderno ou utilize a extensão **Live Server** no Visual Studio Code para executar o projeto em ambiente de desenvolvimento.

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack, lógica de programação, computação gráfica web e desenvolvimento de aplicações interativas.

<p align="center">
  <a href="https://github.com/devRafaelSantana-Code">
    <img src="https://img.shields.io/badge/GitHub-devRafaelSantana--Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, CSS Grid, Flexbox e desenvolvimento de interfaces responsivas.
</p>
