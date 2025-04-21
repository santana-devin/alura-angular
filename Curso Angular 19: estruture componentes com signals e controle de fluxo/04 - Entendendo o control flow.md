# 01 **Projeto da aula anterior**

Caso queira revisar o código até aqui ou começar a partir desse ponto, [faça o donwload](https://github.com/alura-cursos/4455-organo/archive/refs/heads/aula-3.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/4455-organo/tree/aula-3).

# 02 **Agrupando livros por gênero**

Agora que já temos todos os componentes criados e sabemos como ficarão — a lista com os gêneros e, dentro deles, os *cards* —, precisamos criar a lógica para **renderizar** esses gêneros e **agrupar** os livros dentro de cada gênero específico.

Vamos acessar o arquivo `lista-livroscomponent.ts` para desenvolver essa lógica. Dentro do `ListaLivros`, o componente de gênero também receberá essa informação do componente pai (`ListaLivros`). Precisamos de duas estruturas para:

1. Agrupar os gêneros literários.
2. Armazenar pares de chave e valor.

## Agrupando gêneros

Para agrupar os gêneros literários, que pode ser um *array* , podemos criar uma propriedade chamada `generos`, que será do tipo `GeneroLiterario`, um *array* inicializado como vazio.

> `lista-livroscomponent.ts`:

```typescript hljs
export class ListaLivrosComponent {
    generos: GeneroLiterario[] = [];
}
Copiar código
```

## Armazenando chave e valor

Também precisamos de uma estrutura para armazenar pares de chave e valor, onde a chave será o ID do gênero (como romance, mistério, etc.) e o valor será um *array* de livros. Para isso, utilizaremos a estrutura **`Map`** do JavaScript. Podemos criar uma propriedade chamada `livrosPorGenero`, que será do tipo `Map`.

Para esse `Map`, passaremos entre sinais de maior e menor a chave e o valor: a chave será uma `string` (o ID do gênero) e o valor será um *array* de livros.

Vamos inicializar o `map` com `new Map`.

```typescript hljs
export class ListaLivrosComponent {
    generos: GeneroLiterario[] = [];
    livrosPorGenero: Map<string, Livro[]> = new Map();
}
Copiar código
```

Vamos importar a interface `Livro`, clicando na lâmpada azul à esquerda do código e selecionando "update import from '../livro/livro'".

```typescript hljs
import { GeneroLiterario, Livro } from '../livro/livro';
Copiar código
```

## Implementando a lógica no `ngOnInit()`

Agora que temos essa estrutura, precisamos preenchê-la. Queremos que os gêneros e livros sejam agrupados e organizados assim que o componente for carregado. Para isso, utilizaremos um ***hook* do ciclo de vida do Angular, chamado `OnInit`** . Implementaremos a interface `OnInit` na declaração da classe `ListaLivros`.

```typescript hljs
export class ListaLivrosComponent implements OnInit{
    generos: GeneroLiterario[] = [];
    livrosPorGenero: Map<string, Livro[]> = new Map();
}
Copiar código
```

Dentro da classe, usaremos o método `ngOnInit()` para colocar toda a lógica de inicialização, que, neste caso, é a organização dos gêneros. Entre suas chaves, inicializaremos a propriedade `livrosPorGenero` como `new Map`.

```typescript hljs
export class ListaLivrosComponent implements OnInit{
    generos: GeneroLiterario[] = [];
    livrosPorGenero: Map<string, Livro[]> = new Map();
  
    ngOnInit() {  
        this.livrosPorGenero = new Map();
    }
}
Copiar código
```

## Agrupando os livros por gênero

Precisamos iterar por cada livro no nosso *mock* para verificar o gênero e agrupá-lo no gênero respectivo. Para isso, utilizaremos o método `forEach()` a partir de `livros`. Vamos iterar por cada `livro` e criar uma *arrow function* .

Entre as chaves da função, precisamos verificar o gênero do livro. Para guardar essa informação, criaremos uma constante chamada `generoId`, que receberá `livro.genero.id`.

Com essa informação do gênero, verificaremos se `livrosPorGenero` já possui esse ID — se não tiver, *setaremos* essa chave do ID em um *array* . Faremos uma verificação com `if` e adicionaremos uma negação ao `this.livrosPorGenero`, com um ponto de exclamação.

Esse `livrosPorGenero` é um `Map`, portanto, adicionaremos um `.` para utilizar métodos do `Map`, que podem verificar, *setar* , buscar ou limpar informações, pois é uma estrutura de dados completa. No caso, usaremos `has()` para verificar se existe um `generoId`.

Entre as chaves do `if`, setaremos o novo gênero buscado. Adicionaremos `this.livrosPorGenero.set()`, recebendo entre parênteses a chave `generoId` e o valor que será inicialmente um *array* vazio.

Agora, no mapa, já pegamos o gênero do livro e temos as chaves correspondentes aos gêneros dos livros. Precisamos adicionar o livro dentro desse gênero. Para adicionar algo em um *array* , utilizaremos o método `push()`.

Primeiro, coletaremos o `Map` `this.livrosPorGenero`, adicionando um `get()`. Em seguida, selecionaremos o gênero específico dentro do `get()` e aplicaremos o `push()` passando em seu interior o `livro`.

Ao escrever `push` com a ajuda das sugestões do editor, ele adicionará automaticamente um **ponto de interrogação** à esquerda do `.push()`. Isso ocorre, pois haverá um erro se o valor não existir (ou seja, se for *undefined* ). Para evitar isso, utilizamos o **operador de encadeamento opcional** , ou **operador de navegação segura** , que nos protege de erros caso o valor não exista. Se não existir, o `push` não será chamado, evitando o erro.

```typescript hljs
ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
    const generoId = livro.genero.id
    if(!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
    }
    this.livrosPorGenero.get(generoId)?.push(livro)
})
Copiar código
```

Após configurar a chave, pegamos cada chave específica e associamos o livro correspondente a esse gênero.

## Populando o *array* de gêneros

Precisamos agora popular o *array* de gêneros. Dentro do `ngOnInit()`, abaixo do `forEach()`, acessaremos o *array* `this.generos` e passaremos os objetos com nossos gêneros literários.

Passaremos `id` com o valor "romance", `value` com o valor "Romance" e a propriedade `livros`. Para popular, acessamos o `Map` com `this.livrosPorGenero.get("romance")`. Para caso não houver livros com esse gênero, utilizaremos `?? []` para evitar erros.

```typescript hljs
this.generos = [
    {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
    },
]
Copiar código
```

Precisamos popular todos os gêneros restantes. Para agilizar, duplicaremos essa estrutura, passando todos os outros `ids`, `values` e buscando todos os livros referentes a cada gênero. Para verificar no console se funcionou, utilizaremos `console.log(this.livrosPorGenero)` abaixo do *array* .

```typescript hljs
this.generos = [
    {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
    },
    {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get("misterio") ?? []
    },
    {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
    },
    {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
    },
    {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
    },
]

console.log(this.livrosPorGenero)
Copiar código
```

Voltando à página da aplicação no navegador, ao inspecionar pela guia "Console" das *DevTools* , notaremos o `Map` com as entradas para cada gênero, contendo os livros. Por exemplo, no gênero "Romance", temos três títulos; em "Mistério", mais dois títulos, e assim por diante.

```javascript hljs
Map(5)
    0: {"romance" => Array(3)}
        key: "romance"
        value: Array(3)
            0: {titulo: 'As ondas', autoria: 'V'}
            1: {titulo: 'O deserto dos tártaros', autoria: 'B'}
            2: {titulo: 'Moby Dick', autoria: 'H'}
            length: 3
  
            // Código omitido
Copiar código
```

## Conclusão e próximos passos

Conseguimos adicionar a lógica para popular os gêneros e, dentro deles, adicionar os livros respectivos. Agora, precisamos apenas fazer a **comunicação** entre a lista e o gênero para **renderizar** esses livros na tela.

O Angular nos auxilia muito, assim como outros *frameworks* , abstraindo certa complexidade. No entanto, a parte lógica ainda precisa ser implementada.

Utilizamos o `Map`, uma estrutura de dados do JavaScript, conforme a documentação do MDN, que armazena pares de chave e valor. Essa estrutura foi útil para separar os gêneros literários. O `ngOnInit` faz parte do ciclo de vida do Angular. Sempre que quisermos adicionar lógica para ser executada antes do componente ser carregado e renderizado, utilizamos esse *hook* .

> [Acesse a documentação do `Map` no site MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map).

Vamos continuar evoluindo o projeto. Nos encontramos no próximo vídeo.

# 03 **Para saber mais: explorando o ciclo de vida dos componentes no Angular**

Quando você está aprendendo Angular, um dos conceitos mais importantes é o **ciclo de vida dos componentes** .

Pense nos componentes como pequenas partes de um aplicativo que têm uma vida própria. Eles "nascem", "vivem" e "morrem". Entender esse ciclo de vida ajuda você a saber quando e como executar certas ações no seu aplicativo.

## 1. O que é o ciclo de vida dos componentes?

O ciclo de vida de um componente no Angular é uma série de etapas que um componente passa desde o momento em que é criado até o momento em que é destruído.

Durante essas etapas, o Angular oferece algumas "hooks" (ou métodos) que você pode usar para executar código em momentos específicos.

## 2. Principais hooks (“ganchos”) do ciclo de vida

### 2.1. `ngOnInit`

* **O que é?** : É um método que é chamado logo após o componente ser inicializado;
* **Quando usar?** : Use o `ngOnInit` para inicializar dados no componente, como buscar informações de um servidor ou configurar valores iniciais.

**Exemplo** :

```typescript hljs
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-exemplo',
    templateUrl: '<p>Exemplo de componente!</p>'
  })
  export class ExemploComponent implements OnInit {
    dados: string;

    ngOnInit() {
      this.dados = 'Dados carregados!';
      console.log(this.dados);
    }
  }
Copiar código
```

### 2.2. `ngOnDestroy`

* **O que é?** : É um hook chamado logo antes do componente ser destruído;
* **Quando usar?** : Use `ngOnDestroy` para limpar recursos, como cancelar assinaturas de observáveis ou remover ouvintes de eventos;

**Exemplo** :

```typescript hljs
  import { Component, OnDestroy } from '@angular/core';

  @Component({
    selector: 'app-exemplo',
    templateUrl: '<p>Exemplo de componente!</p>'
  })
  export class ExemploComponent implements OnDestroy {

    ngOnDestroy() {
      console.log('Componente será destruído!');
    }
  }
Copiar código
```

Se você deseja se aprofundar mais e conhecer todos os hooks do ciclo de vida de um componente em angular, recomendo explorar a [documentação oficial do Angular sobre o ciclo de vida dos componentes](https://angular.dev/guide/components/lifecycle#).

Você também pode acessar o curso [Angular - ciclo de vida](https://cursos.alura.com.br/course/angular-ciclo-vida) e aprender mais sobre o tema.

# 04 **Organizando tratamentos de spa por popularidade**

A Calmaria Spas, uma plataforma que conecta usuários a experiências de bem-estar e serviços de spas, deseja implementar um recurso que permita às pessoas usuárias visualizar tratamentos de spa organizados por popularidade, como "Mais Reservados", "Recomendados" e "Novidades". A equipe de desenvolvimento precisa criar uma lógica que agrupe os tratamentos em categorias de popularidade e os exiba às pessoas usuárias de forma intuitiva.

Qual abordagem garantiria que os tratamentos sejam agrupados corretamente e exibidos assim que a página de popularidade for carregada?

[ ]Armazenar os tratamentos em um banco de dados com uma coluna para a categoria de popularidade e realizar consultas ao banco de dados cada vez que a página de popularidade for acessada, utilizando índices para tentar otimizar a recuperação dos dados.

[ ]Utilizar um array bidimensional, onde cada sub-array representa uma categoria de popularidade, e preencher esse array durante a renderização da página, integrando funções de ordenação para garantir a disposição correta dos tratamentos.

[X]Utilizar um Map, onde a chave representa a categoria de popularidade e o valor é um array de tratamentos nessa categoria. Inicializar o Map durante o ciclo de vida da página, como no ngOnInit do Angular, para garantir que os tratamentos sejam agrupados e exibidos corretamente.

Correta, pois essa abordagem permite que os tratamentos sejam organizados de forma eficiente em categorias, utilizando um Map para associar cada categoria a um conjunto de tratamentos. A inicialização no ciclo de vida da página assegura que os dados estejam prontos para exibição imediata.

[ ]Criar uma lista única de tratamentos e aplicar filtros dinâmicos no frontend para categorizar os tratamentos conforme a pessoa usuária navega pela página.

Parabéns, você acertou!

Este conteúdo foi útil para o seu aprendizado?

![Ícone de polegar para cima indicando que o conteúdo foi útil para seu aprendizado]()**Sim**

![Ícone de polegar para baixo indicando que o conteúdo não foi útil para seu aprendizado]()

# 06 **Fazendo o control flow com @for**

Agora que já temos a lógica e a organização dos livros dentro dos seus respectivos gêneros, precisamos passar essa informação da lista de livros para o gênero literário.

## Declarando a propriedade de entrada

Para transferir uma informação de um componente pai para um componente filho, ou seja, da lista de livros para o gênero literário, sabemos que o componente filho precisa conseguir receber essa informação. Para isso, precisamos **declarar uma propriedade de entrada** .

Dentro do arquivo `genero-literario.component.ts`, vamos declarar essa propriedade de entrada. Entre as chaves da classe `GeneroLiterario`, declararemos uma propriedade chamada `genero`, que receberá um `input`. Esse `input` será `required` e do tipo `GeneroLiterario`.

> `genero-literario.component.ts`:

```typescript hljs
export class GeneroLiterarioComponent {

    genero = input.required<GeneroLiterario>();
    livro = livros[0]
}
Copiar código
```

Vamos importar a interface `GeneroLiterario` e o `input`.

```typescript hljs
import { Component, input } from '@angular/core';
//Código omitido
import { GeneroLiterario } from '../livro/livro';
Copiar código
```

Com isso, o componente filho já consegue receber essa informação.

## Criando a estrutura de exibição

Na pasta "genero-literario", é possível perceber que criamos o componente de gênero literário, mas o CSS dele está vazio, e no *template* , temos apenas o `app-livro`. Para conseguir renderizar, acessaremos *template* do gênero literário no arquivo HTML para adicionar a estrutura de como será cada um dos gêneros.

Acima do `app-livro`, criaremos uma `section` com a classe "gêneros". Dentro dessa *section* , teremos um `h3` com a classe `texto-h3-prata`. Esse `h3` será o nome do gênero literário. Utilizaremos dentro do `h3` a interpolação para passar o `genero().value` e exibir o nome do gênero.

Abaixo do `h3`, temos uma linha de destaque. Vamos implementá-la adicionando um `span` com as classes `linha-destaque` e `linha-destaque--pequena`.

> `genero-literario.component.html`:

```html hljs language-xml
<section class="generos">
    <h3 class="texto-h3-prata">
        {{genero.value}}
    </h3>
    <span class="linha-destaque linha-destaque--pequena"></span>
</section>
Copiar código
```

Acessando o arquivo CSS do gênero literário, colaremos o código abaixo para estilizar o componente.

> `genero-literario.component.css`:

```css hljs
.generos {
    display: flex;
    flex-direction: column;
    padding: 48px 160px;
}

.livros-genero {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.linha-destaque--pequena {
    width: 32px;
}

.texto-h3-prata {
    font-family: var(--font-prata);
    font-size: 28px;
    font-weight: var(--font-weight-normal);
    line-height: 38px;
    text-align: center;
}
Copiar código
```

## Passando os Gêneros para o Componente Filho

Voltaremos ao `lista-livros.component.html`, onde renderizamos os gêneros. Dentro do *template* , abaixo da `section`, adicionaremos o componente `app-genero-literario` e passamos a *input property* `[genero]`, que receberá a propriedade `genero`.

> `lista-livros.component.html`:

```html hljs language-xml
<app-genero-literario [genero]="genero"></app-genero-literario>
Copiar código
```

No `lista-livros.component.ts`, importaremos o `GeneroLiterarioComponent` entre os colchetes do `imports`, dentro do bloco `@Component`.

> `lista-livros.component.ts`

```typescript hljs
@Component({
    selector: 'app-lista-livros',
    imports: [GeneroLiterarioComponent],
    templateUrl: './lista-livros.component.html',
    styleUrl: './lista-livros.component.css'
})
Copiar código
```

## Iterando sobre a lista de gêneros

No arquivo HTML, continuamos com um erro no *input property* `genero`. Não temos essa propriedade no TS.

Além disso, não queremos renderizar apenas um, mas vários gêneros. Portanto, precisamos iterar sobre todos os gêneros para conseguir renderizar.

No Angular, utilizamos a estrutura `@for()` para iterar sobre uma lista. Assim, conseguimos renderizar cada gênero dinamicamente. Voltando ao HTML, adicionaremos essa estrutura entre a `section` e o `app-genero-literario`.

Entre os parênteses de `@for()`, passaremos `genero of generos`, ponto e vírgula, e a estrutura `track genero`. Também moveremos o componente `app-genero-literario` para entre as chaves do `@for`.

> `lista-livros.component.html`

```html hljs language-xml
@for (genero of generos; track genero) {
    <app-genero-literario [genero]="genero"></app-genero-literario>
}
Copiar código
```

Com isso, associamos a *input property* `genero` ao `genero` sobre o qual estamos iterando.

O uso de `track` passou a ser obrigatório nas versões mais atuais e permite que o Angular detecte mudanças de forma mais eficiente.

## Corrigindo a exibição dos livros

Ao conferir a aplicação no navegador, teremos os gêneros na tela. Contudo, estamos renderizando o mesmo livro para todos os gêneros, pois deixamos fixa a informação de um livro específico dentro do `genero-literario.component.ts`.

Para corrigir isso, removeremos de dentro da classe a linha `livro = livros[0]`, que exibia um único livro.

> `genero-literario.component.ts`:

```typescript hljs
export class GeneroLiterarioComponent {

    genero = input.required<GeneroLiterario>();
}
Copiar código
```

Acessando o HTML de `genero-literario`, utilizaremos a mesma estrutura `@for()` para iterar sobre todos os livros do gênero. Faremos dentro da `section`, em uma nova `div` com a classe `livros-genero`.

Entre os parênteses do `@for()`, passaremos `livro of genero().livros`, referenciando a *input property* de `genero`, e o `track livro`.

> No `track`, podemos passar um ID ou o próprio elemento. Nesse caso, não temos ID.

Por fim, envolveremos o `app-livro` entre as chaves do `@for()`:

```html hljs language-xml
<div class="livros-genero">
    @for (livro of genero().livros; track livro) {
        <app-livro [livro]="livro"></app-livro>
    }
</div>
Copiar código
```

## Ajustando a estrutura

Voltando ao `app-component.html`, removeremos o `app-genero-literario`, pois agora ele já é renderizado dentro da `lista-livros`. Restarão apenas `app-cabecalho`, `app-lista-livros` e `app-rodape`.

> `app-component.html`:

```html hljs language-xml
<app-cabecalho></app-cabecalho>
<app-lista-livros></app-lista-livros>
<app-rodape></app-rodape>
Copiar código
```

No `app-component.ts`, removeremos a importação de `GeneroLiterarioComponent`.

> `app-component.ts`:

```typescript hljs
imports: [
    CabecalhoComponent,
    RodapeComponent,
    ListaLivrosComponent
],
Copiar código
```

Agora, ao testar no navegador, os livros aparecem corretamente agrupados dentro dos seus gêneros específicos. Ao inspecionar a página pelo guia "Angular" do *DevTools* , teremos a seguinte estrutura:

```js hljs language-javascript
app-lista-livros
    app-genero-literario
        app-livro
        app-livro
        app-livro
    app-genero-literario
        app-livro
        app-livro
        app-livro
Copiar código
```

## Conclusão e próximos passos

Com isso, conseguimos realizar a renderização utilizando a nova sintaxe *Control Flow* do Angular. A seguir, continuaremos evoluindo ainda mais o projeto Organo!

# 07 **Preparando o ambiente: código CSS**

No vídeo 4.3, vamos estilizar a imagem e o texto do componente de gênero literário. Para isso, vamos alterar o arquivo `genero-literario.component.css` adicionando o código a seguir:

```css
.sem-livros img {
  width: 150px;
  margin-top: 8px;
  opacity: 0.8;
}

.texto-sem-livros {
  text-align: center;
  margin-top: 16px;
  color: #3b3b3b;
  font-size: 20px;
}
Copiar código
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

# 08 **Control flow com @if**

Conseguimos renderizar os livros dentro dos gêneros literários, o que é muito interessante. No entanto, não sabemos o que acontece caso não haja nenhum livro em um determinado gênero.

Para testar isso, no VS Code, acessaremos o `mock-livros.ts` e comentaremos os dois livros que temos no gênero de Mistério.

> `mock-livros.ts`:

```typescript hljs
// {
//   titulo: 'E não sobrou nenhum',
//   autoria: 'Agatha Christie',
//   imagem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUTEhAWFRUWGBUYGBYXFxYVGhY…
//   genero: {
//     id: 'misterio',
//     value: 'Mistério',
//     livros: []
//   },
//   favorito: false
// },

// Código omitido

// {
//   titulo: 'O médico e o monstro',
//   autoria: 'Robert Louis Stevenson',
//   imagem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgaGhocHBwcGh4cHB4…
//   genero: {
//     id: 'misterio',
//     value: 'Mistério',
//     livros: []
//   },
//   favorito: false
// },
Copiar código
```

Vamos verificar como isso se apresenta na aplicação. Ao voltar para o navegador, no gênero de Mistério, não há nada, resultando em um espaço vazio abaixo do título.

## Lidando com a ausência de livros

Pensando na experiência da pessoa usuária, seria mais adequado **fornecer alguma informação para esclarecer que esse gênero não possui livros** , evitando que a pessoa usuária pense que se trata de um erro.

Afinal, se não houver nenhum livro, a pessoa pode achar que é um *bug* e sair da aplicação, quando apenas não há livros cadastrados ainda. Como podemos melhorar essa usabilidade?

## Utilizando o `@if` para exibir uma mensagem

Voltando ao VS Code, podemos utilizar outra estrutura do *Control Flow* do Angular. No *template* `genero-literario.component.html`, onde estamos renderizando os livros, já utilizamos o `@for`, e agora podemos usar uma estrutura para renderização condicional, o `@if`. Essa estrutura é semelhante ao `if` comum na programação, mas no Angular usamos a sintaxe diferente.

Criaremos essa condicional acima da `div` que contém o `@for`. Entre parênteses, estabeleceremos que, se `genero.livros.length` for igual a zero, renderizaremos uma mensagem e uma imagem informando que ainda não há livros nesse gênero.

Para imagem, criaremos uma `div` com a classe `texto-sem-livros` entre as chaves do `@if`. Dentro dessa `div`, colocaremos um `img`.

> `genero-literario.component.html`:

```html hljs language-xml
@if(genero().livros.length === 0) {
    <div class="texto-sem-livros">
        <img >
    </div>
}
Copiar código
```

Dentro da *tag* `img`, utilizaremos a seguinte imagem, com o nome `sem-livros.png`:

![Três livros empilhados, cada um com diferentes cores de capa: o livro no topo é roxo, o do meio é branco com detalhes amarelos, e o de baixo é laranja. Na frente dos livros, há uma lupa azul inclinada para a direita.](https://cdn1.gnarususercontent.com.br/1/795715/d4289be0-2c2f-4c59-90d6-1442607ea054.png)> [Baixe a imagem `sem-livros.png`](https://github.com/nayannelbatista/4455-organo/blob/aula-4/public/sem-livros.png).

Arrastaremos essa imagem a partir da janela do explorador do computador até a pasta "public", no explorador lateral do VS Code. No atributo `scr` da `img`, passaremos o caminho da imagem (`sem-livros.png`). No atributo `alt`, colocaremos o texto "Sem livros neste gênero":

Abaixo da imagem, adicionaremos um parágrafo com a frase "Não há livros neste gênero ainda":

```html hljs language-xml
@if(genero().livros.length === 0) {
    <div class="texto-sem-livros">
        <img src="sem-livros.png" alt="Sem livros neste gênero">
        <p>Não há livros neste gênero ainda</p>
    </div>
}
Copiar código
```

## Ajustando o layout para uma melhor experiência

Voltando na aplicação pelo navegador, temos a imagem e a mensagem aparecendo na categoria "Mistério". Falta apenas adicionar o CSS no gênero literário, mas já vimos como fazer isso.

Utilizaremos o *Control Flow* do Angular. Assim como `@if` e `@for`, temos outras estruturas de controle para realizar essa renderização e interação de forma condicional.

Acessando o `genero-literario.component.css`, vamos corrigi-lo. No final do arquivo, adicionaremos os seletores das novas classes: `sem-livros img` e `texto-sem-livros` para ajustar a imagem e o texto do parágrafo:

> `genero-literario.component.css`:

```css hljs
.sem-livros img {
    width: 150px;
    margin-top: 8px;
    opacity: 0.8;
}

.texto-sem-livros {
    text-align: center;
    margin-top: 16px;
    color: #3b3b3b;
    font-size: 20px;
}
Copiar código
```

Voltando na aplicação, temos a imagem e a mensagem centralizadas na página.

## Revisando conceitos

Vamos recapitular os conceitos que acabamos de aprender com uma analogia. No nosso contexto, **se** instalamos o Angular CLI no início do curso, pudemos criar o projeto e dar prosseguimento. Caso contrário, **se não** instalamos, não criamos o projeto.

Essa estrutura condicional de "se" e "se não" está presente no Angular com o **`@if`** . O `@if` faz parte do *Control Flow* , a nova sintaxe de *template* do Angular. Anteriormente, em alguns projetos, utilizávamos o asterisco `*ngIf`. Agora, a nova abordagem é o `@if`.

Usando outra analogia, imagine que chegamos em uma reunião e o local está vazio, sem nenhum aviso. É provável que saiamos da sala, e isso também aconteceria com uma pessoa usuária em uma aplicação que não carrega e não exibe nenhum aviso.

Além do `@if`, conhecemos o **`@for`** , que serve para mostrar vários elementos com a mesma estrutura básica, como fizemos com os *cards* de livros, postagens em redes sociais e diversos outros casos.

## Conclusão e próximos passos

Estamos prestes a finalizar nossa aplicação. Faltam alguns detalhes do layout, que finalizaremos a seguir.

# 09 **Melhorando a usabilidade na plataforma Zoop**


A Zoop, uma plataforma de e-commerce, está sempre buscando melhorar a experiência de seus usuários. Recentemente, a equipe de desenvolvimento, da qual você faz parte, identificou que quando um vendedor não possui produtos cadastrados em uma determinada categoria, a página exibe apenas um espaço vazio. Isso tem gerado confusão entre os usuários, que muitas vezes acreditam que se trata de um erro no sistema.

Como você poderia melhorar a usabilidade da plataforma, utilizando recursos do Angular, para garantir que os usuários entendam que a ausência de produtos é intencional e não um bug?


[ ]Deixar a página como está, mas adicionar um botão de feedback para que os usuários possam relatar o problema de ausência de produtos, e incluir uma seção de perguntas frequentes que explique por que uma categoria pode não ter produtos listados, oferecendo também um formulário de contato para suporte adicional.

[X]Implementar uma renderização condicional utilizando uma estrutura de controle como o @if do Angular para verificar se a lista de produtos está vazia e, nesse caso, exibir uma mensagem informativa e uma imagem indicando que não há produtos disponíveis na categoria.

Correta, pois essa abordagem utiliza a renderização condicional para informar claramente aos usuários que a ausência de produtos é intencional, melhorando a usabilidade e evitando confusões.


[ ]Criar uma lista de produtos fictícios para preencher a categoria, garantindo que a página nunca fique vazia, e adicionar uma nota explicativa que informe que os produtos são apenas exemplos e que os vendedores podem adicionar seus próprios produtos a qualquer momento.


[ ]Adicionar um alerta pop-up que aparece sempre que uma categoria sem produtos é acessada, informando que não há produtos disponíveis no momento, e incluir uma breve explicação sobre como os vendedores podem adicionar novos produtos à categoria, além de oferecer um link para o guia de ajuda da plataforma.


# 10 **Faça como eu fiz: renderize livros por gênero com @for e @if**

Nesta aula, aprendemos como organizar e exibir livros por gênero literário utilizando estruturas de controle no Angular, como @for para iterar sobre a lista e @if para exibir mensagens quando não houver livros em um gênero específico.

Agora é sua vez de praticar! Siga o passo a passo:

* Agrupe os livros por gênero utilizando um Map;
* Utilize o @for para iterar sobre os gêneros e exibir seus livros dinamicamente;
* Implemente o @if para exibir uma mensagem quando um gênero não tiver livros;
* Estilize a exibição dos gêneros e livros.

Abaixo está o passo a passo detalhado de como você pode realizar a atividade!



# 11 **O que aprendemos?**


Nesta aula, aprendemos:

* Utilizar a estrutura de dados Map em JavaScript para armazenar pares de chave e valor.
* Utilizar o hook OnInit no Angular para inicializar lógica antes da renderização de um componente.
* Implementar lógica de iteração sobre coleções de dados com o método forEach.
* Usar operadores de encadeamento opcional e coalescência nula para manipulação segura de dados.
* Transferir dados de um componente pai para filho no Angular por meio de input properties.
* Iterar sobre listas no Angular usando a diretiva `@for` e a necessidade do `track`.
* Implementar a renderização condicional usando `@if` no Angular.
* Aplicar CSS para estilizar componentes e ajustar a apresentação de elementos.
