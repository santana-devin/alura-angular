# 01 **Projeto da aula anterior**

# 02 **Preparando o ambiente: código CSS final**

No vídeo 5.1, vamos finalizar a estilização do projeto. Para isso, vamos alterar os arquivos `genero-literario.component.css`, `livro.component.css` e `lista-livros.component.css` adicionando o código a seguir:

`genero-literario.component.css`

```css
.romance {
  background-color: #E8FFFF;
}

.generos .romance {
  border-bottom: 4px solid #82CFFA;
}

.misterio {
  background-color: #E9FFE3;
}

.generos .misterio {
  border-bottom: 4px solid #A6D157;
}

.fantasia {
  background-color: #FFE3E3;
}

.generos .fantasia {
  border-bottom: 4px solid #E06B69;
}

.ficcao-cientifica {
  background-color: #FFF0FA;
}

.generos .ficcao-cientifica {
  border-bottom: 4px solid #DB6EBF;
}

.tecnicos {
  background-color: #FFF1E4;
}

.generos .tecnicos {
  border-bottom: 4px solid #FF8A29;
}
Copiar código
```

`livro.component.css`

```css
section {
    /* código já existente omitido */
    border-top: 24px solid; //código adicionado à section
}

.romance {
  border-color: #82CFFA;
}

.misterio {
  border-color: #A6D157;
}

.fantasia {
  border-color: #E06B69;
}

.ficcao-cientifica {
  border-color: #DB6EBF;
}

.tecnicos {
  border-color: #FF8A29;
}
Copiar código
```

`lista-livros.component.css`

```css
section span {
  margin-bottom: 64px;
}
Copiar código
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

# 03 **Estilização condicional com ngClass**

Para finalizar o projeto, faltam alguns detalhes do layout. Se compararmos nosso projeto atual ao Figma, perceberemos que cada gênero literário possui um fundo de cor diferente. A linha de destaque abaixo do nome do gênero também possui uma coloração distinta, e há bordas em todos os cartões de livros. Precisamos, portanto, ajustar o CSS.

## Aplicando cores dinâmicas aos gêneros literários

Para realizar esse tipo de estilização condicional, podemos utilizar um recurso interessante do Angular, que é a **diretiva `ngClass`** . Com ela, conseguimos adicionar ou remover classes dinamicamente.

Primeiro, no *template* do gênero literário, aplicaremos um *property binding* no elemento `section` com um par de colchetes e, entre eles, o `ngClass`. Este receberá o nome do gênero, com `genero().id`::

> `genero-literario.html`:

```html hljs language-xml
<section class="generos" [ngClass]="genero().id">
Copiar código
```

Faremos o mesmo para o `span` da linha de destaque. Podemos quebrar a linha para separar cada propriedade dessa *tag* :

```html hljs language-xml
<span
        class="linha-destaque linha-destaque--pequena"
        [ngClass]="genero().id">
</span>
Copiar código
```

Para utilizar o `ngClass`, precisamos importar o `CommonModule`. No arquivo `genero-literario.component.ts`, adicionaremos esse módulo ao *array* de `imports` e criaremos um `import` no topo do arquivo:

> `genero-literario.component.ts`:

```typescript hljs
import { CommonModule } from '@angular/common';

// Código omitido

    imports: [
            LivroComponent,
            CommonModule
    ],
Copiar código
```

Isso permite que o Angular reconheça as diretivas, *pipes* e outros recursos do Angular.

Por fim, podemos remover o `import` de `livros` no início desse arquivo, pois não está sendo utilizado.

## Definindo as Classes CSS para os Gêneros

No final do arquivo `genero-literario.css`, adicionaremos o código abaixo com as classes correspondentes aos gêneros:

> `genero-literario.css`:

```css hljs
.romance {
    background-color: #E8FFFF;
}

.generos .romance {
    border-bottom: 4px solid #82CFFA;
}

.misterio {
    background-color: #E9FFE3;
}

.generos .misterio {
    border-bottom: 4px solid #A6D157;
}

.fantasia {
    background-color: #FFE3E3;
}

.generos .fantasia {
    border-bottom: 4px solid #E06B69;
}

.ficcao-cientifica {
    background-color: #FFF0FA;
}

.generos .ficcao-cientifica {
    border-bottom: 4px solid #DB6EBF;
}

.tecnicos {
    background-color: #FFF1E4;
}

.generos .tecnicos {
    border-bottom: 4px solid #FF8A29;
}
Copiar código
```

Voltando ao arquivo HTML, podemos mover o `span` para dentro do `h3`, recuperando `generos` junto ao gênero específico:

> `genero-literario.component.html`:

```html hljs language-xml
<h3 class="texto-h3-prata">
    {{ genero().value }}
    <span 
        class="linha-destaque linha-destaque--pequena"
        [ngClass]="genero().id">
    </span>
</h3>
Copiar código
```

Agora, ao acessar o navegador, vemos que o fundo e a linha de destaque estão sendo alterados corretamente conforme os gêneros.

## Adicionando bordas nos *cards*

Vamos repetir o processo para adicionar bordas nos *cards* de livros. No `livro.component.html`, aplicaremos o `ngClass` à `section`. Nesse componente, adicionaremos a *input property* `livro()`, acessando a propriedade `genero.id`:

> `livro.component.html`:

```html hljs language-xml
<section [ngClass]="livro().genero.id">
Copiar código
```

No `livro.component.ts`, importaremos o `CommonModule` para evitar erros:

> `livro.component.ts`:

```typescript hljs
imports: [CommonModule],
Copiar código
```

No arquivo `livro.component.css`, entre as chaves da classe `section`, removeremos os estilos `box-shadow` e `margin-left`, adicionando um `border-top: 24px solid`:

> `livro.component.css`:

```css hljs
section {
    /* Código omitido */
    border-top: 24px solid;
}
Copiar código
```

Por fim, abaixo da classe `section`, adicionaremos as classes abaixo para definir a cor da borda dos livros:

```css hljs
.romance {
    border-color: #82CFFA;
}

.misterio {
    border-color: #A6D157;
}

.fantasia {
    border-color: #E06B69;
}

.ficcao-cientifica {
    border-color: #DB6EBF;
}

.tecnicos {
    border-color: #FF8A29;
}
Copiar código
```

Voltando à aplicação, os *cards* dos livros exibem a cor correspondente ao seu gênero.

## Conclusão

Com essas alterações, finalizamos nossa aplicação. Utilizando `ngClass`, conseguimos adicionar dinamicamente os estilos, garantindo que a interface fique visualmente organizada e agradável para a pessoa usuária.


# 04 **Personalização de produtos na Petpark**

A Petpark, uma plataforma de e-commerce e serviços personalizados para animais de estimação, com recursos de agendamento online para banhos, tosas e consultas veterinárias, está expandindo seu catálogo de produtos e deseja que cada categoria de produto tenha uma aparência única na plataforma de e-commerce. A equipe de desenvolvimento quer que o fundo dos cartões de produto e a cor da borda superior variem de acordo com a categoria, como brinquedos, alimentos e acessórios.

Considerando que os produtos são carregados dinamicamente conforme a navegação da pessoa usuária, qual das alternativas abaixo descreve a forma mais eficiente de implementar essa personalização utilizando Angular?


[ ]Utilize apenas uma classe CSS genérica para todos os produtos e altere as cores de fundo e borda superior através de um script que roda no servidor antes de enviar a página para a pessoa usuária. Além disso, implemente um sistema de pré-processamento que analise as categorias de produtos e aplique as alterações de estilo necessárias, garantindo que a personalização seja feita antes do envio da página, mas sem sobrecarregar o servidor.


[ ]Aplique estilos inline diretamente nos elementos do DOM com base na categoria do produto, utilizando JavaScript para alterar as propriedades de estilo conforme necessário. Adicionalmente, desenvolva um módulo de utilidades que centralize as funções de manipulação de estilo, facilitando a manutenção e atualização do código, e assegurando que as alterações de estilo sejam consistentes em toda a aplicação.

[X]Utilize a diretiva ngClass do Angular para adicionar classes CSS dinamicamente com base na categoria do produto. Defina classes CSS para cada categoria com as cores desejadas e associe-as no template do componente de produto, vinculando-as a uma propriedade que identifica a categoria, como um ID. Importe o CommonModule para que a diretiva funcione corretamente.

Correta, pois essa abordagem permite que cada produto carregado tenha a estilização apropriada de forma dinâmica e eficiente, utilizando os recursos do Angular para manipulação de classes CSS.


[ ]Crie um arquivo CSS separado para cada categoria de produto e carregue dinamicamente o arquivo correspondente quando a pessoa usuária navegar para uma categoria específica. Além disso, implemente um sistema de cache para armazenar os arquivos CSS já carregados, minimizando o impacto no tempo de carregamento em visitas subsequentes e garantindo que as alterações de estilo sejam aplicadas de forma consistente em toda a plataforma.


# 05**Diferenciação de exames na Clínica Médica Voll**


A Clínica Médica Voll, uma clínica especializada em serviços médicos e exames, está desenvolvendo um sistema de agendamento de exames online utilizando Angular. A equipe deseja que cada tipo de exame, como sangue, imagem e cardiológico, tenha uma cor de fundo distinta na interface de agendamento para facilitar a identificação pelas pessoas pacientes.

Como você aplicaria essa estilização condicional?


[ ]Criar um arquivo JSON com as cores de cada tipo de exame e carregar esse arquivo no componente de agendamento, aplicando as cores diretamente através de interpolação de strings no template. Adicionalmente, implementar um sistema de cache para armazenar as cores carregadas, visando melhorar o desempenho ao evitar carregamentos repetidos.


[ ]Definir classes CSS no arquivo de estilos global e aplicar as classes manualmente a cada exame diretamente no HTML, criando elementos estáticos com as cores já configuradas para cada tipo de exame.


[ ]Aplicar estilos inline diretamente no template do componente de agendamento, definindo as cores de fundo e da linha de destaque com base em uma função JavaScript que retorna as cores conforme o tipo de exame. Além disso, considerar a possibilidade de ajustar manualmente cada estilo para garantir que as cores sejam aplicadas corretamente, mesmo que isso exija uma revisão constante do código.

[X]Utilizar a diretiva ngClass do Angular para adicionar classes CSS dinamicamente com base no tipo de exame. Criar classes CSS para cada tipo de exame com as cores desejadas e associá-las ao tipo de exame no template do componente de agendamento, vinculando-as a uma propriedade que identifica o tipo de exame. Importar o CommonModule para que a diretiva funcione corretamente.

Correta, pois essa abordagem permite a aplicação dinâmica de estilos com base no tipo de exame, garantindo que cada exame tenha a estilização correta quando carregado, utilizando as funcionalidades do Angular de forma eficaz.


# 06 **Faça como eu fiz: estilize condicionalmente os gêneros literários com ngClass**


Nesta aula, aprendemos como utilizar a diretiva `ngClass` para aplicar estilos dinamicamente aos componentes, garantindo que os cards de livros e as seções de gênero tenham uma identidade visual correspondente ao seu tipo.

Agora é sua vez de praticar! Siga o passo a passo:

* Aplique `ngClass` ao componente de gênero para alterar o background e a linha de destaque;
* Aplique `ngClass` ao componente de livro para alterar a cor da borda superior do card;
* Defina os estilos CSS para cada gênero.

Abaixo está o passo a passo detalhado de como você pode realizar a atividade!


# 07 **Projeto final do curso**


Caso queira revisar o código do projeto final do curso, você pode [fazer o donwload](https://github.com/alura-cursos/4455-organo/archive/refs/heads/aula-5.zip) ou acessar nosso [repositório do Github](https://github.com/alura-cursos/4455-organo/tree/aula-5).

Aproveite para examinar e estudar mais o projeto!


# 08 **O que aprendemos?**


Nesta aula, aprendemos:

* A usar o `ngClass` para adicionar/remover classes dinamicamente.
* A importância de importar o `CommonModule` para utilizar diretivas Angular.
* A associar classes CSS a elementos com base em propriedades de dados.
* A estruturar classes CSS para aplicar estilos condicionais.


# 09 **Conclusão**


**Parabéns** pela conclusão de mais este curso. Iniciamos nossa jornada de aprendizado sobre o Angular e conseguimos implementar e criar do zero uma aplicação de organização de leituras.

## Revisando o aprendizado

No começo do curso, criamos **componentes** e aprendemos a usar a **CLI do Angular** . Criamos alguns componentes de apresentação, como o cabeçalho e o rodapé.

Em seguida, vimos como criar componentes um pouco mais complexos, começando a trabalhar na **lógica** da classe dos componentes. A partir daí, começamos a entender como funciona a associação de dados, o ***data binding*** , dentro do próprio componente.

Depois, evoluímos e começamos a entender como funciona a **comunicação entre os componentes pai e filho** . Nós aprendemos sobre ***property binding*** , **interpolação** e ***event binding*** para implementar a funcionalidade de favoritar.

Também começamos a entender os **Signals** e como criar *inputs* baseados neles para receber informações externas. Além disso, estudamos o *Control Flow* do Angular, utilizando `@for` e `@if` para iterar sobre listas e realizar renderização condicional.

Finalizamos o curso ao aplicar estilização condicional, utilizando a diretiva `ngClass`, o que deixou nosso projeto ainda mais atraente.

## Compartilhe seu aprendizado

Estamos felizes por você ter nos acompanhado até o final. Gostaríamos de pedir que **compartilhe seu aprendizado** utilizando a hashtag **#AprendiNaAlura** em suas redes sociais. Também te convidamos a participar do [fórum](https://cursos.alura.com.br/forum) e do [Discord](https://discord.com/oauth2/authorize?client_id=1278070632013238334&response_type=code&redirect_uri=https%3A%2F%2Fcursos.alura.com.br%2Fdiscord%2Fcallback&scope=email+identify+guilds.join), onde sempre realizamos eventos.

Desejamos a você muito sucesso e até o próximo mergulho!

[ Discutir no Fórum](https://cursos.alura.com.br/forum/curso-angular-19-estruture-componentes-signals-controle-fluxo/exercicio-conclusao/185273/novo)
