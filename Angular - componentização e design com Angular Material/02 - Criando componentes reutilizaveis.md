# 01 **Projeto da aula anterior**

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na aula anterior, para [baixá-lo clique neste link](https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-1.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-1).

# 02 **Banner**

**Nayanne:** Olá! Na aula anterior começamos o processo de componentização e já codamos o cabeçalho. E o Vinny já trouxe um spoiler do que faremos nesta aula.

**Vinícios:** Isso aí. Estamos seguindo a lógica do Figma. Começamos a desenvolver do header, que está lá em cima. Seguindo essa lógica, o próximo componente será o banner.

**Nayanne:** Isso mesmo! Vamos acessar o VS Code e abrir os arquivos `banner.component.scss` e `banner.component.html` que estão na pasta "app > shared > banner".

No `banner.component.html`, vamos apagar o parágrafo da linha 1 e criar uma div na qual passaremos a imagem do banner.

```xml
<div>
  <img src="assets/imagens/banner-homepage.png"
  alt="Banner da Aplicação Jornada"> 
</div>
Copiar código
```

**Vinícios:** Já pedimos os assets, as imagens estáticas que usaremos no nosso projeto. E o banner que será utilizado na aplicação, ficou um pouco diferente da versão que foi aprovada no layout. Então, essa troca de assets, essas imagens diferentes entre o que temos na aplicação e o que tem no Figma é uma coisa muito comum que pode acontecer no nosso dia a dia.

**Nayanne:** Verdade. Já adicionamos o caminho da imagem. Agora, para conseguirmos ver o banner na tela, acessaremos o arquivo `app.component.html` e, abaixo do header, vamos inserir o seletor do banner.

```xml
<app-header></app-header>
<app-banner></app-banner>
Copiar código
```

Pronto! Podemos acessar a aplicação e checar o resultado no navegador. O banner está aparecendo na tela.

**Vinícios:** E ele funciona para todas as resoluções? Se diminuirmos a largura da nossa tela, como será o comportamento do banner?

**Nayanne:** Estou diminuindo a tela, mas a imagem do banner não está acompanhando, ela está fixa.

**Vinícios:** Vamos resolver isso?

**Nayanne:** Vamos lá. Para resolver isso, vamos voltar para o `banner.component.html` e adicionar uma classe chamada "banner".

```javascript
<div class="banner">
  <img 
    src="assets/imagens/banner-homepage.png"
  alt="Banner da Aplicação Jornada"> 
</div>
Copiar código
```

**Vinícios:** Estamos usando uma div, que é a nossa "caixa" ou contêiner que segura uma imagem dentro dele.

Se quisermos dar um pouco mais de semântica e usar o poder do HTML 5 e das novas tags, poderíamos trocar essa div por uma tag chamada `<figure>`, que é responsável por guardar uma imagem dentro dela.

**Nayanne:** Ótima dica Vini! Vamos fazer isso para ficar mais semântico.

```javascript
<figure class="banner">
  <img 
    src="assets/imagens/banner-homepage.png"
  alt="Banner da Aplicação Jornada"> 
</figure>
Copiar código
```

Vamos estilizar essa `figure` no `banner.component.scss`. Passaremos uma imagem e adicionaremos uma largura máxima de 100% para deixar responsivo.

```css
figure {
  img {
      max-width: 100%;
    }
}
Copiar código
```

**Vinícios:** Agora, vamos analisar a imagem no navegador. Ficou responsiva, mas agora essa imagem tem uma margem lateral um pouco maior e uma margem superior um pouco menor. Acho que podemos tirar todas as margens dessa tag `<figure>`. É uma boa ideia?

**Nayanne:** Sim. No CSS vamos passar margem 0.

```css
figure {
  margin: 0;
  img {
      max-width: 100%;
    }
}
Copiar código
```

De volta à aplicação no navegador, ficou bem melhor e está funcionando como queremos ao diminuir a largura.

**Vinícios:** Maravilha. Está tudo funcionando e agora temos um pouco mais de semântica.

**Nayanne:** Vini, de volta ao código HTML do banner, nós passamos a imagem de forma fixa. Mas a ideia de criarmos os componentes é justamente conseguirmos reutilizar. Como podemos reutilizar essa imagem? Na verdade, queremos que esse caminho e esse `alt` sejam recebidos de fora. Precisamos fazer uma mudança no `src` e no `alt`.

**Vinícios:** Sim! Seria interessante se quem está consumindo esse componente de banner pudesse indicar qual é o caminho para a imagem. Assim mantemos o comportamento, porém ele fica dinâmico o suficiente para poder trocar o banner.

**Nayanne:** Para termos esse comportamento, vamos apagar o `src` e `alt` fixos e utilizaremos a interpolação do Angular, com a sintaxe das chaves duplas. Essas propriedades serão recebidas de um componente que vai utilizar o banner.

Lembrando que é uma boa prática na interpolação deixar um espaço antes e depois para facilitar a legibilidade.

```javascript
<figure class="banner">
  <img 
    src="{{ src }}"
    alt="{{ alt }}">
</figure>
Copiar código
```

Estamos recebendo um erro no `src` e no `alt` porque ainda não temos essas propriedades criadas no componente. Vamos criá-las no `banner.component.ts`. As duas serão como string e iniciaremos com strings vazias.

```typescript
export class BannerComponent {
  src: string = '';
  alt: string = '';
}
Copiar código
```

**Nayanne:** Será que isso já é o suficiente?

**Vinícios:** Não. Nós ainda precisamos indicar para o Angular que esses valores serão recebidos via atributo.

**Nayanne:** Isso mesmo. E o jeito que o Angular faz isso é utilizando um decorator chamado `@Input()`. Isso vai sinalizar para o Angular que essa é uma propriedade de **entrada**, que esses valores serão recebidos e injetados nesse componente.

```kotlin
export class BannerComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
Copiar código
```

**Vinícios:** Note que o VS Code importou automaticamente o Input do pacote `@angular/core`.

```kotlin
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
Copiar código
```

**Nayanne:** Pronto! Dessa forma conseguiremos receber essas propriedades de fora.

Agora, ao acessar o navegador não teremos mais a imagem do banner, porque tiramos o caminho fixo dela do componente.

Esse é um bom momento para começarmos a pensar em como montar a nossa página inicial. Porque, quando criamos a primeira estrutura de componentes, não criamos uma pasta para conter nossas páginas.

**Vinícios:** Sim! Podemos começar pela página inicial mesmo. Como vamos fazer essa estrutura de pastas? Onde vai ficar o componente que representa uma página?

**Nayanne:** Dentro da pasta "app", podemos criar uma nova pasta chamada "pages" e dentro desta criar a pasta "home". O que você acha?

**Vinícios:** Acho que dessa forma fica bem explícito para outras pessoas que forem desenvolver esse projeto que temos uma pasta só para as nossas páginas e o nome da página estará relacionado com a rota da aplicação.

**Nayanne:** Isso mesmo. Posteriormente, dentro da pasta "pages", vamos inserir as páginas de busca, de cadastro e login. Mas isso é mais adiante.

**Vinícios:** Isso mesmo. Agora estamos prontos para preparar a página inicial. Continuaremos no próximo vídeo.

# 03 **Criando um componente flexível**

Imagine que você faz parte da equipe de desenvolvimento da aplicação "Jornada Milhas" e está desenvolvendo um novo componente de card que será reutilizado em diferentes páginas e esse card precisa estar preparado para exibir imagens específicas de cada destino.

Esse card precisa receber dinamicamente a URL da imagem e um texto alternativo para cada destino exibido. Precisamos criar o componente "CardDeDestino" de forma que ele seja flexível para receber esses dados do componente pai em cada situação. Para resolver isso, você cria o componente "CardDeDestino" e adiciona as variáveis de `fonteImagem` e `textoAlternativo`, onde utiliza o decorador @Input() para definir que elas serão preenchidas pelo componente pai, escrevendo o seguinte código no arquivo `.ts`:

```kotlin
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-de-destino',
  templateUrl: './card-de-destino.component.html',
  styleUrls: ['./card-de-destino.component.css']
})

export class CardDeDestino {
  @Input() fonteImagem: string = '';
  @Input() textoAlternativo: string = '';
}
Copiar código
```

Para que essa estratégia funcionasse, você implementou no template do componente pai o seguinte código, que deveria criar um novo card de destino com a imagem e texto alternativo passados para ele:

```xml
<app-card-de-destino fonteImagem="assets/imagem.png" textoAlternativo="texto alternativo"><app-card-de-destino>
Copiar código
```

No entanto, essa implementação falhou, pois ainda faltava um passo: criar o código do template do componente “CardDeDestino”, para que ele consiga exibir o endereço da imagem e o texto alternativo que foram recebidos do componente pai.

Avalie as alternativas e identifique quais implementações do código do template do "CardDeDestino" cumprem essa função corretamente:

[ ]

```xml
    <div>
      <img src="{{ src }}" alt="{{ alt }}">
    </div>
```

[X]

```xml
<div>
  <img [src]="fonteImagem" [alt]="textoAlternativo">
</div>
```

Essa é uma implementação correta utilizando property binding. Ao utilizar a sintaxe `[ ]`, estamos atribuindo dinamicamente os valores das propriedades `fonteImagem` e `textoAlternativo` do component às propriedades `src` e `alt` da tag `<img>`.

[ ]

```xml
<div>
  <img src="fonteImagem" alt="textoAlternativo">
</div>
```

[X]

```xml
    <div>
      <img src="{{ fonteImagem }}" alt="{{ textoAlternativo }}">
    </div>
```

Utilizando a sintaxe `{{ }}`, fazemos a interpolação das propriedades `fonteImagem` e `textoAlternativo` nos atributos `src` e `alt` da tag `<img>`, respectivamente. Dessa forma, os valores definidos no componente pai serão exibidos dinamicamente no card de destino, garantindo que a imagem e o texto alternativo sejam renderizados corretamente.

# 04 **Preparando o ambiente**

Na próxima aula, vamos construir um novo componente e utilizaremos o código à seguir para a estilização:

```css
:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
Copiar código
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

# 05 **Criando um container**

**Nayanne:** Daremos continuidade ao desenvolvimento dos componentes. Nosso próximo requisito é a aplicação de um contêiner flexível que consiga envolver diversos tipos de conteúdo.

**Vinícios:** No Figma, podemos ver que na página inicial temos uma contenção. O miolo da nossa página está contido, não pega 100% da nossa tela. Então, nosso objetivo agora é criar essa contenção com um contêiner.

**Nayanne:** Exatamente. O problema, quando vamos criar um contêiner, é que não sabemos previamente qual será o conteúdo inserido nele. Mas o Angular tem uma solução para isso.

No VS Code, vamos criar esse componente dentro da pasta "shared". Podemos parar a aplicação abrindo o terminal e executando o comando "Ctrl + C". EM seguida, criaremos a pasta com o seguinte comando:

```bash
ng g c shared/container
Copiar código
```

Após executar esse comando, podemos executar a aplicação novamente com o comando:

```undefined
ng server
Copiar código
```

Podemos acessar o HTML do container, `container.component.html`.

Usaremos a diretiva `ng-content`, que permite a criação de pontos de inserção de conteúdo dinâmico em diversos tipos de componentes.

Podemos explicar isso de outra forma. Vinny, você costuma acumular potes de plástico na sua casa?

**Vinícios:** Claro. Inclusive, guardo os de sorvete para compartilhar com as visitas. Porque quando emprestamos um pote de plástico, ele nunca é devolvido.

**Nayanne:** Podemos fazer um paralelo que o `ng-content` é como um pote. Porque todos os elementos que colocamos dentro de um pote adquirem o formato do recipiente. Da mesma forma, o conteúdo que inserirmos dentro do `ng-content`, no nosso caso, do contêiner, esse componentes vão adquirir as propriedades visuais e o estilo desse componente contêiner. Para isso, precisaremos estilizar o contêiner.

## Estilizando o Contêiner

Vamos acessar o `container.component.scss` e colocaremos o estilo com o seletor `host`. Esse seletor vai aplicar esse estilo no componente de fora e não nos elementos internos.

```css
:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
Copiar código
```

**Vinícios:** Exatamente. Estamos fazendo um seletor que vai selecionar o hospedeiro, vai pegar a parte de fora desse componente. Definimos o `display: block`, a margem `0 auto` vai centralizar ele no meio da tela, horizontalmente. Ele vai ter um tamanho de no máximo 1048 pixels, pegamos esse número do Figma. E a largura dele será de 90%.

Então, quando a tela for maior que 1048px, ele vai ficar contido ali no centro. E se a tela for menor, terá 5% de cada lado, que é justamente a margem `0 auto` centralizando ele na tela.

**Nayanne:** Para testar isso, poderíamos inserir o seletor do contêiner no `app.component.html`. Mas como estamos ficando com vários componentes dentro do HTML, podemos começar a montar a nossa homepage.

**Vinícios:** Seria uma boa trazermos a estrutura e o roteamento dessa página para a nossa aplicação.

**Nayanne:** Isso mesmo. Nós já temos uma pasta chamada "pages" e, dentro dela, a "home". Vamos criar nessa pasta o componente home. No terminal, podemos parar a aplicação e executar o comando:

```bash
ng c g pages/home
Copiar código
```

Pronto. Nosso componente home foi criado. Podemos voltar a executar a aplicação com o comando `ng serve`.

Dentro da `home.component.html`, colocaremos o seletor do banner.

No `app.component.html`, podemos deixar o seletor do cabeçalho fixo porque ele deve aparecer em todas as telas da aplicação.

Quando codamos o componente de banner precisamos passar duas informações sobre a imagem, passaremos aqui também. O código de `home.component.html` ficará assim:

```xml
  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
Copiar código
```

Vamos salvar e verificar como está a página no navegador.

Ainda está aparecendo apenas o cabeçalho.

**Vinícios:** Faltou indicarmos para o roteador que queremos que essa página que acabamos de criar seja renderizada na rota inicial da aplicação.

**Nayanne:** Isso mesmo! Precisamos informar ao Angular como ele vai fazer isso.

No `app.component.html`, adicionaremos uma diretiva chamada `router-outlet`. Essa diretiva é um espaço reservado no qual o Angular vai carregar dinamicamente os componentes de acordo com as configurações de rota que passarmos.

```xml
<app-header></app-header>
<router-outlet></router-outlet>
Copiar código
```

Essas configurações de rota ficarão no `arquivo app-routing.module.ts`.

Esse arquivo possui, por padrão, a constante de rotas, `const routes`. Vamos passar para ela os objetos com todas as rotas da nossa aplicação.

Para configurar a rota, precisamos passar duas propriedades: `path` (caminho) e `component`.

```css
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
Copiar código
```

No nosso caso o *path* será uma string vazia, porque quando alguém acessar o `localhost:4200` queremos que essa pessoa acesse a página inicial. O componente será `HomeComponent`.

Agora, se acessarmos a aplicação no navegador, está aparecendo o cabeçalho e o banner.

Daqui em diante, à medida que incrementarmos a nossa página inicial, será renderizado na nossa página.

**Vinícios:** Nós podemos trazer o app container para dentro da página inicial e tentar testar para verificar se está funcionando?

**Nayanne:** Boa. Vamos fazer isso. na linha 5 do `home.component.html` vamos inserir o seletor do `app-container` e colocar dentro dele uma tag H1 para testar.

```xml
  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <h1>HOME</h1>
    </app-container> 
Copiar código
```

De volta à aplicação, apareceu na página o título H1 de "HOME". Já estamos formando a nossa homepage!

**Vinícios:** Neste vídeo conseguimos juntar todas as peças que já criamos. Nosso "quebra-cabeça" está começando a mostrar alguma imagem. Estamos prontos para os próximos passos.

## Desafio: criar o componente de rodapé (footer)

**Nayanne:** Agora, que já criamos o app-container, está na hora de passar um desafio aos estudantes.

Que tal você colocar em prática os conhecimentos que estamos passando e criar o componente de rodapé (footer)?

**Vinícios:** Agora é a hora de você praticar para ajudar a fixar todo esse conhecimento que absorvemos até agora!

Você pode reaproveitar algumas coisas que já fizemos. É a sua missão deixar o *footer* pronto para nossa aplicação ficar bonitona!

# 06 **Componente container**

Você está trabalhando como dev e a equipe decidiu criar um container flexível que possa envolver e aplicar um estilo específico em todos os componentes da aplicação, visando garantir consistência visual e facilitar a manutenção do código.

Para resolver esse desafio, você criou o componente "Container" que terá a responsabilidade de envolver os outros componentes da aplicação e aplicar o estilo desejado. No arquivo "container.component.html", você adicionou a diretiva `ng-content`, com o seguinte resultado:

```css
<ng-content></ng-content>
Copiar código
```

No arquivo CSS, adicionou o estilo que deve ser aplicado a todos os componentes da aplicação que forem envolvidos pelo container:

```css
:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
Copiar código
```

Agora, solicitaram que você adicionasse esse container ao componente `header`(cabeçalho), para que o seu estilo se tornasse padronizado de acordo com o estilo do container.

Considerando os códigos do`header`:

**HTML**

```javascript
<header class="app-header">
  <mat-toolbar>
      <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
      <span class="spacer"></span>
      <button mat-button>Vender milhas</button>
      <button mat-button>Sobre</button>
      <button mat-raised-button color="primary">Cadastre-se</button>
      <button mat-stroked-button>Login</button>
  </mat-toolbar>
</header>
Copiar código
```

**CSS**

```css
.app-header {
  background-color: black;
  button {
    margin: 0 16px;
  }

  .spacer {
    flex: 1 1 auto;
  }

  .mat-toolbar {
    background-color: black;
    color: white;
  }

  .mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
  }
}
Copiar código
```

Assinale a alternativa que apresenta a implementação correta do container no `header` para que ele consiga herdar os estilos padrão:

[ ]

```xml
<ng-content>
  <header class="app-header">
    <mat-toolbar>
      <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
      <span class="spacer"></span>
      <button mat-button>Vender milhas</button>
      <button mat-button>Sobre</button>
      <button mat-raised-button color="primary">Cadastre-se</button>
      <button mat-stroked-button>Login</button>
    </mat-toolbar>
  </header>
</ng-content>
```

[X]

```javascript
<header class="app-header">
  <app-container>
  <mat-toolbar>
      <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
      <span class="spacer"></span>
      <button mat-button>Vender milhas</button>
      <button mat-button>Sobre</button>
      <button mat-raised-button color="primary">Cadastre-se</button>
      <button mat-stroked-button>Login</button>
  </mat-toolbar>
</app-container>
</header>
```

O conteúdo do header foi envolvido pelo componente app-container que está utilizando a diretiva ng-content. Dessa forma, o estilo definido no `:host` do componente container será aplicado corretamente aos elementos do header.[ ]

```xml
<header class="app-header">
  <app-container>
    <ng-content></ng-content>
  </app-container>
</header>
```

Embora o componente `header` tenha sido envolvido pelo componente `app-container`, a diretiva `ng-content` foi colocada dentro da tag de `app-container`. Essa diretiva deve ser usada dentro do template de `app-container`, apenas. Aqui no `header`, o que precisa ser passado é o conteúdo que vai ser injetado que `app-container` espera receber.

# 07 **Para saber mais: uso do ng-content para mais de um conteúdo**

## O `<ng-content>`

O ng-content é uma diretiva do Angular que permite a criação de componentes flexíveis e reutilizáveis, capazes de receber e exibir conteúdo dinâmico. É uma ferramenta poderosa para criar componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo.

## Uso do `<ng-content>` para múltiplas injeções de conteúdo

Ao criar componentes reutilizáveis, muitas vezes é necessário injetar diferentes tipos de conteúdo em posições específicas. Por exemplo, em um componente de layout, você pode ter a necessidade de inserir um cabeçalho, um corpo e um rodapé. O desafio é como permitir que esses conteúdos sejam inseridos de forma flexível, sem a necessidade de criar múltiplas propriedades de entrada.

## Controlando o conteúdo injetado com o `select`

O seletor `select` é usado em conjunto com o ng-content para especificar quais elementos serão inseridos em cada ponto de inserção. Ele permite filtrar os elementos que serão injetados em um determinado ponto de inserção, fornecendo maior controle sobre a estrutura e o estilo do componente.

Exemplo:

Suponha que você está criando um componente chamado `<app-home>` que possui dois pontos de inserção de conteúdo: título e conteúdo. Você pode utilizar o `select` para especificar quais elementos serão inseridos em cada ponto de inserção. Veja o exemplo abaixo:

```html
<app-home>
    <div class=”titulo”>
      <h1>Título </h1>
    </div>
    <div class=”conteudo”>
      <p>Conteúdo…</p>
    </div>
</app-home>
Copiar código
```

Acima, criamos o template de `<app-home>` com o título e conteúdo que devem ser padronizados.

Em seguida, passamos no template do container o `ng-content` com o `select` para injetar o conteúdo nos pontos de inserção conforme desejarmos:

```html
<ng-content select=".titulo"></ng-content>
<div class="content-body">
  <ng-content select=".conteudo"></ng-content>
</div>
Copiar código
```

Nesse exemplo, o conteúdo dentro do elemento com a classe `titulo` será injetado no primeiro ponto de inserção `<ng-content select=".titulo"></ng-content>`, enquanto o conteúdo dentro do elemento com a classe `conteudo` será injetado no segundo ponto de inserção `<ng-content select=".conteudo"></ng-content>`. Dessa forma, você tem controle total sobre quais elementos são injetados em cada ponto específico do componente.

## Fechamento uso ng-content

O ng-content é uma ferramenta poderosa no desenvolvimento de componentes reutilizáveis e flexíveis. Ele permite que você crie componentes genéricos que podem se adaptar a diferentes necessidades de conteúdo, proporcionando maior controle sobre a estrutura e o estilo. Ao usar o `ng-content` em conjunto com o `select`, você pode criar componentes altamente customizáveis, capazes de receber e exibir múltiplos tipos de conteúdo de forma dinâmica.

# 08 **Desafio: crie o footer da aplicação**

Agora que você aprendeu a criar componentes reutilizáveis e um container que recebe conteúdo dinamicamente através da diretiva `ng-content`, está na hora de colocar esses conhecimentos em prática!

O seu desafio será criar o rodapé da aplicação Jornada Milhas, observando a estilização e os cuidados para que esse componente fique otimizado e fiel ao design do Figma.

# 09 **Criando um card reaproveitável**

**Nayanne:** Vamos continuar codando, porque temos prazo para entregar.

Conferindo no Figma, o que falta na nossa homepage é o formulário de busca e os cards, tanto os de promoções quanto os de depoimentos.

Como o formulário de busca é um pouco mais complexo, acho uma boa ideia começarmos pelo card. Até porque já temos o componente na pasta "shared".

Analisando o Figma podemos perceber que existem cards com tamanhos e colorações diferentes, alguns cards possuem background cinza e outros têm background lilás. Precisamos criar um card reutilizável que possa ter essas diferentes variações.

No VS Code, vamos abrir os arquivos `card.component.scss` e `card.component.html`.

No HTML criaremos uma div classe card. Para conseguirmos passar diferentes variações, utilizaremos a diretiva `ngClass`, que será responsável por fazer a estilização condicional. Associaremos essa diretiva a uma variável que chamaremos de `variant`.

O conteúdo passado para dentro desse card será dinâmico, então usaremos a diretiva `ng-content`.

```xml
<div class="card" [ngClass]="variant">
  <ng-content></ng-content>
</div>
Copiar código
```

Agora, vamos criar a variável `variant` no `card.component.ts`. Ela será uma propriedade de entrada, então vamos adicionar o *decorator* `@Input()`.

Por enquanto, temos duas variações dos cards, podemos passar essas duas possibilidades como valor para `variant`. Passaremos entre aspas simples primary, adicionar uma barra vertical (*pipe*) e passar a variação `secondary`.

O caractere da barra vertical (*pipe*) faz parte de um recurso do TypeScript chamado Union Types, com ela vamos indicar que a variante terá um valor ou outro valor. Além disso, podemos passar um valor inicial padrão, que será o `primary`.

```kotlin
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary'
}
Copiar código
```

Em seguida, acessaremos o CSS para cordar os estilos. No `card.component.scss` passaremos um padding de 24px e estilizaremos as diferentes classes do `ngClass`. Para isso, usaremos `&` seguido de ponto e passaremos o nome da classe, `&.primary`.

Isso significa que os estilos que colocarmos dentro desse bloco serão aplicados aos elementos que possuem a classe `card` e também a classe `primary`.

```css
.card {
  padding: 24px;
  &.primary {
  
  }
}
Copiar código
```

Vamos verificar quais são as especificações dos estilos de card no Figma. Em seguida, faremos o mesmo para a classe `secondary`, que terá o estilo do formulário de busca com fundo cinza. Nosso código ficará assim:

```css
.card {
  padding: 24px;
  &.primary {
    background: #FEF7FF;
    border: 1px solid #CAC4D0;
    border-radius: 12px;
  }
  &.secondary {
    background: #F5F5F5;
    border-radius: 16px;
  }
}
Copiar código
```

**Vinícios:** Recapitulando, nós reutilizamos o `ng-content` para renderizar tudo que estiver dentro do card. E combinamos várias coisas diferentes.

Nós tipamos o input `variant`, dizendo que o card deve ser primário ou secundário.

**Nayanne:** Isso mesmo! E mais adiante, se tivermos outros cards podemos adicionar mais variações. Isso ajuda na reutilização desse componente.

Neste vídeo, nós criamos um card reutilizável e no próximo vídeo continuaremos a criação de componentes!

# 10 **Card de busca**

**Nayanne:** Neste vídeo, criaremos o card de busca, que tem uma imagem, o local, preço da passagem e um botão "Ver detalhes".

Para isso, no VS Code, criaremos um novo componente dentro da pasta "shared". Vamos abrir o terminal e parar a aplicação com "Ctrl + C". Em seguida executaremos o comando:

```bash
ng gc shared/card-busca
Copiar código
```

Após criar o componente, podemos executar a aplicação novamente com `ng serve`.

Agora, vamos acessar o [Angular Material](https://material.angular.io/components/card/overview) e analisar a seção do componente card.

Nos [exemplos do Angular Material](https://material.angular.io/components/card/examples), no "Card with multiple sections", podemos ver um componente bem parecido com o da nossa aplicação. O card do exemplo tem uma imagem, descrição e alguns botões de ação.

Na aba "API" do Angular Material, vamos copiar o import do módulo.

```javascript
import {MatCardModule} from '@angular/material/card';
Copiar código
```

Vamos inserir essa linha na lista de *imports* do `app.module.ts` do nosso projeto. Além disso, vamos adicionar `MatCardModule` no array de `imports`.

```markdown
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
Copiar código
```

Agora já podemos utilizar.

De volta à aba de exemplo do Angular Material, vamos copiar o código HTML do card exemplo para usarmos de base para a construção do nosso card.

```javascript
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
Copiar código
```

Vamos colar esse código no `card-busca.component.html` e fazer algumas modificações.

No card do exemplo, tem um cabeçalho com o nome. Não precisaremos desse trecho, podemos apagar o bloco da tag `mat-card-heard`.

Também vamos mudar o caminho da imagem e o alt da imagem. Depois, vamos apagar o parágrafo do exemplo e adicionar uma lista `<ul>` com duas `<li>`: Veneza e 500.

Na tag `mat-card-actions` , deixaremos apenas um botão de ação chamado "VER DETALHES". Mudaremos também o tipo do botão para `mat-flat-button` e passaremos a cor `primary` para ficar com a cor roxa.

```javascript
<mat-card class="card-busca">
  <img mat-card-image
    src="assets/imagens/Veneza.png" alt="Imagem de Veneza">
  <mat-card-content>
    <ul>
      <li>Veneza</li>
      <li>R$ 500</li>
    </ul>
  </mat-card-content>
  <mat-card-actions>
    <button mat-flat-button color="primary">VER DETALHES</button>
  </mat-card-actions>
</mat-card>
Copiar código
```

Agora, precisamos estilizar no SCSS. O card-busca.component.scss terá o seguinte código:

```css
.card-busca {
  max-width: 320px;
  background-color: #FEF7FF;
  border-radius: 12px;
  button {
    width: 100%;
    margin: 0 16px 48px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 12px;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #1D1B20;
      text-align: center;
    }
  }
}
Copiar código
```

Para testar, vamos acessar o `home.component.html` e inserir o seletor do `app-card-busca`.

```xml
  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
        <app-card-busca></app-card-busca>
    </app-container> 
Copiar código
```

Vamos verificar como está na aplicação.

Os cards estão aparecendo na tela, mas ainda não estão do jeito que queremos.

**Vinícios:** Nós precisamos organizar os cards para que eles fiquem lado a lado. Precisaremos de algum contêiner, algum `display: flex` para deixá-los alinhados como está no Figma.

**Nayanne:** Vamos resolver isso no próximo vídeo!


# 11 **Alinhando os cards**


**Nayanne:** No vídeo anterior, criamos o card de busca usando como base o um código exemplo do Angular Material.

Mas os cards estão listados um abaixo do outro, precisamos resolver isso.

No arquivo `home.component.html`, adicionaremos uma div com a classe `card-wrapper` para envolver esses cards de busca.

```xml
  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <div class="card-wrapper">
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
    </div>
    </app-container> 
Copiar código
```

E no CSS `home.component.scss`, vamos colar os estilos.

```css
.homepage {
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
    margin-bottom: 40px;
  }
}
Copiar código
```

Podemos voltar para a aplicação no navegador. Agora, sim! Os cards estão um ao lado do outro em fileiras de três.

Para ficar mais parecido com o Figma, vamos adicionar o título "Promoções". Vamos adicionar também o título dos cards de depoimentos.

```xml
  <app-banner
    src="assets/imagens/banner-homepage.png"
    alt="Banner da aplicação Jornada">
  </app-banner> 
    <app-container>
    <h2>Promoções</h2>
    <div class="card-wrapper">
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
      <app-card-busca></app-card-busca>
    </div>
    <h2>Depoimentos</h2>
    </app-container> 
Copiar código
```

## Desafio: crie o card de depoimento

**Vinícios:** Então, o próximo passo é desenvolver o card de depoimentos.

**Nayanne:** Exatamente. Você, que está assistindo a esta aula, pode nos ajudar nessa. Vai ficar como desafio para você colocar em prática tudo o que você está aprendendo e **codar o componente do card de depoimento**.

**Vinícios:** Essa parte de olhar o Figma e transformar isso em um componente do Angular é o que fazemos no dia a dia enquanto pessoas desenvolvedoras de front-end. Então, ficaremos muito contentes se você desenvolver esse desafio aí na sua máquina!


# 12 **Desafio: crie o card de depoimento**


Você aprendeu a criar cards reaproveitáveis e entendeu como aplicar estilos e personalização, então já é hora de colocar seus conhecimentos em prática! Seu próximo desafio será criar os cards de depoimento para a aplicação Jornada Milhas, levando em consideração a estilização e os requisitos de design fornecidos no Figma.

Mãos à obra e aproveite esse desafio para aprimorar suas habilidades e melhorar ainda mais o layout da aplicação Jornada Milhas!


# 13 **O que aprendemos?**

## Nessa aula, você aprendeu como criar:

* Os componentes de `banner` e `título` com conteúdo flexível;
* Um container flexível com a diretiva `ng-content`;
* Cards reaproveitáveis com variação de estilos;
* Card de busca utilizando o `mat-card` do Angular Material.
