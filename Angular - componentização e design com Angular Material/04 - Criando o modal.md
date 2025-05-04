# 01**Projeto da aula anterior**

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na aula anterior, para [baixá-lo clique neste link](https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-3.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-3).


# 02 **Preparando o ambiente**

Na próxima aula, vamos construir o novo componente `modal` e utilizaremos o código à seguir para sua estilização:

```css
.modal {
  border: 1px solid #1D1B20;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 32px;
    padding: 12px;
  }
  .selecao-idade {
    display: flex;
    justify-content: space-between;
    ul {
      list-style-type: none;
      margin: 0 0 0 -1em;
      padding: 0;
      li {
        margin-bottom: 10px;
        margin: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1D1B20;
        text-align: start;
        padding: 0;
        span {
          vertical-align: middle;
          padding: 0 12px;
        }
      }
    }
  }
  .selecao-categoria {
    margin-top: 32px;
    color: #1D1B20;
  }
  .modal-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    button {
      margin: 0 8px;
      width: 100%;
    }
  }
}
Copiar código
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)


# 03 **Acessando o modal**

**Vinícios (Vinny)**: Estamos chegando agora na faze final da nossa entrega. O Jornada Milhas está quase pronto e, para fazemos os ajustes finais, construiremos uma Modal para incrementar o comportamento do formulário de busca.

**Nayanne (Nay)**: Acessando a aplicação, percebemos que ela está bem completa, inclusive eu já adicionei o *banner* acima do rodapé. A única coisa que falta para nossa entrega é o modal, que será aberto quando clicarmos nos chips do formulário de busca.

Na seção Passagens, ao clicarmos em "Econômica", abrimos o modal "Viajante". Portanto, eu vim do "futuro" para mostrar como essa implementação do modal precisa ficar.

Nesse modal, temos o espaço para informar a quantidade de passageiros de acordo com a idade, também existem informações de categorias e, na parte inferior um botão escrito "Buscar". Clicando nele, fechamos a janela. Esse é o elemento que construiremos agora.

Acessaremos o VS Code e, no terminal, pressionaremos "Ctrl + C" para finalizarmos a aplicação. Abrindo a aba "*Explorer*" (Explorador), na lateral esquerda, observamos que ainda não criamos o componente modal, então voltaremos ao Terminal e escreveremos `ng g c shared/modal` para criarmos esse componente dentro da pasta "*shared*".

Após um breve carregamento, nosso componente é criado e, em seguida, escreveremos `ng server` para executarmos nossa aplicação. Enquanto a aplicação carrega, [acessaremos o site do Angular Material](https://material.angular.io/) para procurar um componente que nos ajudará nesta tarefa.

Para criar o modal, podemos usar o componente ***Dialog*** (Diálogo), que criará uma caixa de diálogo onde a pessoa poderá visualizar algumas informações, acrescentar dados, entre outras coisas. [Abrindo a seção *Dialog*](https://material.angular.io/components/dialog/overview), encontramos alguns exemplos de caixas de diálogo.

Na seção "*Dialog Overview*" tem um campo interativo, que está perguntando meu nome. Vou escrever o nome "Vinny" e clicar no botão "*Pick one*", logo abaixo do campo. Fazendo isso, ele abre uma caixa de diálogo com uma mensagem de saudação e pergunta qual o meu animal favorito, com um campo para escrever a resposta.

Qual seu animal favorito, Vinny?

**Vinny**: São "catioros" (cachorros).

**Nay**: Então vou escrever "catioro" (cachorro) e clicar no botão "Ok", na parte inferior da caixa de diálogo. Com isso, a caixa de diálogo fecha e, abaixo do botão "*Pick one*", da tela anterior, apareceu a mensagem "\*You chose: \*catioro" (Você escolheu: catioro).

O nosso modal não terá tantas informações, então vamos procurar um modelo mais simples, que não precisaremos personalizar tanto. Antes disso, clicaremos na aba "API" e copiaremos o código e importação, seguiremos as etapas que já conhecemos.

```ts
import {MatDialogModule} from '@angular/material/dialog';
Copiar código
```

No VS Code, abriremos o arquivo `app.module.ts` e, abaixo da importação do `{ ModalComponent }`, colaremos a importação do `{MatDialogModule}`. Em seguida, copiaremos o nome do módulo e adicionaremos ao do array `declarations`.

Voltaremos para página do Angula Material e clicaremos na aba "*Exemples*" para procuramos outros exemplos. Anteriormente eu estava explorando essa página e encontrei o exemplo ***Dialog elements***. Ao clicar no botão "*Launch dialog*", ele abre uma caixa de diálogo com elementos (*Dialog with elements*).

Esse é um pouco parecido com o modal que precisamos codar, então podemos usá-lo como exemplo. Então podemos clicar no ícone "<>" no canto superior direito do *Dialog elements* para visualizarmos o código.

Ao fazermos isso, notamos uma pequena diferença: temos o código HTML do modal e outro código HTML que precisaremos acrescentar no componente onde ficará a ação de abrir o modal, no caso do nosso projeto, nos chips. Podemos começar adicionando essa funcionalidade, o que acha?

**Vinny**: É um bom plano. Assim damos gatilho (*trigger*) de abertura do modal.

**Nay**: Então vamos lá. Esse código HTML usa o *event binding* com ação de clique e chamando a função `openDialog()`.

```html
<button mat-button (click)="openDialog()">Launch dialog</button>
Copiar código
```

Temos também, na aba "TS", o código da classe. Neste curso estamos fazendo a parte de consonantização e layout visual, mas optamos por criar com vocês o comportamento de abertura de modal para aprenderem que o Material, também ajuda nas funcionalidades.

Assim vocês vão se acostumando a terem, em alguns componentes, a parte do HTML e a parte da classe do TypeScript. Nela, encontraremos alguns exemplos que nos ajudarão, como nesse caso do modal. Sendo assim, vamos copiar o trecho de código onde tem o construtor e a função:

```ts
constructor(public dialog: MatDialog) {}

openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
Copiar código
```

Voltaremos para o VS Code e, na aba explorador, abriremos o componente onde adicionaremos esses códigos. No caso, acessaremos a "src > app > shared> form-busca" e abriremos os arquivos `form-busca.component.html` e `form-busca.component.ts`.

No `form-busca.component.html`, vamos procurar o `<mat-chip-listbox>` e adicionaremos a ele o evento de clique passando a função `openDialog()`. Assim ele será chamado quando clicarmos em qualquer um dos dois chips.

```html
<!--código omitido-->
<mat-chip-listbox (click)="openDialog()" aria-label="Seleção de passagens">
    <mat-chip-option selected>1 adulto</mat-chip-option>
    <mat-chip-option>Econômica</mat-chip-option>
</mat-chip-listbox>
<!--código omitido-->
Copiar código
```

Em seguida, no `form-busca.components.ts`, dentro da `FormBuscaComponent`, colaremos o código que copiamos do Material.

```ts
export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}
Copiar código
```

Esse código está injetando o serviço `MetDialog` no construtor, que já foi importado na linha 2, e está usando esse serviço na função `openDialog()`. Inclusive podemos apagar o `.open(DialogElementsExempleDialog)` e, ao escrevermos `this.dialog.`, aparecerão várias sugestões de métodos que podem ser usados com o `dialog`.

Precisamos do método `.open()`, porque abriremos essa caixa de diálogo e, nessa função, precisamos passar qual componente queremos abrir. No caso, queremos abrir o `ModalComponent`.

```ts
export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
Copiar código
```

Agora podemos começar a alterar o nosso modal.


# 04 **Adicionando elementos**


**Nayanne (Nay)**: Estamos novamente no site do Angular Material e copiaremos o trecho HTML para criarmos o modal.

```html
<h1 mat-dialog-title>Dialog with elements</h1>
<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>Close</button>
</div>
Copiar código
```

Nela temos o `mat-dialog-title`, com o título do modal, o `mat-dialog-content`, com o conteúdo, e o `mat-dialog-actions`, que é uma seção para adicionarmos botões com ações. Após copiarmos esse código, voltaremos ao VS Code, onde acessaremos "modal > `modal.component.html`".

No arquivo `modal.component.html`, apagaremos o parágrafo da primeira linha e colaremos o código que copiamos. Nosso próximo passo é fazer algumas modificações.

A primeira delas é englobar todo o código dentro de uma tag `<section>` com a classe `"modal"`. Em seguida, no `<h1>`, passaremos o título da modal, que é `Viajante`. Também apagaremos o conteúdo da `<div mat-dialog-content>`, porque nosso conteúdo será diferente.

```html
<section class="modal">
    <h1 mat-dialog-title>Viajante</h1>
    <div mat-dialog-content>
      
    </div>
    <div mat-dialog-actions>
        <button mat-button mat-dialog-close>Close</button>
    </div>
</section>
Copiar código
```

Enquanto fazemos essas modificações, podemos aproveitar para testar se nosso modal está abrindo. Sendo assim, voltaremos para aplicação da Jornada Viagens e, dentro da seção "Passagens", clicaremos em "Econômica". Ao fazermos isso, uma caixa de elementos abre no centro da tela com o título "Viajante" e um botão "*Close*" (Fechar) no canto inferior esquerdo.

O comportamento de abrir o modal já está funcionando. Ainda está distante do que queremos, mas resolveremos isso com estilização e inclusão do conteúdo. Podemos clicar em "*Close*" para fechar essa janela e voltarmos para o código.

Dentro do `mat-dialog-content`, criaremos uma `<div>` para englobar a parte onde temos os adultos, crianças e bebês, assim como os botões para aumentar ou diminuir a quantidade de passageiros. A classe dessa div será `"selecao-idade"`.

Dentro dessa `div`, criaremos uma lista não ordenada (`<ul>`) com três itens (`<li>`). Conferindo no Figma, observamos que o primeiro item são os "Adultos", seguido de "(Acima de 12 anos)" e, no terceiro item, os botões e o `span` com o número. Portanto, codamos:

```html
<!-- código omitido -->

<div mat-dialog-content>
    <div class="selecao-idade">
        <ul>
            <li><strong>Adultos</strong></li>
            <li>(Acima de 12 anos)</li>
            <li>
                <button mat-mini-fab>
                    <img
                        src="assets/icones/do_not_disturb_on.png"
                        alt="Operador de subtração">
                </button>
                <span>1</span>
                <button mat-mini-fab>
                    <img
                        src="assets/icones/add_circle.png"
                        alt="Operador de adição">
                </button>
            </li>
        </ul>
    </div>
</div>

<!-- código omitido -->
Copiar código
```

Para o item de botões, usamos, por enquanto, apenas um botão arredondado do Material e, dentro dele, passamos o **símbolo de menos**, conforme o modelo do Figma. Para isso, usamos a tag `<img>` com a origem em `"assets/icones/do_not_disturb_on.png"` e um `alt="Operador de subtração"`. Para facilitar a identificação, passamos para esse botão a classe `"decremento"`.

Selecionando o código do primeiro botão e pressionando "Alt + Shift + ↓", duplicamos esse código para criarmos o segundo botão. Nele, mudamos o **nome da classe**, que passou a ser `"incremento"`, o **ícone**, que é o `/add_circle.png`, e o **alt**, que é `"Operador de adição"`.

Por fim, entre os botões, criamos um `scan` que, por enquanto, tem o número `1` fixo, para usarmos de exemplo. E antes de verificarmos como ficou o modal, acessaremos o arquivo `modal.component.scss` e adicionaremos as classes:

```scss
.modal {
  border: 1px solid #1D1B20;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 32px;
    padding: 12px;
  }
  .selecao-idade {
    display: flex;
    justify-content: space-between;
    ul {
      list-style-type: none;
      margin: 0 0 0 -1em;
      padding: 0;
      li {
        margin-bottom: 10px;
        margin: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1D1B20;
        text-align: start;
        padding: 0;
        span {
          vertical-align: middle;
          padding: 0 12px;
        }
      }
    }
  }
  .selecao-categoria {
    margin-top: 32px;
    color: #1D1B20;
  }
  .modal-actions {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    button {
      margin: 0 8px;
      width: 100%;
    }
  }
}
Copiar código
```

Ao acessarmos nossa aplicação novamente e clicar no botão "Econômica", a caixa de elementos abre mais uma vez no centro da tela. Dessa vez, além do título "Viajante" e do botão "*Close*", ela tem os itens de lista que adicionamos. Além disso, os textos e botões estão com a estilização da nossa aplicação.

![Modal de caixa de elementos. Na parte superior direita está o título "Viajante". Abaixo dele está escrito, em forma de lista e em uma fonte bem menor, "Adultos", "(Acima de 12 anos)" e o número "1" entre dois botões redondos cinzas: o da esquerda tem o sinal de subtração dentro de um círculo e o da direita tem o sinal de adição dentro de um círculo. No canto inferior direito da janela está o botão "Close". Todos os elementos do modal estão com a estilização da aplicação.](https://cdn1.gnarususercontent.com.br/1/935581/7b034188-a62d-4860-bffa-8354210bf0ed.png)

Já temos o início do "sonho", ou seja, o resultado já está um pouco parecido com o que precisamos.

**Vinícios (Vinny)**: Agora que estamos no final do curso, a última "milha" da nossa entrega, temos o último desafio para você, que nos acompanhou até o final.

**Nay**: Isso mesmo. Agora é com você!

Como mostra o nosso Figma, você precisará fazer mais duas listas: a de Crianças e a de Bebês, que ficará lado a lado da primeira lista. Abaixo delas, você precisará adicionar um conjunto de chips, que é bem parecido com o que fizemos no formulário de busca, e por fim, adicionar o botão "Buscar" na parte inferior do modal.

Essa responsabilidade ficará para você!

**Vinny**: Exatamente! Como estamos falando de coisas muito parecidas com o que já fizemos, é hora de exercitar e praticar o que aprenderam, que é uma das melhores formas de absorver conhecimento.

Estou contando com vocês para essa modal ficar incrível!



# 05 **Para saber mais: personalizando modal com MatDialog**


## O componente `Dialog` do Angular Material

O componente `Dialog` do Angular Material é um recurso poderoso que permite a criação e abertura de modais na aplicação. O modal é uma janela flutuante que requer a atenção do usuário antes de continuar interagindo com o restante da aplicação.

## Personalização do modal

Ao utilizar o método `open` do componente `Dialog`, é possível especificar diversas propriedades para personalizar o comportamento e a aparência do modal. No exemplo da aula, em `form-busca.component.ts`, onde configuramos a abertura do modal, utilizamos a propriedade `width` para definir a largura como 50%, que será passada por um objeto de configuração que será o segundo parâmetro do `dialog.open`, como você pode conferir abaixo:

```javascript
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
Copiar código
```

## Explorando a documentação oficial

O `width` é apenas uma das propriedades disponíveis. Recomendamos a consulta da [documentação oficial do Dialog do Angular Material](https://material.angular.io/components/dialog/overview) para saber mais sobre as propriedades e seus respectivos valores para personalizar os modais de acordo com as necessidades do projeto e obter mais exemplos de uso. Confira a seguir algumas das propriedades que você pode consultar na documentação:

* height: permite definir a altura do `Dialog`;
* data: possibilita a passagem de dados para o `Dialog`, permitindo que informações sejam compartilhadas entre componentes;
* disableClose: controla se o `Dialog` pode ser fechado pelo usuário clicando fora de sua área.

Em resumo, o componente `Dialog` do Angular Material permite a criação de modais flexíveis e interativos na aplicação, e as diversas propriedades disponíveis oferecem controle e personalização sobre o comportamento e a aparência desses modais.


# Desafio: componentizando os botões de incremento e decremento

[No código criado no arquivo modal.component.html, observamos que os botões estão sendo repetidos para cada seção (adultos, crianças e bebês), assim como a imagem e as propriedades src e alt dos botões.

Trecho de código do modal repetido nas seções Adultos, crianças e bebês:

`modal.component.html`

```xml
<!-- código omitido -->
<li>
    <button class="decremento" mat-mini-fab>
         <img
          src="assets/icones/do_not_disturb_on.png"
          alt="Operador de subtração">
     </button>
     <span>1</span>
     <button class="incremento" mat-mini-fab>
         <img
          src="assets/icones/add_circle.png"
          alt="Operador de adição">
      </button>
</li>
<!-- código omitido -->
Copiar código
```

A repetição de código pode levar a problemas de manutenção, dificuldades na atualização e aumento da complexidade. Com isso em mente, como podemos tornar a aplicação mais modular e reutilizável?

Para isso, o seu desafio consiste em criar um componente reutilizável para os botões de incremento e decremento, a fim de evitar a repetição desnecessária. Assim, estaremos organizando nosso código de forma mais eficiente e promovendo a reutilização.

Para isso, utilize propriedades de entrada (@Input()) no componente para definir a operação desejada ("incrementar" ou "decrementar"), permitindo que o mesmo componente seja utilizado para ambos os casos.

Além disso, lembre-se de usar a diretiva ngClass para adicionar ou remover classes dinamicamente com base na operação selecionada, garantindo a estilização correta dos botões.

Dessa forma, ao final do desafio, você deve ter um componente para encapsular os botões de incremento e decremento, eliminar a repetição de código e promover uma abordagem mais modular e reutilizável em nossa aplicação Angular.

Como deverá ficar o código do modal após a componentização do botão:

`modal.component.html`

```xml
<!-- código omitido -->
<li>
  <app-botao-controle operacao="decrementar"></app-botao-controle>
  <span>1</span>
  <app-botao-controle operacao="incrementar"></app-botao-controle>
</li>
<!-- código omitido -->
Copiar código
```

Vamos começar?


# 07 **Projeto final**

Caso queira revisar o código do projeto final do curso, você pode [baixá-lo neste link](https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-4.zip) ou acessar nosso [repositório do Github](https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-4).


# 08 **O que aprendemos?**

## Nessa aula, você aprendeu como:

* Criar o componente `modal` com o `MatDialog` do Angular Material;
* Configurar a abertura do modal;
* Componentizar os botões de incremento e decremento do modal;
* Controlar a repetição de código através da **reutilização de componentes**.
*

# 09 **Conclusão**


**Nayanne (Nay)**: Parabéns pela conclusão de mais um curso! Aqui você aprendeu a:

* Criar componentes no Angular;
* Pensar nos critérios da componentização;
* Utilizar o Angular Material para construir a página inicial da aplicação Jornada.

Agora é hora de compartilhar, engajar-se com a comunidade e utilizar todo esse conhecimento em outros projetos.

**Vinícios (Vinny)**: Foi uma jornada e tanto! Estou muito feliz que chegaram até aqui, e agora é hora de compartilharem conosco o que você fez.

[Acessem o **Discord da Alura**](https://discord.gg/SK9bj7hEYD), mandem mensagem, postem o projeto nos canais, no LinkedIn, no Instagram ou qualquer rede social que preferirem. Eu terei o maior prazer de ver sua versão do Jornada Milhas.

**Nay**: É importante que vocês deixem o seu depoimento para conseguirmos entregar uma experiência de aprendizado cada vez melhor! Queremos te agradecer pela sua companhia durante este curso e desejamos muito sucesso na sua carreira.

**Vinny**: É isso! Eu agradeço à Nay, por ter me aceitado na construção deste projeto, e a você, que chegou até o final e construiu a sua Jornada Milhas.

Vejo vocês na próxima!

**Nay**: Um grande abraço e até a próxima!


# 10 **Créditos**

![Instrutores](https://cdn3.gnarususercontent.com.br/publicacao/instrutores.jpg)

* [Nayanne Batista](https://cursos.alura.com.br/user/nayanne-batista)
* [Vinicios Neves](https://cursos.alura.com.br/user/viniciosneves)

![Design](https://cdn3.gnarususercontent.com.br/publicacao/design.jpg)

* [Isadora Cardoso](https://cursos.alura.com.br/user/isadora-cardoso)

![Produção audiovisual](https://cdn3.gnarususercontent.com.br/publicacao/producao-audiovisual.jpg)

* [Dayanna Costa](https://cursos.alura.com.br/user/dayanna-costa)

![Produção didática](https://cdn3.gnarususercontent.com.br/publicacao/producao-didatica.jpg)

* [João Victor](https://cursos.alura.com.br/user/victor-contato97)

![Apoio didático](https://cdn3.gnarususercontent.com.br/publicacao/apoio-didatico.jpg)

* [Ana Horiuchi](https://cursos.alura.com.br/user/horiuchi)

![Apoio](https://cdn3.gnarususercontent.com.br/publicacao/apoio.jpg)

* [Rafaela Silvério](https://cursos.alura.com.br/user/rafaela-silverio)
