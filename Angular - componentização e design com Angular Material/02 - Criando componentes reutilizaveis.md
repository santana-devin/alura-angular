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


# 06**Componente container**

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
