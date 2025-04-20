# 01 **Projeto da aula anterior**

Caso queira revisar o código até aqui ou começar a partir desse ponto, [faça o donwload](https://github.com/alura-cursos/4455-organo/archive/refs/heads/aula-2.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/4455-organo/tree/aula-2).

# 02 **Criando interfaces no Angular 19**

Agora, já temos uma estrutura de *card* funcional com as informações necessárias: título, autoria, imagem e também a indicação de favorito. No entanto, na aplicação Organo, vamos dividir esses livros por **gêneros literários** . Portanto, o gênero é outra informação que o livro precisará ter.

Perceba que, sempre que precisamos adicionar ou implementar uma nova funcionalidade, é necessário modificar o objeto `livro` no TypeScript, o qual estamos utilizando como exemplo inicial para implementar essa lógica dentro do componente.

Para evitar a necessidade constante de adicionar ou modificar propriedades, podemos utilizar um recurso do TypeScript para criar um **modelo** para o nosso livro. Esse modelo conterá todas as propriedades que o livro precisa ter, incluindo seus tipos.

## Adicionando propriedade de gênero literário

Primeiro, em `LivroComponent`, vamos adicionar a propriedade `genero` ao objeto `livro`, abaixo de `favorito` na linha 19. Vamos adicionar entre aspas duplas um exemplo de gênero, como "Ficção". Lembre-se terminar com uma vírgula.

> `livro.component.ts`:

```typescript hljs
livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    genero: "Ficcao",
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCE..."
}
Copiar código
```

Nosso livro já possui as propriedades título, autoria, favorito, gênero e imagem. Isso pode ser modificado ao longo do tempo; podemos precisar de mais propriedades ou querer remover alguma. Podemos querer adicionar a data de leitura ou a quantidade de estrelas do livro, por exemplo.

Para organizar isso de forma mais eficiente, vamos criar uma **interface** para o livro, um modelo que funciona como um **contrato** . Assim, ao utilizar um livro, seja para cadastrar, remover ou buscar dados, será necessário passar todas as informações definidas nesse contrato.

## Criando a interface de livro

Para criar uma interface, acessamos o painel lateral esquerdo, clicamos na pasta de "livro", escolhemos a opção "New File" e criamos um novo arquivo para a interface de livro. O nome do arquivo será `livro.ts`. Essa terminação é utilizada porque a interface é um recurso nativo do TypeScript que estamos utilizando nesta aplicação Angular.

No arquivo `livro.ts`, começamos com a definição básica de uma `interface` chamada `Livro` (com "L" maiúsculo):

> `livro.ts`:

```typescript hljs
export interface Livro {

}
Copiar código
```

Nessa interface, iremos adicionar todas as propriedades que passamos no componente de livro, uma a uma, especificando também seus tipos.

Vamos acrescentar as seguintes propriedades: `titulo` do tipo `string`; `autoria` do tipo `string`; `imagem` do tipo `string`; `favorito` do tipo `boolean`; e `genero` do tipo `string`:

```typescript hljs
export interface Livro {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: string;
}
Copiar código
```

Com essa interface, podemos utilizar a tipagem do TypeScript. Podemos voltar ao nosso componente e, na frente da propriedade `livro`, tipá-la como um `Livro`. Com isso, devemos importar a interface `Livro`.

> `livro.component.ts`:

```typescript hljs
import { Livro } from './livro';

// código omitido…

livro: Livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    genero: "Ficcao",
    imagem: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCE..."
}
Copiar código
```

Qual é o benefício do `livro` ser do tipo `Livro`? Com essa tipagem, o TypeScript irá nos avisar caso esqueçamos de passar alguma das propriedades definidas na interface.

Por exemplo, caso não passemos o `genero`, receberemos uma mensagem de erro indicando que está faltando a propriedade `genero`, mas ela é obrigatória no contrato estabelecido pela interface `Livro`. Confira a mensagem de erro em inglês:

> Property 'genero' is missing in type '{ titulo: string; autoria: string; favorito: false; imagem: string; }' but required in type 'Livro'. ts(2741)

Além disso, o TypeScript também indicará um erro caso passemos um tipo errado para uma das propriedades. Como exemplo, vamos colocar o `favorito`, que deveria ser *boolean* , como uma *string* . Confira a mensagem de erro em inglês:

> Type 'string' is not assignable to type 'boolean'. ts(2322)

O TypeScript é rigoroso, mas isso nos auxilia na experiência de desenvolvimento e minimiza erros durante o projeto.

## Próximos passos

Por enquanto, o objeto `livro` está no `LivroComponent`, mas o moveremos para outro arquivo mais adiante. O importante é que já temos uma interface implementada e podemos utilizá-la em toda a aplicação. Sempre que tivermos um objeto do tipo `Livro`, podemos tipá-lo e usar essa interface para minimizar erros e melhorar nossa experiência de desenvolvimento.

No próximo vídeo, vamos continuar evoluindo o projeto. Como já temos a estrutura do card, podemos começar a pensar em como repetir essa estrutura para criar a lista dos nossos livros.

# 03**Estruturando dados de vídeos na plataforma Screen Match**

A Screen Match, uma plataforma de streaming de vídeos similar ao YouTube, está em processo de reformulação de sua estrutura de dados para vídeos. A equipe de desenvolvimento, da qual você faz parte, identificou a necessidade de adicionar novas funcionalidades, como categorização por gênero, marcação de vídeos favoritos e inclusão de imagens de capa. No entanto, as atualizações têm gerado inconsistências e erros. Para resolver esse problema, a equipe decidiu implementar um modelo de dados utilizando interfaces do TypeScript, garantindo que todos os vídeos sigam um padrão consistente.

Qual abordagem de estruturação de interface garantiria que todos os vídeos tenham as propriedades necessárias e como isso beneficiaria a equipe de desenvolvimento?

[ ]Implementar uma interface `Video` que inclua propriedades como título e gênero, mas deixar a imagem de capa e favorito como propriedades dinâmicas, para maior flexibilidade.

[X]Definir uma interface `Video` que inclua propriedades como título, gênero, imagem de capa e favorito (booleano), assegurando que todas as instâncias de vídeo sigam esse "contrato", o que ajuda a reduzir erros e melhora a manutenção do código.

Correta, pois ao definir uma interface com todas as propriedades necessárias, o TypeScript garante que todas as instâncias de vídeo sejam consistentes, alertando sobre qualquer ausência ou tipo incorreto, beneficiando a equipe ao reduzir erros e facilitar a manutenção.

[ ]Utilizar uma interface `Video` que inclua apenas a propriedade título, deixando as demais propriedades para serem adicionadas conforme necessário, para evitar sobrecarga inicial no desenvolvimento.

[ ]Criar uma interface `Video` que apenas inclua propriedades opcionais, permitindo flexibilidade na definição de vídeos, o que evita a necessidade de atualizações frequentes no modelo de dados.

Parabéns, você acertou!

# 04 **Preparando o ambiente: códigos CSS**

No vídeo 3.2, vamos estilizar a lista de livros. Para isso, vamos alterar o arquivo css do componente `lista-livros.component.css` e o arquivo de estilos globais `styles.css`, adicionando o código a seguir:

`lista-livros.component.css`

```css
.linha-destaque--grande {
  width: 64px;
  border-bottom: 4px solid var(--color-primaria);
}
Copiar código
```

`styles.css`

```css
.texto-titulo {
  font-family: var(--font-prata);
  font-size: 40px;
  font-weight: var(--font-weight-normal);
  line-height: 72px;
  text-align: center;
  color: var(--color-primaria);
}
.linha-destaque {
  display: block;
  margin: 0 auto;
}
Copiar código
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

# 05 **Criando o componente de listagem**

Após a melhoria na criação da interface e na tipagem do nosso objeto como um `Livro`, vamos continuar evoluindo o projeto. Com base no Figma, agora que desenvolvemos a estrutura do card, precisamos criar uma forma de listar esses cards.

Ao invés de repetir cada um dos cards, podemos ter um componente que será responsável por fazer essa iteração e repetição dos cards.

## Criando componente de listagem de livros

Vamos voltar para o VS Code e criar um novo componente. Abriremos o terminal com "Ctrl + J" e usaremos "Ctrl + C" para parar de servir a aplicação. Vamos criar o componente com o comando `ng g c` e chamá-lo de `componentes/lista-livros`.

```bash hljs
ng g c componentes/lista-livros
Copiar código
```

Em seguida, digitaremos `ng serve` novamente no terminal para visualizar as mudanças. Acessando o menu lateral esquerdo, já temos o componente `lista-livros` dentro da pasta "componentes".

## Alterando aparência do componente

Vamos abrir o CSS e o HTML. No HTML, criaremos a seção de "Minha Organização", assim como prototipada no Figma. Você também pode nomeá-la de outra maneira, dependendo do que será feito no projeto. Posteriormente, listaremos os cards.

No template HTML desse componente, criaremos uma `<section>`. Dentro dela, adicionaremos um `<h2>` com a classe `texto-titulo`. Dentro do `<h2>`, digitaremos "Minhas leituras", que será o nosso título.

Depois, criaremos um `<span>` com as classes `linha-destaque` e `linha-destaque--grande`. Abaixo do título, temos uma linha de destaque grande em azul e, abaixo de cada gênero, também temos uma linha de destaque, só que um pouco menor. Essas classes servem para diferenciar essas linhas.

> `lista-livros.component.html`:

```html hljs language-xml
<section>
  <h2 class="texto-titulo">
    Minhas leituras
  </h2>
  <span class="linha-destaque linha-destaque--grande"></span>
</section>
Copiar código
```

Agora, vamos adicionar o CSS. Novamente, deixaremos o CSS desse componente na atividade de "Preparando o ambiente" para que você possa copiar e colar no arquivo CSS do componente de listagem de livros.

> `lista-livros.component.css`:

```css hljs
.linha-destaque--grande {
  width: 64px;
  border-bottom: 4px solid var(--color-primaria);
}
Copiar código
```

Também vamos modificar o arquivo de CSS global. No `styles.css`, vamos colar as classes `texto-titulo` e `linha-destaque` no final do arquivo:

> `styles.css`:

```css hljs
.texto-titulo {
  font-family: var(--font-prata);
  font-size: 40px;
  font-weight: var(--font-weight-normal);
  line-height: 72px;
  text-align: center;
  color: var(--color-primaria);
}

.linha-destaque {
  display: block;
  margin: 0 auto;
}
Copiar código
```

## Adicionando componente na vitrine

Por fim, adicionaremos o nosso novo componente na vitrine, no componente `src/app/app.component.html`. Ao invés de renderizar vários `<app-livro>` para ter uma lista de livros, vamos adicionar o seletor do nosso novo componente, `<app-lista-livros>`.

> `app.component.html`:

```html hljs language-xml
<app-cabecalho></app-cabecalho>
<app-lista-livros></app-lista-livros>
<app-rodape></app-rodape>
Copiar código
```

Agora, precisamos importá-lo no `src/app/app.component.ts`. Há um erro nesse arquivo, pois não estamos mais utilizando o componente de livro. Portanto, podemos excluir esse `LivroComponent` e, em vez dele, importar o `ListaLivrosComponent`.

A importação automática de `ListaLivrosComponent` foi feita na linha 5. Além disso, podemos excluir a importação de `LivroComponent` que não está mais sendo utilizado.

> `app.component.ts`:

```typescript hljs
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ListaLivrosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
Copiar código
```

Agora, vamos voltar à aplicação e recarregar a página. Percebemos que agora aparece a seção de "Minhas leituras" e, abaixo, uma linha de destaque. No entanto, o card do livro não está aparecendo.

A partir de agora, começaremos a entender como funciona a **comunicação entre componentes** .

## Próximos passos

Já aprendemos como funciona a comunicação e a associação dentro do próprio componente, mas agora precisamos entender como fazer essa comunicação entre um componente e outro, pois precisaremos utilizar o componente de livro dentro desse componente de listagem.

Mas, por que criar tantos componentes? Por que não criar um componente único responsável por tudo, desde a renderização do card até sua listagem? À medida que esse componente tem mais responsabilidades, sua lógica se torna mais complexa. Existe uma boa prática na programação chamada **separação de responsabilidades** .

> Cada componente deve ter uma responsabilidade única ou um conjunto pequeno de responsabilidades. Isso melhora a legibilidade e a manutenção do código.

Imagine pegar um código no trabalho que outra pessoa escreveu, com uma mistura de várias coisas; será muito difícil ler, entender e dar manutenção. Além disso, a parte dos testes também se torna mais difícil quando o componente é muito grande e tem muitas responsabilidades.

Sempre tentamos componentizar, deixando o escopo do componente menor, para obter todos esses benefícios. Por isso, criamos um componente para o card, outro responsável pela listagem e, já adiantando, também teremos um componente responsável pela renderização dos gêneros literários.

No próximo vídeo, entenderemos como fazer essa comunicação entre diferentes componentes.

# 06 **Criando input required**

No vídeo anterior, criamos um novo componente responsável pela renderização dos gêneros e dos livros, denominado componente `ListaLivrosComponent`. Agora, vamos continuar adicionando a lógica para renderizar os livros na tela.

## Fazendo *mock* dos dados de livros

Antes de prosseguir com essa lógica, vamos acessar o menu lateral esquerdo do VSCode e abrir o arquivo `livro.component.ts`. Nesse componente, os dados dos livros estão na própria classe do componente, o que não é o ideal.

O componente não deve conter essa lógica de ter os dados em si próprio; precisamos buscar esses dados de outro lugar, como uma API, um servidor ou um *back-end* . No entanto, para simplificar, utilizaremos **dados *mockados*** (simulados). Assim, os dados que vamos buscar estarão no nosso próprio projeto.

Para isso, vamos criar um novo arquivo, dentro de "App", que denominaremos `mock-livros.ts`. Nesse arquivo, teremos uma constante que será um *array* com vários objetos, representando livros informativos.

Vamos exportar essa constante, chamando-a de `livros`, e tipá-la como nossa interface de `Livro`, que será um *array* . Essa constante irá receber um *array* de objetos. Agora, vamos importar a interface `Livro`.

> `mock-livros.ts`:

```typescript hljs
import { Livro } from "./componentes/livro/livro";

export const livros: Livro[] = [

]
Copiar código
```

Dentro desse *array* , vamos colar vários livros. O [código do `mock-livros.ts`](https://github.com/alura-cursos/4455-organo/blob/aula-3/src/app/mock-livros.ts) também estará disponível para consulta no GitHub. Inclusive, neste momento, você pode personalizar o projeto e colocar outras informações, caso você queira.

## Criando interface de gênero literário

Dentre os vários objetos de livros que adicionamos, vamos conferir o primeiro:

```typescript hljs
{
  titulo: 'As ondas',
  autoria: 'Virginia Woolf',
  genero: {
    id: 'romance',
    value: 'Romance',
    livros: []
  },
  favorito: false,
  imagem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wC...'
},
Copiar código
```

No entanto, há um erro na propriedade `genero`. Nesses objetos, existem as propriedades de `titulo`, `autoria`, `genero`, `favorito` e `imagem` assim como definimos na interface. No entanto, a propriedade de `genero` está diferente. Ela não está como *string* .

O gênero é um objeto mais complexo e possui outras propriedades, como `id`, `value` e um *array* de `livros`. O `id` de cada gênero poderia ser um número, mas nesse caso está mais explícito, como o nome do gênero, sem acentuação e sem maiúsculas.

O `value` é o que mostraremos na interface, por isso, tem letras maiúsculas e acentuação. O *array* de `livros` é importante porque contém todos os livros que possuem esse determinado gênero, auxiliando na lógica para renderizar os gêneros literários.

O erro ocorre porque tipamos como a interface de `Livro`, mas nossa interface está diferente. Precisamos atualizar a interface. Isso é comum ao buscar dados de uma API, pois eles nem sempre vêm da forma desejada. É necessário manipular esses dados e ajustar a interface para obter apenas os dados importantes para seu contexto.

Acessando o menu lateral esquerdo, vamos à interface em `livro.ts`. Como o gênero é um objeto mais complexo, podemos criar outra interface para representá-lo. Podemos tanto criar outro arquivo para essa interface quanto exportá-la no mesmo arquivo, que é o que faremos.

Depois da interface de `Livro`, vamos exportar a `interface` chamada `GeneroLiterario`. Entre chaves, passaremos as propriedades que existem no *mock* : `id` e `value`, ambos do tipo `string`, e `livros` que é um *array* de `Livro`.

> `livros.ts`:

```typescript hljs
export interface GeneroLiterario {
  id: string;
  value: string;
  livros: Livro[]
}
Copiar código
```

Na interface `Livro`, adicionamos o tipo da propriedade `genero` como `GeneroLiterario` ao invés de `string`.

```typescript hljs
export interface Livro {
  titulo: string;
  autoria: string;
  imagem: string;
  favorito: boolean;
  genero: GeneroLiterario;
}
Copiar código
```

Com isso, o arquivo com os dados mockados para de apresentar erros.

## Criando *input property*

No arquivo `livro.component.ts`, ainda há um erro em `livro`. Porém, não precisamos mais dessa informação fixa no componente. Portanto, podemos excluir a propriedade `livro`. Para facilitar, como a *string* de imagem é muito grande, vamos colapsar a linha 16 do lado esquerdo, selecionar essas linhas e deletá-las.

Dessa vez, aparece um erro no método de `alternarFavorito()`. Isso porque estávamos acessando `this.livro` e `livro` era uma propriedade dessa classe. Inclusive, se acessarmos o *template* HTML do componente de livro, também observaremos alguns erros.

Como teremos acesso a esses dados mockados agora que estão em outro local? O `livro` será um componente filho. Ele receberá essas informações de fora, do componente pai. Para que um componente receba informações de fora e consiga renderizá-las, precisamos criar uma propriedade especial para isso, chamada de **propriedade de entrada** (ou *input property* ).

Então, vamos desenvolver esse código no `LivroComponent`. A propriedade que queremos é o `livro` e ela receberá o `input()` - que é uma função do Angular para criar a *input property* . Precisamos fazer a importação do `input` do pacote `@angular/core`.

Esse `input` é obrigatório, pois nenhum componente de fora pode usar o componente de livro sem passar essa informação - já que a função do `LivroComponent` é exatamente renderizar as informações dos livros. Por conta disso, vamos dizer que nosso `input` é `required`, ou seja, é obrigatório.

Também vamos tipar o `input`. Nós sabemos que essa informação que o livro precisa receber é do tipo `Livro`. Como já temos a importação dessa interface na linha 2, não precisamos importá-la novamente.

Após a tipagem, devemos lembrar de abrir e fechar parênteses, porque esse `input` vai nos retornar uma função `inputSignal()`.

> `livro.component.ts`:

```typescript hljs
import { Component, input } from '@angular/core';
import { Livro } from './livro';

export class LivroComponent {

  livro = input.required<Livro>();

  // código omitido…
  }
}
Copiar código
```

Dessa forma, conseguimos criar uma propriedade de entrada para que um componente receba informações de fora.

No entanto, o método `alterarFavorito()` e o *template* estão dando erro. Como comentado, esse `input` nos retornará uma função *signal* . Então, ao invés de passar apenas `this.livro`, precisamos adicionar os parênteses, como uma função mesmo.

> `livro.component.ts`:

```typescript hljs
export class LivroComponent {

  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito
  }
}
Copiar código
```

Faremos a mesma modificação no *template* de livro. Vamos adicionar os parênteses em `livro()` na interpolação dos favoritos, do título e da autoria, bem como no *property binding* , tanto do `src` como do `alt`.

> `livro.component.html`:

```html hljs language-xml
<section>
  <button class="favorito-btn" (click)="alternarFavorito()">
    <span>{{ livro().favorito ? '\u2764' : '\u2661' }}</span>
  </button>
  <div class="imagem">
    <img [src]="livro().imagem" [alt]="livro().titulo">
  </div>
  <div class="info-livro">
    <h2 class="texto-h2">{{ livro().titulo }}</h2>
    <h3 class="texto-h3">{{ livro().autoria }}</h3>
  </div>
</section>
Copiar código
```

## Aprofundando no conceito

Agora, vamos entender um pouco mais sobre o que é esse `input` e o que é esse *signal* . Para isso, podemos acessar a [documentação do Angular](https://angular.dev/guide/components/inputs).

No menu lateral esquerdo do site do Angular, clicamos em "Docs". Depois entramos em "Components" e selecionamos a quarta opção, que é "*Accepting data with input properties* " (em português, aceitando dados via propriedades de entrada).

Nessa página, encontramos toda a documentação detalhada sobre como receber informações de um componente pai. Vamos conferir a parte sobre "*Required Inputs* ", que foi o `input` que criamos.

A documentação traz outro exemplo sobre o `input.required`, dessa vez do tipo *number* , que nos retorna um `InputSignal`.

> Exemplo da documentação:

```ts hljs language-typescript
@Component({/*...*/})
export class CustomSlider {
  // Declare a required input named value. Returns an `InputSignal<number>`.
  value = input.required<number>();
}
Copiar código
```

Mas o que são *signals* ? No Angular, *signals* são uma maneira de reagir a estados de um determinado elemento. Ou seja, os *signals* servem para acompanhar as mudanças que estão acontecendo em um determinado elemento e reagir a elas.

No nosso contexto, isso significa que, sempre que nossa propriedade `livro` sofrer alguma alteração, o Angular detectará isso automaticamente e atualizará os componentes que têm relação com esse *signal* .

Na parte sobre "*Declaring inputs with the `@Input` decorator* " (em português, declarando entradas com decorador `@Input`), podemos encontrar alguns projetos que utilizam a abordagem mais antiga, onde utilizávamos o *decorator* `@Input` para fazer a mesma coisa.

> Exemplo da documentação:

```ts hljs language-typescript
@Component({...})
export class CustomSlider {
  @Input() value = 0;
}
Copiar código
```

O Angular traz até um *disclaimer* dizendo que, embora recomende, a partir de agora, utilizarmos os *inputs* baseados em *signals* , essa abordagem de `@Input` com *decorator* ainda é suportada. Deixaremos uma atividade comparando essas duas abordagens e mostrando os benefícios de se utilizar os *signals* .

## Próximos passos

Conseguimos separar os dados em um arquivo, criar uma *input property* para o `livro` receber essas informações de fora. No próximo vídeo, precisamos fazer essa comunicação entre componente pai e componente filho.

# 7 **Para saber mais: @Input vs inputSignal no Angular**

A chegada do `inputSignal` no Angular trouxe uma abordagem mais performática para lidar com a comunicação entre componentes. Vamos comparar as duas abordagens e entender como elas funcionam?

## 1. O que é `inputSignal`?

O `inputSignal` é uma API reativa introduzida no Angular 16, que permite lidar com dados de entrada utilizando **signals** . Essa abordagem elimina a necessidade do **`zone.js`** , tornando a aplicação mais leve e altamente performática.

**Exemplo com `inputSignal`:**

```ini
livro = input<Livro>();
Copiar código
```

## 2. O que é `@Input`?

O decorador `@Input` é usado para receber dados de um componente pai. Ele depende do **`zone.js`** para detectar alterações e atualizar os valores no componente filho. Essa abordagem é utilizada em versões anteriores do Angular e continua sendo suportada até o momento.

**Exemplo com `@Input`:**

```typescript hljs
@Input() livro!: Livro;
Copiar código
```

## 3. Diferenças principais


| **Aspecto**                 | **`@Input`**                                                                   | **`input`**                                         |
| ----------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Mecanismo**               | Baseado em`zone.js`.                                                           | Baseado em**Signals** .                             |
| **Performance**             | Pode ser mais lento em aplicações grandes devido à detecção de mudanças. | Mais performático, pois elimina o uso de`zone.js`. |
| **Atualizações reativas** | Atualizações automáticas, mas com menos controle.                           | Atualizações reativas, com controle mais preciso. |
| **Sintaxe**                 | Utiliza decorators (`@Input`).                                                 | Utiliza uma API funcional (`inputSignal`).          |
| **Suporte a Versões**      | Compatível com Angular 2+.                                                    | Requer Angular 16 ou superior.                      |

## 4. Quando usar?

### 4.1. `@Input`

* Indicado para **projetos legados** ou versões do Angular **anteriores à 16** ;
* Adequado para aplicações que não exigem otimizações avançadas ou que já utilizam a abordagem baseada em `zone.js`.

### 4.2. `inputSignal`

* Recomendado para **novos projetos** ;
* Ideal para quem busca uma aplicação mais performática e quer adotar a abordagem reativa oferecida por signals;
* Permite maior controle sobre as atualizações de estado, especialmente em projetos complexos e de larga escala.

A recomendação geral da equipe Angular é que projetos novos adotem **`input`** baseado em signals para aproveitar os benefícios de performance e reatividade, enquanto o **`@Input`** ainda é suportado para manutenção de projetos existentes.

Se quiser saber mais de signal, veja [este artigo](https://www.alura.com.br/artigos/entendendo-signals-angular?srsltid=AfmBOoovpgOXXousE6h4CBWuyIng1J3jwSq2mOBRmod4g449GB49bKWR) do instrutor Vinicios Neves.

# 08 **Entendendo a comunicação entre componentes pai e filho**

O `livro` será um componente filho, mas quem é seu componente pai? Em vídeos anteriores, já falamos que criaríamos um componente específico para cada gênero literário.

No protótipo do Figma, existe uma grande lista de livros, separados por gênero. Para fazer projeto, precisamos do componente de lista, do componente de gênero e, dentro dele, do componente de livro.

O intuito é construir uma árvore de componentes no Angular e também entender como fazer a comunicação entre eles.

## Criado componente de gênero literário

Vamos voltar ao VS Code para criar o último componente, gênero literário. Para isso, vamos abrir o terminal integrado com "Ctrl + J" e parar a aplicação com "Ctrl + C". Para criar o componente de `genero-literario`, executamos o seguinte comando:

```bash hljs
ng g c componentes/genero-literario
Copiar código
```

Em seguida, é importante executar novamente a aplicação para garantir que tudo está funcionando corretamente:

```bash hljs
ng serve
Copiar código
```

## Estabelecendo comunicação entre componentes pai e filho

Agora, vamos acessar a pasta "src > app > componentes > genero-literario". A ideia é passar o componente de livro dentro do HTML do componente de gênero.

Em `genero-literario.component.html`, substituímos o conteúdo inicial pelo seletor do componente de livro, ou seja, `<app-livro>`.

> `genero-literario.component.html`:

```html hljs language-xml
<app-livro></app-livro>
Copiar código
```

No entanto, para que o componente de livro funcione corretamente dentro do componente de gênero, precisamos importar o `LivroComponent` no módulo do gênero literário.

Mas perceba que o *template* do gênero literário ainda está com um erro, porque existe um `input.required` no componente de `livro`. Ou seja, para conseguir utilizar esse componente, precisamos obrigatoriamente passar qual é a informação que vai ser renderizada.

Dentro da classe do `GeneroLiterarioComponent`, vamos acessar um livro do nosso *mock* . Para isso, criamos uma propriedade chamada `livro` que receberá a constante `livro` no índice zero. Isto é, o primeiro livro da lista de livros. Lembre-se de importar a constante `livros` de `mock-livros`.

> `genero-literario.component.ts`:

```typescript hljs
import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})

export class GeneroLiterarioComponent {
  livro = livros[0]
}
Copiar código
```

Voltando para o template do gênero, como vincular essa nova propriedade da classe do `GeneroLiterarioComponent`, que é o primeiro livro do nosso **mock** , com o `LivroComponent`?

Para isso, utilizaremos o *property binding* dentro da tag `<app-livros>`. Entre colchetes, colocamos a *input property* chamada `livro`, que criamos no componente de livro. Em seguida, fazemos um *binding* dessa *input property* com a propriedade do componente de gênero, que também se chama `livro`.

> `genero-literario.component.html`:

```html hljs language-xml
<app-livro [livro]="livro"></app-livro>
Copiar código
```

Dessa forma, conseguimos fazer a comunicação entre um componente pai (gênero literário) e um componente filho (livro).

Dentro do componente filho, criamos a *input property* baseada em *signal* . Enquanto, no componente pai, passamos essa informação para o componente filho através do *property binding* , ou seja, da associação de propriedades. Foi preciso associar a *input property* do componente filho à propriedade que está no componente pai.

## Integrando componente na aplicação

Agora, vamos integrar o componente de gênero literário na vitrine da aplicação. No arquivo `app.component.html`, adicionamos o seletor do `app-genero-literario`, abaixo do `app-lista-livros`.

> `app.component.html`:

```html hljs language-xml
<app-cabecalho></app-cabecalho>
<app-lista-livros></app-lista-livros>
<app-genero-literario></app-genero-literario>
<app-rodape></app-rodape>
Copiar código
```

Posteriormente, esse gênero literário também vai se tornar um filho de lista livros. Mas, por enquanto, vamos deixá-los juntos.

Preciso importar também esse `GeneroLiterarioComponent` no `app.component.ts`. Devemos importá-lo do `genero-literario.component`.

> `app.component.ts`:

```typescript hljs
import { GeneroLiterarioComponent } from './componentes/genero-literario/genero-literario.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ListaLivrosComponent
    ListaLivrosComponent,
    GeneroLiterarioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
Copiar código
```

## Inspecionando árvore de componentes

No navegador, vamos recarregar a aplicação para conferir o resultado. O livro "As ondas" da Virginia Woolf já aparece na seção de "Minhas leituras".

Inclusive, podemos visualizar a árvore de componentes utilizando a [extensão Angular DevTools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh). Basta procurá-la no Chrome Web Store, clicar em "Instalar" e aceitar as permissões.

Com essa extensão instalada, vamos clicar com o botão direito na aplicação e escolher "Inspecionar". Dentre as abas padrões, poderemos encontrar uma nova aba chamada "Angular". Nessa aba da extensão, em "Components", conseguimos visualizar a estrutura dos componentes na aplicação.

No nosso caso, primeiro temos o `app-root`, que é o seletor do componente principal. Depois, estão os componentes que adicionamos na vitrine, como `app-cabecalho`, `app-lista-livros` e `app-genero-literario`, que tem dentro dele o `app-livro`. Por fim, também aparece o `app-rodape`.

Também é possível selecionar qualquer componente para conferir as informações desse componente no painel da parte inferior. Por exemplo, se clicamos no componente `app-livro`, teremos o *input* de `livro` com os dados de autoria, favorito, gênero e mais. Inclusive, se favoritamos esse livro na aplicação, o valor do booleano de `favorito` muda de `false` para `true` imediatamente.

## Próximos passos

Deixaremos uma atividade para explorar mais sobre a extensão Angular DevTools e descobrir como ela pode nos ajudar a entender a estrutura de árvore de componentes no Angular.

Nessa aula, criamos os componente e estabelecemos a comunicação entre eles. Na próxima aula, vamos focar em renderizar os livros em seus gêneros respectivos, além de todos os livros juntos.

# 09**Para saber mais: angular DevTools**


Quer conhecer um pouco mais sobre o Angular DevTools?

Então vem comigo!

## 1. O que é o Angular DevTools?

O Angular DevTools é uma extensão de navegador que facilita o desenvolvimento de aplicações Angular e oferece ferramentas para depuração e análise de performance.

Com essa extensão, você pode inspecionar a estrutura de seus aplicativos, verificar mudanças no estado, e visualizar detalhes de desempenho em tempo real, o que ajuda a criar aplicações mais rápidas e eficientes.

Para instalar o Angular DevTools, acesse o [Chrome Web Store](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh) e clique em "Adicionar ao Chrome" ou se quiser optar pelo navegador Firefox, acesse o [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/angular-devtools/) e adicione a extensão.

Após a instalação da extensão, abra as **ferramentas de desenvolvedor** (DevTools) no seu navegador no **Windows** ou **Linux** , pressione **F12** ou **Ctrl + Shift + I** e no **Mac** , pressione **Fn + F12** ou **Cmd + Option + I** .

Quando as ferramentas de desenvolvedor estiverem abertas, você verá uma nova aba chamada "Angular". Clique nessa aba para acessar todas as funcionalidades oferecidas pelo Angular DevTools, como a visualização de componentes, serviços, módulos e otimização de desempenho.

## 2. Vantagens do Angular DevTools

Veja quais são as vantagens da extensão:

* **Facilidade de depuração:** o Angular DevTools depura e inspeciona o estado dos componentes, serviços e módulos, tudo dentro do navegador;
* **Otimização de desempenho:** através da aba de desempenho, é possível identificar componentes que estão sendo renderizados mais do que o necessário, ajudando na otimização da performance do aplicativo;
* **Visualização em tempo real:** a ferramenta permite ver mudanças no estado dos componentes em tempo real, facilitando o entendimento do comportamento do aplicativo e agilizando o processo de desenvolvimento;
* **Facilidade de uso:** ao integrar-se perfeitamente com as ferramentas de desenvolvedor do navegador, o Angular DevTools não exige configurações complexas e oferece uma interface intuitiva e de fácil navegação.

Caso queira saber mais sobre o Angular DevTools, você pode acessar a [documentação oficial](https://angular.dev/tools/devtools).



# 10**Gerenciamento de tarefas na plataforma checklist**


A plataforma Checklist, que auxilia equipes na gestão de tarefas e checklists, está passando por uma reformulação para melhorar a experiência da pessoa usuária. A equipe de desenvolvimento, da qual você faz parte, decidiu criar componentes distintos para diferentes funcionalidades, como criação de tarefas, visualização de listas e relatórios de progresso. No entanto, há uma preocupação de que a criação de muitos componentes possa tornar o projeto mais difícil de gerenciar.

Qual é a importância de criar componentes distintos para cada funcionalidade na plataforma Checklist?


[ ]Criar componentes distintos para cada funcionalidade é desnecessário, pois um único componente pode ser mais facilmente gerenciado e atualizado, reduzindo a necessidade de coordenação entre diferentes partes do sistema. Além disso, essa abordagem pode simplificar o processo de desenvolvimento ao centralizar todas as funcionalidades em um único local, o que pode parecer mais eficiente em termos de tempo e recursos inicialmente.

[X]Manter a separação de responsabilidades ao criar componentes distintos para cada funcionalidade na plataforma Checklist é importante para garantir a clareza e a eficiência do projeto. Componentes bem definidos permitem que cada parte do sistema seja desenvolvida, testada e mantida de forma independente, o que facilita a identificação e correção de problemas. Além disso, a separação de responsabilidades ajuda a evitar a sobrecarga de um único componente com múltiplas funções, o que poderia aumentar a complexidade e dificultar a manutenção. Ao dividir o projeto em componentes menores e mais gerenciáveis, a equipe pode trabalhar de forma mais colaborativa e eficiente, garantindo que cada funcionalidade seja otimizada para atender às necessidades das pessoas usuárias.

Correta, pois essa abordagem assegura que cada componente tenha uma função clara e específica, facilitando o desenvolvimento, a manutenção e a colaboração dentro da equipe, além de melhorar a experiência da pessoa usuária.


[ ]A separação de responsabilidades é relevante apenas para projetos de grande escala, onde a complexidade do sistema justifica a criação de múltiplos componentes para diferentes funcionalidades.


[ ]Criar componentes distintos é importante apenas para permitir que diferentes equipes trabalhem em paralelo, sem a necessidade de comunicação constante, o que pode levar a um desenvolvimento mais rápido. Além disso, essa abordagem pode ser vista como uma forma de reduzir a dependência entre as equipes, permitindo que cada grupo se concentre em suas tarefas específicas sem interrupções frequentes, o que pode aumentar a produtividade geral do projeto.


# 11 **Faça como eu fiz: crie interfaces e a comunicação entre componentes**


Nesta aula, aprendemos como utilizar **interfaces** para estruturar melhor nossos dados, além de criar uma listagem de livros organizada por gêneros. Também exploramos como utilizar Inputs com **Angular signals** (os sinais do Angular) para a comunicação eficiente entre componentes pai e filho.

Agora é sua vez de praticar! Siga o passo a passo:

* Crie uma interface para representar um livro e um gênero literário;
* Adapte o componente Livro para utilizar a interface;
* Crie um componente de listagem de livros para exibir vários livros;
* Crie um componente de gênero literário para exibir livros agrupados por gênero;
* Utilize Inputs com Signals para passar os dados corretamente entre os componentes.

Abaixo está o passo a passo detalhado de como você pode realizar a atividade!



# 12**O que aprendemos?**



Nesta aula, aprendemos:

* A criar modelos de dados no TypeScript usando interfaces para definir contratos de objetos.
* A implementar tipagem em objetos com a interface `Livro`, melhorando a verificação de tipos.
* A criar componentes Angular para gerenciar listas de itens, promovendo a separação de responsabilidades.
* A importância da comunicação entre componentes Angular para reutilizar funcionalidades e compartilhar dados.
* A separar dados da lógica de apresentação utilizando arquivos de mock.
* A implementação e uso de propriedades de entrada (input property) nos componentes Angular.
