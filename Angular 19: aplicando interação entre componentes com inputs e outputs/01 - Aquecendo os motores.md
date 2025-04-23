# 01 **Apresentação**

Olá! Boas-vindas ao curso de Angular! Meu nome é Antônio Evaldo e serei o instrutor ao longo desta jornada em mais um projeto.

> **Audiodescrição:** Antônio se descreve como um homem branco, com cabelos escuros, cacheados, volumosos e na altura dos ombros. Utiliza óculos com armação arredondada na cor preta, tem bigode e cavanhaque, olhos castanhos escuros, e está vestindo uma camisa azul escura da Alura. Ao fundo, uma parede com pôsteres decorativos iluminada por tons de azul e rosa.

## O que vamos aprender?

Neste curso, vamos desenvolver um projeto incrível chamado Anybank. Trata-se de uma aplicação que simula um sistema bancário.

![Interface de um aplicativo bancário. No topo, banner azul com o dia da semana e a data, uma saudação à pessoa usuária e informações sobre o saldo bancário da conta corrente. Abaixo, há uma seção para inserir 'Nova transação' com campos para selecionar o tipo de transação e inserir o valor, com o botão 'Confirmar transação' em azul claro. No lado direito, painel de 'Extrato' com um histórico financeiro listando transações do mês com seus respectivos valores e datas.](https://cdn1.gnarususercontent.com.br/1/795715/b3dc28ac-7190-42c0-a0d0-864323b93024.png)Nela, temos um banner que exibe a data atual e uma apresentação para nós, pessoas usuárias. O saldo de uma conta-corrente é inicializado em R$ 00,00.

Logo abaixo do banner, há um formulário para novas transações. Nesse formulário, podemos, por exemplo, selecionar o tipo de transação como depósito e inserir um valor, como R$ 50,50. Ao clicar no botão de "Confirmar transação", o saldo no banner é atualizado automaticamente com esse depósito. Além disso, à direita, temos um extrato que mostra o histórico de transações realizadas na aplicação.

Vamos a mais um exemplo: no formulário, podemos selecionar a opção de saque para realizar uma nova transação. Ao inserir R$ 10 e confirmar a transação, o saldo é decrementado desse valor, e o extrato exibe a transação mais recente, de menos R$ 10, juntamente com a data em que estamos gravando este curso.

Essas datas são totalmente dinâmicas e se ajustarão conforme o período em que estivermos acompanhando o curso. Ao longo das aulas, exploraremos diversos conceitos essenciais, incluindo:

* **Pipes do Angular** e sua aplicação na formatação de textos, como datas e moedas;
* Manipulação de formulários, com foco na **abordagem orientada a template** , abordando os conceitos fundamentais dessa estrutura;
* **Comunicação avançada entre componentes** , utilizando *inputs* e *outputs* para resolver desafios comuns de interação no Angular;
* **Uso de signals e da função `computed`** para tornar nossa aplicação ainda mais dinâmica e reativa, proporcionando uma experiência interativa fluida para a pessoa usuária.

Haverá diversas atividades práticas para consolidar todo o conhecimento adquirido. É fundamental dominar esses conceitos, pois a aplicação bancária que desenvolveremos reflete cenários amplamente utilizados no mundo real. Com isso, daremos um grande passo no aprendizado de Angular. Ainda há muito mais para explorar, mas este será um marco importante na sua jornada!

## Pré-requisitos

Para acompanhar o curso, é essencial ter familiaridade com **HTML, CSS, TypeScript** e os **fundamentos do Angular** , incluindo a **criação de componentes** e o **uso dos principais comandos da CLI** .

Prontos para embarcar nessa jornada incrível? Nos vemos no próximo vídeo!

# 02 **Preparando o ambiente**

# Olá, dev!

Boas-vindas a mais um curso de Angular!

Para começar esse novo mergulho, sugiro que leia as orientações a seguir para um bom aprendizado! Vamos lá?

## 1. Angular CLI

Para utilizar a Angular CLI (versão do curso 19.1.5) é necessário ter o [NodeJS](https://nodejs.org/) (versão do curso 22.13.0) instalado. Você pode usar qualquer versão 19.x.x da Angular CLI e qualquer versão 22.x.x do Node para me acompanhar bem neste curso e evitar erros por incompatibilidade.

> Se você não tem o Node.js instalado, siga o passo a passo do artigo [Como instalar o Node.js no Windows, Linux e macOS](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos).

Para conferir se você já possui a CLI do Angular instalada e a sua versão, você pode executar no seu terminal o seguinte comando:

```bash hljs
ng version

```

O terminal deve responder com as versões instaladas no seu computador. Se a resposta for que o terminal não reconhece o comando, você pode instalar a Angular CLI na versão 19.1.5 com o seguinte comando:

```bash hljs
npm install -g @angular/cli@19.1.5

```

A instalação deve ser feita e você deverá ser capaz de criar um novo projeto com a Angular CLI.

Também usaremos o [VSCode](https://code.visualstudio.com/download) como editor de código.

## 2. Layout do projeto no Figma

Durante o curso, trabalharemos com um design pronto que será transformado em código. Para visualizar o layout, [acesse o Figma](https://www.figma.com/community/file/1461475432377357666) e explore os elementos da aplicação “Anybank” que iremos implementar ao longo do curso.

---

Agora você está com o terreno preparado para me acompanhar no curso! Vamos lá?

# 03 **Criando projeto Angular**

Recebemos a tarefa de codificar o projeto Anybank, que já foi apresentado anteriormente. Este projeto está disponível em um design no Figma, e após várias discussões, decidimos utilizar o *framework* Angular para construir essa aplicação bancária.

## Verificando a Versão da CLI do Angular

Vamos relembrar como podemos criar uma aplicação Angular do zero? Primeiramente, podemos escolher e abrir qualquer pasta onde desejamos guardar o projeto que criaremos. Em seguida, no sistema Windows, seguramos a tecla "Shift" do teclado e clicamos com o botão direito do mouse em um espaço vazio da pasta para abrir o menu suspenso. Nele, selecionamos a opção de "Abrir no terminal".

Verificamos se a CLI do Angular está instalada globalmente no computador executando o comando `ng version`.

```undefined
ng version

```

No nosso caso, aparece a versão 19.0.7, que é a que utilizaremos neste curso, sendo uma das versões mais recentes no momento da gravação.

## Criando o Projeto Anybank

Após a confirmação da versão, podemos criar o novo projeto. Para isso, escrevemos o comando `ng new` seguido do nome do projeto, que será `anybank`. No comando `ng new`, podemos passar algumas opções, conhecidas como *flags* (bandeiras, em inglês), que personalizam a execução do comando.

A primeira *flag* que utilizamos é `--no-routing`, que indica que queremos criar a aplicação sem roteamento. Roteamento é um assunto que será abordado em um curso futuro, mas basicamente serve para aplicações com várias páginas. Como nossa aplicação possui apenas uma página, não utilizaremos roteamento.

Outra *flag* que passamos é `--skip-tests`, que serve para pular os testes, pois não utilizaremos testes de unidade nem de integração neste momento. Esses são assuntos que também serão estudados no futuro.

```css
ng new anybank --no-routing --skip-tests

```

Após executar o comando, o terminal faz algumas perguntas para personalizar ainda mais a criação do projeto. A primeira pergunta é sobre a estilização, e selecionamos CSS pressionando "Enter". A próxima pergunta é sobre a utilização de SSR, e selecionamos a opção padrão, que é não utilizar SSR, um assunto mais avançado que será estudado posteriormente.

Após responder às perguntas, a CLI do Angular informa que criou vários arquivos para o projeto inicial e está instalando as dependências do NPM. Essas dependências são os pacotes necessários para que o Angular funcione corretamente. Essa parte pode demorar um pouco.

## Abrindo o Projeto no VS Code

Com as dependências instaladas, abrimos a aplicação Angular escrevendo `code anybank` no terminal, o que abre diretamente no VS Code.

Para verificar se a aplicação está funcionando, abrimos o terminal integrado do VS Code com "Ctrl + '" e executamos `npm start`.

```sql
npm start

```

Enquanto o comando é executado, relembramos como ele funciona. No arquivo `package.json`, localizado na raiz do projeto, estão guardados alguns scripts que podem ser executados pelo NPM.

Dentro da seção de scripts, teremos um script chamado `start`, cujo conteúdo, ou seja, o comando que ele executará, é `ng serve`. Isso significa que também poderíamos executar no Terminal o comando `ng serve` para rodar a aplicação.

No terminal, ao ser feita uma pergunta, podemos pressionar "Enter" para fornecer a resposta padrão, que é a coleta de algumas informações do nosso aplicativo. Basicamente, executamos o script `npm start`, e agora vamos servir a aplicação.

Ao expandir o terminal integrado, observamos o texto "Building", que indica que a aplicação está sendo construída para ser servida no servidor local. Essa parte pode demorar um pouco.

Agora, a aplicação está disponível em `http://localhost:4200`. Podemos segurar a tecla "Ctrl" do teclado e clicar nesse link, ou digitar `o` no terminal e pressionar "Enter" para abrir a aplicação no navegador.

A aplicação que abriu no navegador é o Anybank. No entanto, o projeto que veio é o projeto esqueleto, que é o padrão, contendo alguns títulos e links que o Angular fornece. Agora, começaremos a preparar a aplicação para construir de fato o Anybank.

## Adicionando Fontes Personalizadas

Voltando ao VS Code, fecharemos o terminal integrado e o `package.json`, e abriremos o explorador do projeto. Dentro da pasta `src`, abriremos o `index.html`. Vamos colar alguns links necessários para utilizar as fontes do Google personalizadas para este projeto, conforme indicado pelo Figma:

```perl
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

```

Após copiar da nossa referência, colamos no final da tag `<head>`, antes de seu fechamento:

```xml
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Anybank</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

Esse link trará as fontes do Google que utilizaremos. Feito isso, salvamos o arquivo.

## Configurando Estilos Globais

O título da aplicação já está como Anybank, o que está correto. Além disso, pegaremos os estilos CSS que utilizaremos globalmente na aplicação.

Ainda dentro da pasta `src`, há um arquivo chamado `styles.css`, já configurado para ser incluído automaticamente pelo Angular de forma global. Removeremos o comentário que indica isso e, novamente, pegaremos o código CSS da nossa referência:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --preto: #000000;
  --cinza-escuro: #8B8B8B;
  --cinza-medio: #A6A6A6;
  --cinza: #CBCBCB;
  --azul-destaques: #90DDFF;
  --azul-hover: #5CC0ED;
  --azul-pressionado: #30A7DC;
  --gradiente-azul: linear-gradient(180deg, #FFF 0%, #6BD1FF 100%);
  --fundo-azul-claro: #F2FBFF;
  --fundo-cinza-claro: #F5F5F5;
}

html,
body {
  font-family: "Montserrat", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  min-height: 100vh;
  color: var(--preto);
}

button,
select,
input,
textarea {
  font: inherit;
  color: inherit;
}

button {
  border: 0;
}

ul,
li {
  list-style: none;
}

```

Após colar o código, formatamos com "Alt + Shift F". Ele contém um reset CSS e algumas variáveis que utilizaremos neste projeto específico. Podemos explorar esse código CSS com mais calma, lembrando que o foco deste curso não é CSS, então não explicaremos linha a linha. Feito isso, salvamos o arquivo.

## Personalizando o Componente Principal

Por fim, voltamos para a pasta `src`, entramos na pasta `app` e abrimos o arquivo `app.component.html`. Excluímos todo o conteúdo desse arquivo e, no lugar, colocamos um `<h1>` com o texto "**Olá, Evaldo! :)** ". Se preferir, pode colocar seu nome. Feito isso, salvamos o arquivo.

```css
<h1>Olá, Evaldo! :)</h1>

```

Ao voltar para o navegador, percebemos que conseguimos remover todo o projeto esqueleto que veio por padrão. O reset CSS foi aplicado com sucesso, removendo alguns espaçamentos originais. O texto "**Olá, Evaldo! :)** " está levemente arredondado, utilizando a fonte *Montserrat* , especificada no `styles.css` e vinda das tags link que colocamos no HTML.

## Conclusão e Próximos Passos

Essa é a preparação que queríamos fazer para o nosso projeto Anybank. Agora estamos prontos para dar vida a ele, criando nosso primeiro componente. Nos encontramos na próxima etapa!

# 04 **Personalizando um projeto inicial**

Sua equipe recebeu a missão de desenvolver a Playcatch, uma nova plataforma de streaming de música, e escolheu o Angular como framework para a interface web. Durante a criação do projeto, a equipe decidiu personalizar algumas configurações iniciais para garantir que a estrutura do código atenda melhor às necessidades do desenvolvimento. No entanto, alguns membros do time ficaram em dúvida sobre quais aspectos podem ser configurados já no momento da criação do projeto, sem a necessidade de ajustes manuais posteriores.

Quais personalizações podem ser feitas diretamente ao criar um novo projeto por meio da CLI do Angular, sem precisar de configurações manuais posteriores?

[ ]A pessoa desenvolvedora pode escolher desde a interface visual da aplicação até a arquitetura de banco de dados diretamente.

[ ]A única opção possível no momento da criação é escolher um nome para o projeto, sendo necessário ajustar outras configurações posteriormente.

[ ]A linha de comando do Angular permite que você escolha se a aplicação que você deseja criar vai ter navegação entre páginas, mas não é possível impedir a criação de testes.

[X]A escolha de opções como a remoção do roteamento de páginas padrão e a possibilidade de pular a criação de testes.

Correto, pois através do uso de flags (opções) é possível remover o roteamento de páginas padrão com a flag `--no-routing` e escolher se o projeto vai realizar testes nos componentes com a flag `--skip-tests`.

# 05 **Para saber mais: sintaxe e documentação da CLI**

No vídeo anterior, criamos um projeto Angular com as opções (ou *flags* ) `--no-routing` (sem roteamento) e `--skip-tests` (pular testes). Mas de onde estão vindo essas opções? Como sabemos que opções podemos utilizar e a sintaxe correta de escrita ao executar os comandos da Angular CLI?

A documentação do Angular possui uma página de introdução sobre a [Angular CLI](https://angular.dev/tools/cli) que contém links importantes sobre como essa ferramenta funciona.

Uma dessas páginas que você irá usar no seu cotidiano como dev é a [página de referência da CLI](https://angular.dev/cli), que possui todos os comandos disponíveis que você pode executar, como `ng new`, `ng generate`, `ng serve`, etc.

O bacana dessa referência é que ela fornece em mínimos detalhes como cada um dos comandos funciona, como: suas formas abreviadas, quais opções cada um deles pode receber, etc. Por exemplo, a página do comando [`ng new`](https://angular.dev/cli/new) documenta as opções `routing` e `skip-tests`, entre outras.

E como é dito na [página de introdução da CLI](https://angular.dev/tools/cli), qualquer opção que recebe um valor *booleano* (*true* ou *false* ) possui duas formas de escrita. Por exemplo, a opção `routing` pode ser escrita de uma das duas formas abaixo para habilitar o roteamento:

```bash hljs
ng new --routing=true
# ou:
ng new --routing

```

Mas como a configuração de roteamento já é habilitada por padrão na versão 19, podemos escrever uma das seguintes formas para desabilitar o roteamento (como fizemos em vídeo):

```bash hljs
ng new --routing=false
# ou:
ng new --no-routing
Copiar código
```

Saber esses detalhes nos ajudam a dominar cada vez mais as ferramentas que utilizamos. E para continuar aprendendo continuamente, você pode usar a documentação como sua aliada!

# 06 **Criando componente Banner**

Nós criamos um novo projeto Angular do zero, utilizando a CLI do Angular!

O projeto que desejamos desenvolver é o Anybank. Atualmente, se voltarmos ao Figma, ele está bem elaborado visualmente, enquanto o nosso ainda é apenas um título com uma apresentação dizendo "**Olá, Evaldo! :)** ".

## Criando a Estrutura Inicial no HTML

Precisamos começar a implementar o projeto de fato. Podemos iniciar pelo primeiro componente visual, que é um banner. Este banner incluirá a data atual, que será dinamizada, a apresentação já mencionada, e, do lado direito, o tipo da conta e o valor do saldo.

No VS Code, a primeira ação será remover o `<h1>` e inserir nosso HTML inicial, que incluirá algumas estilizações. Este HTML começará com uma `<div>` com a classe `app`. Dentro dela, haverá outra `<div>` com a classe `banner-form-wrapper`. O sufixo "wrapper" indica que a `<div>` envolverá o banner e o formulário que eventualmente criaremos.

Essas duas `divs` são criadas para propósitos de estilização e já servirão para nossa estrutura futura. Vamos deixá-las prontas, e dentro delas, colocaremos o banner, que pode ser um componente. Vamos deixar apenas o texto "banner" e, em seguida, pegar os estilos CSS que servirão para o `app.component`.

Primeiro, vamos criar a estrutura básica do HTML:

```html hljs language-xml
<div class="app">
  <div class="banner-form-wrapper">
    banner...
  </div>
</div>
```

## Aplicando Estilizações no CSS

No explorador do VS Code, abriremos o arquivo CSS do `app.component` e colaremos os estilos previamente configurados:

```css
.app {
  padding: 2.5rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 65rem;
  margin: 0 auto;
}

.banner-form-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
```

Após salvar o arquivo, ao voltar ao navegador e abrir a aplicação Anybank, o banner já estará um pouco mais centralizado, com algumas estilizações que serão a base de todo o nosso projeto.

## Criando o Componente do Banner

Agora, queremos codificar o banner em si. Para isso, criaremos um novo componente, que terá seu próprio HTML, CSS e JavaScript ou TypeScript. Utilizaremos um comando da CLI do Angular para criar um componente do zero.

Em um novo terminal integrado, que abrimos com "Ctrl + Shift + '", digitamos o comando `ng g c`, onde `g` vem de *generate* e `c` de componente. Nomearemos nosso componente como `banner`, pressionamos "Enter" e aguardamos a geração dos novos arquivos desse componente.

```bash hljs
ng g c banner

```

Com os arquivos gerados, podemos fechar o terminal integrado, apenas colapsando-o. No explorador de arquivos, uma nova pasta `banner` foi criada dentro da pasta `app`. Dentro dessa pasta, três novos arquivos foram criados: `banner.component.css`, `banner.component.html` e `banner.component.ts`.

## Importando e Utilizando o Componente

Vamos voltar para o `html` do nosso app, fechar o explorador e, no lugar do texto "banner", abrir a tag `<app-banner`. O VS Code sugere automaticamente a importação, então aceitamos essa sugestão pressionando "Enter". Em seguida, fechamos a tag e salvamos o arquivo.

```html hljs language-xml
<div class="app">
  <div class="banner-form-wrapper">
    <app-banner />
  </div>
</div>

```

Em seguida, abrimos o arquivo `app.component.ts`. Nele, o VS Code importou automaticamente o componente, pois aceitamos a sugestão no `html`. Na seção de importações, ele adicionou `import { BannerComponent } from "./banner/banner.component"`, e também incluiu o `BannerComponent` no array de importações.

O código ficou assim:

```typescript hljs
import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
}
```

Isso demonstra uma produtividade eficiente, pois não precisamos fazer isso manualmente. É necessário salvar o arquivo `app.component.ts`, pois ele não é salvo automaticamente.

Ao voltar ao navegador, o texto "**banner works!** " aparece, que é o texto padrão de um componente do Angular.

## Criando a Estrutura do banner.component.html

Agora, retornamos ao VS Code para trabalhar no componente `banner`. Abrimos o explorador, a pasta `banner` e o `html` correspondente, fechando outros arquivos para evitar confusão. O arquivo `banner.component.html` contém o texto "**banner works!** ", que apagaremos para inserir uma tag `<header>` com a classe `banner`.

Dentro dessa tag, escrevemos uma `section` com a classe `boas-vindas`. Dentro da `section`, incluímos um `span` com a classe `data`, onde colocamos uma data fixa: "**Quinta-feira, 08/09/2022** ". Posteriormente, essa data será dinamizada. Abaixo do `span`, adicionamos um título `<h1>` com a classe `titulo`, contendo o texto "**Olá, Evaldo! :)** ". Feito isso, salvamos o arquivo.

```html hljs language-xml
<header class="banner">
  <section class="boas-vindas">
    <span class="data">Quinta-feira, 08/09/2022</span>

    <h1 class="titulo">Olá, Evaldo! :)</h1>
  </section>
</header>

```

Ao verificar no navegador, os textos "**Quinta-feira, 08/09/2022** " e "**Olá, Evaldo! :)** " aparecem, mas a estilização ainda não está adequada.

## Estilizando o Banner

Consultamos os estilos `css` e abrimos o arquivo `banner.component.css` para colar esses estilos previamente configurados:

```css hljs
.banner {
  border-radius: 0.5rem;
  background: var(--gradiente-azul);
  padding: 3rem 2.5rem;


  display: flex;
  justify-content: space-between;
}


.boas-vindas {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}


.data {
  font-size: 0.8125rem;
}


.titulo {
  font-size: 1.9375rem;
  font-weight: 600;
  line-height: 125%;
}


@media screen and (max-width: 71rem) {
  .banner {
    padding: 3rem 1rem;


    flex-direction: column;
    align-items: center;
    row-gap: 4rem;
  }


  .boas-vindas,
  .conta {
    width: 70%;
  }
}

```

Após colá-los, salvamos o arquivo. Voltando ao navegador, a aplicação já está visualmente agradável. O banner possui um gradiente azul no fundo e os espaçamentos estão ajustados.

## Conclusão e Próximos Passos

Concluímos nosso primeiro componente do banner, mas ainda há trabalho a ser feito, como dinamizar a data. Nos encontramos no próximo vídeo!

# 07 **Aplicando componentes ao projeto**

A empresa Jornada Milhas está desenvolvendo uma nova interface para a reserva de passagens, e a equipe de desenvolvimento percebeu que o código da página principal está ficando muito extenso e difícil de manter. Durante uma reunião, surgiu a discussão sobre a importância de separar partes do código em componentes.

Por que é recomendável separar o código da interface em componentes ao desenvolver uma aplicação em Angular?

[ ]Para evitar que o código seja interpretado pelo navegador de forma incorreta, prevenindo erros de sintaxe.

[ ]Para garantir que cada componente seja carregado individualmente, evitando qualquer impacto no desempenho da aplicação.

[X]Para facilitar a reutilização de código e melhorar a organização do projeto, tornando a manutenção mais simples.

Correta, pois a separação do código em componentes promove a reutilização, melhora a organização e facilita a manutenção, tornando o desenvolvimento mais eficiente e escalável.

[ ]Para impedir que diferentes desenvolvedores trabalhem na mesma parte do código, reduzindo conflitos no versionamento.

# 08 **Faça como eu fiz: criando o projeto Angular e o componente Banner**

Caso ainda não tenha feito os passos apresentados nesta aula, chegou a sua vez de colocar a mão no código. Para isso você precisa:

* Criar um projeto Angular usando a CLI e abrir o projeto no editor de código (VS Code);
* Configurar as fontes do Google e adicionar os estilos globais;
* Criar o componente Banner com o Angular CLI, adicionar a data e o nome no template, adicionar os estilos do Banner e utilizar no componente principal.

Caso tenha dúvidas, você pode clicar no botão **Ver opinião do instrutor** para consultar o passo a passo detalhado para realizar a atividade.

Caso ainda não tenha feito os passos apresentados nesta aula, chegou a sua vez de colocar a mão no código. Para isso você precisa:

* Criar um projeto Angular usando a CLI e abrir o projeto no editor de código (VS Code);
* Configurar as fontes do Google e adicionar os estilos globais;
* Criar o componente Banner com o Angular CLI, adicionar a data e o nome no template, adicionar os estilos do Banner e utilizar no componente principal.

Caso tenha dúvidas, você pode clicar no botão **Ver opinião do instrutor** para consultar o passo a passo detalhado para realizar a atividade.

# 09 **O que aprendemos?**

Nesta aula, aprendemos:

* Como verificar a versão da Angular CLI.
* A criar um novo projeto Angular sem roteamento e testes.
* A utilizar o VS Code para facilitar a importação de componentes.
