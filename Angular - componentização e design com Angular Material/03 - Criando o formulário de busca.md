# 01 **Projeto da aula anterior**

Caso queira revisar o código até aqui ou começar a partir desse ponto, disponibilizamos os códigos realizados na aula anterior, para [baixá-lo clique neste link](https://github.com/alura-cursos/3150-jornada-milhas/archive/refs/heads/aula-2.zip) ou veja nosso [repositório do Github](https://github.com/alura-cursos/3150-jornada-milhas/tree/aula-2).

# 02 **Preparando o ambiente**

Na próxima aula, vamos construir o novo componente `form-busca` e utilizaremos o código à seguir para sua estilização:

```css
.form-busca {
  margin: 40px 0;
  display: block;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;
  }
  .input-container {
    margin-bottom: -1.25em;
  }
  .mat-button-toggle-checked {
    background-color: #F7F2FA;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
}
Copiar código
```

Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

# 03 **Botões e chips do Material**

[Repositório da aula 3 no GitHub](https://github.com/nayannelbatista/3150-jornada-milhas/tree/aula-3)

**Nayanne:** Na aula anterior, desenvolvemos diversos componentes para construir a tela inicial da aplicação **Jornada Milhas**. Além disso, propusemos como desafio a codificação do componente de *card* de depoimento e sua inclusão no projeto.

```makefile
localhost:4200
Copiar código
```

Ao acessarmos a aplicação pelo endereço fornecido acima, encontramos o cabeçalho (*header*), o *banner*, os *cards* com as promoções de viagens e, no final da página, os *cards* de depoimentos.

> [Figma da aplicação Jornada Milhas](https://www.figma.com/file/PnbYDKjKLouCOAwY4GRxYv/Jornada-Milhas?type=design&node-id=0-1&mode=design&t=MPZ7AAjlDvJu0T81-0)

Ao analisarmos no Figma, percebemos que o que falta para concluirmos a página inicial (*homer page*) é a inclusão do **formulário de busca**. Isso para que as pessoas usuárias possam encontrar passagens de forma fácil e intuitiva.

### Incluindo o formulário de busca

**Vinícios:** Iremos finalizar o design da página inicial, deixando todas as questões de comportamento para uma etapa futura. Nosso objetivo principal é tornar nossa aplicação idêntica ao que temos no Figma.

**Nayanne:** Isso mesmo, Vinícios.

Para facilitar a organização, iremos dividir o formulário de busca em vários elementos distintos.

![Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".](https://cdn1.gnarususercontent.com.br/1/723333/cd42f427-1ca9-4a56-b727-121428da34ab.png)

Vamos iniciar pela implementação dos botões "Ida e volta", "Somente ida" e dos elementos de chips no formulário de busca.

No terminal integrado ao VS Code, criaremos um componente que irá representar o formulário com o seguinte comando:

```bash
ng g c shared/form-busca
Copiar código
```

Estamos criando dentro da pasta `shared` um componente chamado `form-busca`. Ao finalizar a execução do comando acima de criação do componente, rodamos o seguinte comando para iniciar um servidor de desenvolvimento local:

```undefined
ng serve 
Copiar código
```

Vamos deixar a aplicação em execução e fechar o terminal.

À esquerda do VS Code, agora temos uma pasta chamada `shared` com um subdiretório denominado `form-busca`. Dentro desse subdiretório, encontram-se quatro arquivos. Clicamos em `form-busca.component.html` e `form-busca.component.scss`.

Para implementar o formulário no arquivo `form-busca.component.html`, podemos aproveitar o componente de *card* reutilizável que foi criado anteriormente, sendo o `<app-card> </app-card>` passando a `variant="secundary"` para adicionar o *background* cinza. Na sequência, para facilitar a estilização adicionamos uma classe com `class="form-busca"`.

O componente `app-card` é responsável por fornecer um contêiner visual para o formulário.

> form-busca.component.html

```cpp
<app-card variant="secundary" class="form-busca">

</app-card>
Copiar código
```

Dentro do *card*, adicionamos a tag `<form>` para envolver os elementos do formulário. Em seguida, criamos uma `<div>` com a classe `flex container`. É nessa `div` que teremos os botões e os *chips*.

> form-busca.component.html

```xml
<app-card variant="secundary" class="form-busca">
    <form>
        <div class="flex-container">
  
        </div>
    </form>
</app-card>
Copiar código
```

> [Angular Material](https://material.angular.io/components/categories)

No site do ***Angular Material***, faremos uma busca pelos elementos que se assemelham ao grupo de botões que temos no formulário de busca. Ao analisar no Figma, identificamos que os botões "Ida e volta" e "Somente ida" são um conjunto de dois botões, nos quais a pessoa usuária pode selecionar apenas um deles.

No menu lateral esquerdo do site, clicamos em "*Button toggle*" (Botão de alternância). Esse tipo de botão permite que a pessoa usuária selecione uma ou várias opções dentre diversas possibilidades, como podemos observar na seção "*Exclusive selection vs. multiple selection*" (Seleção exclusiva vs. seleção múltipla), como no exemplo a seguir retirado do próprio site:

> [Button toggle selection mode](https://material.angular.io/components/button-toggle/overview#button-toggle-mode)

Na parte superior, clicamos na aba "API" e copiamos a linha de código de "*API reference for Angular Material button-toggle*":

```javascript
import {MatButtonToggleModule} from '@angular/material/button-toggle';
Copiar código
```

Logo após voltamos ao VS Code, e colamos na linha 19 do arquivo `app-module.ts`, copiamos o nome do módulo e incluímos em `imports`.

> [app-module.ts](https://github.com/nayannelbatista/3150-jornada-milhas/blob/aula-3/src/app/app.module.ts)

```javascript
// código omitido

import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
  ],

// código omitido
Copiar código
```

Ao retornarmos ao site, clicamos na aba "*Overview*" na parte superior para buscarmos um exemplo. Na documentação, é mencionado o uso do `mat-button-toggle`, que podemos utilizar como botões independentes, mas geralmente são agrupados dentro da tag `mat-button-toggle-group` que é um grupo de botões.

> O `mat-button-toggle` é um componente do Angular Material que oferece um botão de alternância para selecionar uma ou mais opções de um conjunto de opções. Esse componente indica visualmente o estado selecionado ou não selecionado das opções.

Para visualizarmos o exemplo do [Basic button-toggles ](https://material.angular.io/components/button-toggle/overview#button-toggle-overview), clicamos em "*Bold*" e depois no botão "< >" localizado na parte superior direita, na aba "HTML".

Copiamos o seguinte trecho de código retirado da documentação:

```xml
<mat-button-toggle-group name="fontStyle" aria-label="Font Style">
  <mat-button-toggle value="bold">Bold</mat-button-toggle>
  <mat-button-toggle value="italic">Italic</mat-button-toggle>
  <mat-button-toggle value="underline">Underline</mat-button-toggle>
</mat-button-toggle-group>
Copiar código
```

Voltamos ao arquivo `form-busca.component.html` no VS Code, e colamos dentro da `div`:

> form-busca.component.html

```xml
<app-card variant="secundary" class="form-busca">
    <form>
        <div class="flex-container">
            <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
            <mat-button-toggle value="bold">Bold</mat-button-toggle>
            <mat-button-toggle value="italic">Italic</mat-button-toggle>
            <mat-button-toggle value="underline">Underline</mat-button-toggle>
        </mat-button-toggle-group>
        </div>
    </form>
</app-card>
Copiar código
```

Podemos remover os elementos que não iremos utilizar, como o atributo `name`, e alterar o rótulo para "Tipo de passagem". Considerando que o exemplo original possuía três botões e em nossa aplicação temos apenas dois, podemos remover a última linha antes do fechamento da tag `mat-button-toggle-group`.

Substituímos o `Bold` por "IDA E VOLTA" e o `Italic` por "SOMENTE IDA". Logo após removemos os atributos `value="bold"` e o `value="italic"`, e quebramos a linha para facilitar a leitura e para adicionar um ícone de *check*. E podemos remover o `<p>form-busca works!</p>` na primeira linha.

> form-busca.component.html

```xml
<app-card variant="secundary" class="form-busca">
    <form>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle >
                 <mat-icon>ligature</mat-icon>
            IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        </div>
    </form>
</app-card>
Copiar código
```

### Adicionando o ícone no botão

Para isso, usamos `<mat-icon>ligature</mat-icon>` e para adicionar o nome desse ícone vamos analisar na documentação.

Do lado esquerdo, clicamos em "*Icon*" e depois na aba "API" para importarmos o módulo de ícones com a linha de código da seção "*API reference for Angular Material icon*" (Referência de API para o ícone Angular Material):

```javascript
import {MatIconModule} from '@angular/material/icon';
Copiar código
```

Voltamos ao VS Code no arquivo `app-module.ts` e colamos no topo do arquivo e em `imports`:

> app-module.ts

```javascript
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule
  ],

// código omitido
Copiar código
```

Voltando à documentação, para adicionar esses ícones vamos em "*Overview*" na seção "*Font icons with ligatures*" e clicamos em "*Material icons font*". Seremos redirecionados para um [Guia dos ícones do Material Design ](https://developers.google.com/fonts/docs/material_icons?hl=pt-br)e vamos clicar em [Biblioteca de ícones do Material Design ](https://fonts.google.com/icons?hl=pt-br).

Há várias maneiras de adicionar um ícone na aplicação.

O ícone que precisamos está nomeado como "Check" e possui o ícone "✓". Ao selecionarmos ele, temos uma aba do lado direito da tela com alguns trechos de código. Para adicionar este ícone, usamos a tag `MatIcon` e passar o nome do ícone dentro da tag.

Voltamos ao VS Code e removemos o `ligature` e substituímos por `check`. Abaixo da tag `form`, adicionamos o título usando a tag `h2`.

> form-busca.component.html

```xml
<app-card variant="secundary" class="form-busca">
    <form>
        <h2>Passagens</h2>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle >
                 <mat-icon>check</mat-icon>
            IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        </div>
    </form>
</app-card>
Copiar código
```

Para verificarmos como está ficando, vamos ao arquivo `home.component.html` e abaixo de "Promoções" adicionamos o seletor do componente, sendo o `app-form-busca`.

> home.component.html

```css
< !-- código omitido -- >

<h2>Promoções</h2>
<app-form-busca></app-form-busca>

< !-- código omitido -- >
Copiar código
```

Como usamos algumas classes no `form-busca.component.html` vamos colar no `form-busca.component.scss` o CSS desse componente.

> form-busca.component.scss

```css
.form-busca {
  margin: 40px 0;
  display: block;
  .flex-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;
  }
  .input-container {
    margin-bottom: -1.25em;
  }
  .mat-button-toggle-checked {
    background-color: #F7F2FA;
 }
}
Copiar código
```

Após colarmos os estilos da aplicação, abrimos o terminal integrado do VS Code para verificar se a aplicação está sendo executada.

Depois de conferir, acessamos e recarregamos a página da aplicação em localhost:4200. Por enquanto, temos:

![Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida".](https://cdn1.gnarususercontent.com.br/1/723333/e64820df-53c9-43f3-9fce-6b30536710d7.png)

Temos o *card* do formulário e os dois botões.

### Adicionando os chips

![Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".](https://cdn1.gnarususercontent.com.br/1/723333/cd42f427-1ca9-4a56-b727-121428da34ab.png)

Agora vamos adicionar os chips ao formulário. Com base na análise feita no Figma, os chips são semelhantes a tags, etiquetas ou filtros.

Para isso, voltamos à documentação do Angular Material e do lado esquerdo clicamos em "Chips" que nos informa que permitem que as pessoas usuárias visualizem informações, façam seleções, filtrem conteúdo e insiram dados.

E são sempre utilizados dentro de um recipiente. Para criar os chips, começamos com um elemento `<mat-chip-set>`. Em seguida, aninhamos os elementos `<mat-chip>` dentro do `<mat-chip-set>`.

Clicando em "API" copiamos a linha de código da seção "*API reference for Angular Material chips*".

```javascript
import {MatChipsModule} from '@angular/material/chips';
Copiar código
```

E adicionamos no arquivo `app-module.ts`, conforme feito anteriormente.

> app-module.ts

```javascript
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule,
        MatChipsModule
  ],

// código omitido
Copiar código
```

Voltando à documentação, vamos buscar por um exemplo na aba "*Overview*" para colarmos o código na aplicação. No exemplo [Basic chips ](https://material.angular.io/components/chips/overview#chips-overview)clicamos no botão "< >" e copiamos o trecho de código em HTML:

```xml
<mat-chip-listbox aria-label="Fish selection">
  <mat-chip-option>One fish</mat-chip-option>
  <mat-chip-option>Two fish</mat-chip-option>
  <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
  <mat-chip-option color="warn">Warn fish</mat-chip-option>
</mat-chip-listbox>
Copiar código
```

É semelhante ao grupo de botões, onde temos várias opções que ficam dentro de uma lista. Para isso, utilizamos a tag `mat-chip-listbox`, em que cada opção é representada por um `mat-chip-option`.

Colamos esse trecho de código no arquivo `form-busca.component.html` após o fechamento da tag `mat-button-toggle-group`.

> form-busca.component.html

```xml
<app-card variant="secundary" class="form-busca">
    <form>
        <h2>Passagens</h2>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle >
                 <mat-icon>check</mat-icon>
                 IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        <mat-chip-listbox aria-label="Fish selection">
            <mat-chip-option>One fish</mat-chip-option>
            <mat-chip-option>Two fish</mat-chip-option>
            <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
            <mat-chip-option color="warn">Warn fish</mat-chip-option>
        </mat-chip-listbox>
        </div>
    </form>
</app-card>
Copiar código
```

Substituímos o `Fish selection` por `Seleção de passagens` e removemos as seguintes linhas de código:

```xml
<mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
<mat-chip-option color="warn">Warn fish</mat-chip-option>
Copiar código
```

Vamos deixar as opções fixas, por enquanto. Para isso, substituímos o `One fish` por `1 adulto` e `Two fish` por `Econômica`. Podemos deixar a primeira opção selecionada por padrão, adicionando o `selected`.

> form-busca.component.html

```xml
<app-card variant="secundary" class="form-busca">
    <form>
        <h2>Passagens</h2>
        <div class="flex-container">
            <mat-button-toggle-group aria-label="Tipo de passagem">
            <mat-button-toggle>
                 <mat-icon>check</mat-icon>
                 IDA E VOLTA 
            </mat-button-toggle>
            <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
        </mat-button-toggle-group>
        <mat-chip-listbox aria-label="Seleção de passagens">
            <mat-chip-option selected>1 Adulto</mat-chip-option>
            <mat-chip-option>Econômica</mat-chip-option>
        </mat-chip-listbox>
        </div>
    </form>
</app-card>
Copiar código
```

### Testando na aplicação

Acessando a aplicação, temos:

![Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica".](https://cdn1.gnarususercontent.com.br/1/723333/e0319968-2a89-4cfb-a1b2-5f4d4d26e208.png)

Temos agora o grupo de botões e de chips.

### Conclusão

No próximo vídeo, continuaremos a adicionar os elementos restantes do formulário.

Até lá!

# 04 **Para saber mais: agrupamentos no Angular Material**

O componente `mat-button-toggle`

Um dos elementos fornecidos pelo Angular Material é o `mat-button-toggle`, que permite às pessoas desenvolvedoras criar botões que podem ser alternados entre estados ativos e inativos.

## Benefícios do uso do `mat-button-toggle-group`

Embora o "button toggle" possa ser utilizado individualmente, é comum utilizá-lo em conjunto com o elemento "mat-button-toggle-group". Esse recurso de agrupamento proporciona diversos benefícios, como a possibilidade de definir uma aparência específica para os botões através do atributo `appearance` e a opção de seleção de múltiplos botões ao adicionar o atributo `multiple`, como você pode observar no exemplo a seguir:

```xml
      <h3>Exemplo seleção múltipla e atributo appearance</h3>
      <mat-button-toggle-group appearance="legacy" name="ingredientes" aria-label="Ingredientes" multiple>
        <mat-button-toggle value="farinha">Farinha</mat-button-toggle>
        <mat-button-toggle value="ovos">Ovos</mat-button-toggle>
        <mat-button-toggle value="acucar">Açucar</mat-button-toggle>
      </mat-button-toggle-group>
Copiar código
```

## Aumente o potencial dos componentes com as melhores práticas do Angular Material

Ao utilizar o `mat-button-toggle` ou outros componentes, é importante seguir as práticas recomendadas pela [documentação do Angular Material](https://material.angular.io/components/categories). Essas práticas garantem o uso correto dos componentes e proporcionam uma melhor organização do código. Além disso, muitos componentes do Angular Material possuem comportamentos de dependência ou necessitam ser agrupados com outras tags para fornecer recursos adicionais, como é o caso do `mat-chip`, `mat-radio-button`, entre outros.

Portanto, ao utilizar o Angular Material, é fundamental estar atento às diretrizes e melhores práticas fornecidas pela documentação, a fim de aproveitar ao máximo os recursos oferecidos pelos componentes e garantir um código bem estruturado e de fácil manutenção.

# 05 **Campos do formulário**

![Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".](https://cdn1.gnarususercontent.com.br/1/723333/cd42f427-1ca9-4a56-b727-121428da34ab.png)

**Vinícios:** Iniciamos o formulário de busca de passagens, onde temos um título indicando o propósito do formulário. Também incluímos dois botões para selecionar se é uma busca apenas de ida ou de ida e volta. Além disso, adicionamos indicadores para a quantidade de pessoas e o tipo de passagem.

Para aprimorar a experiência da pessoa usuária ao definir a origem e o destino, iremos utilizar os ícones do Material Design, garantindo uma experiência visualmente agradável e intuitiva. Observem que essas opções de campos podem ser trocadas.

Vamos dar início ao desenvolvimento dessa estrutura visual, não é mesmo, Nay?

**Nayanne:** Isso mesmo, começaremos a desenvolver os campos do formulário de busca.

## Criando os campos do formulário

> [Angular Material](https://material.angular.io/components/categories)

**Nayanne:** Na documentação do Angular Material, do lado esquerdo clicamos em [Form field ](https://material.angular.io/components/form-field/overview). Nesta seção temos os campos do formulário que precisamos, onde temos alguns exemplos:

* [Simple form field ](https://material.angular.io/components/form-field/overview#form-field-overview)("Campo de formulário simples")
* [Form field appearance variants ](https://material.angular.io/components/form-field/overview#form-field-appearance)("Variantes de aparência do campo de formulário")

Temos o modelo simples e também algumas variantes de aparência. Ao analisarmos no Figma, podemos utilizar a segunda opção de variantes de aparência do *Form field*.

Mas antes clicamos na aba "API" e copiamos a linha da importação:

> API reference for Angular Material form-field

```javascript
import {MatFormFieldModule} from '@angular/material/form-field';
Copiar código
```

No VS Code, colamos no arquivo `app-module.ts` e adicionamos aos `imports`:

> app-module.ts

```javascript
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule,
        MatChipsModule,
        MatFormFieldModule
  ],

// código omitido
Copiar código
```

Voltando à documentação, clicamos no botão "< >", e temos:

```xml
<p>
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
Copiar código
```

Mas iremos copiar somente o seguinte trecho:

```xml
<mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
</mat-form-field>
Copiar código
```

Após copiar o código voltamos ao arquivo `form-busca.component.html` e após o fechamento a tag `</div>` criamos outra `div` para representar a linha seguinte dos campos. Na sequência, colamos o trecho de código que copiamos da documentação.

> form-busca.component.html

```javascript
<app-card variant="secundary" class="form-busca">
    <form>
            <h2>Passagens</h2>
            <div class="flex-container">
                    <mat-button-toggle-group aria-label="Tipo de passagem">
                        <mat-button-toggle>
                             <mat-icon>check</mat-icon>
                             IDA E VOLTA 
                        </mat-button-toggle>
                    <mat-button-toggle >SOMENTE IDA</mat-button-toggle>
            </mat-button-toggle-group>
            <mat-chip-listbox aria-label="Seleção de passagens">
                    <mat-chip-option selected>1 Adulto</mat-chip-option>
                    <mat-chip-option>Econômica</mat-chip-option>
            </mat-chip-listbox>
            </div>
            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Outline form field</mat-label>
                    <input matInput placeholder="Placeholder">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                    <mat-hint>Hint</mat-hint>
                </mat-form-field>
            </div>
    </form>
</app-card>
Copiar código
```

Substituímos "*Outline form field*" por "Origem" e adicionamos esse campo ao `placeholder`. Removemos a tag `<mat-hint>`, pois não é necessária, uma vez que é uma dica que fica abaixo do campo e não temos isso no projeto.

> form-busca.component.html

```xml
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                </mat-form-field>
            </div>
    </form>
</app-card>
Copiar código
```

Agora precisamos dos **ícones**, mas antes vamos verificar a aplicação.

Ao voltarmos para analisar a aplicação, observamos que os campos que montamos na aula anterior estão quebrados.

**Vinícios:** Acredito que tenhamos esquecido de importar o componente de `input`. Importamos o `field`, mas não me lembro de termos importado o `input`.

**Nayanne:** É verdade.

Vamos clicar com o botão direito na aplicação e depois em "Inspecionar", para verificarmos o erro no console.

> O erro abaixo foi parcialmente transcrito.

> ERROR Error: mat-form-field core.mjs:10132 must contain a MatFormFieldControl.
>
> at getMatFormFieldMissingControlError (form-field.mjs:360:12)
>
> at MatFormField.\_assertFormFieldControl (form-field.mjs:628:19)
>
> at MatFormField.ngAfterContentInit (form-field.mjs:529:14) at callHookInternal (core.mjs:3806:14)
>
> …

Informa que o `mat-form-field` precisa ter um `MatFormFieldControl`. Esse campo requer um controle associado a ele.

Na documentação, em "Form field", descemos a página até o final para verificar os erros que podem ocorrer, onde temos "*Error: mat-form-field must contain a MatFormFieldControl*".

Nessa seção do erro, é explicado que precisamos adicionar um controle. Isso ocorre porque o Angular Material está integrado ao Angular, e como não estamos lidando com a parte de controle de formulário, é necessário aplicar uma solução temporária.

> Texto traduzido e retirado da documentação **Angular Material**:

> Este erro ocorre quando você não adicionou um controle de campo de formulário ao seu campo de formulário. Se o seu campo de formulário contiver um elemento `<input>` ou `<textarea>` nativo, certifique-se de ter adicionado a diretiva `matInput` a ele e de ter importado `MatInputModule`. Outros componentes que podem atuar como um controle de campo de formulário incluem `<mat-select>`, `<mat-chip-list>` e qualquer controle de campo de formulário personalizado que você criou.

Vamos importar o `MatInputModule`.

### Importando o `MatInputModule`

> [Input](https://material.angular.io/components/input/overview)

Do lado esquerdo clicamos em "Input", e na aba "API" copiamos a linha de código com a importação:

> API reference for Angular Material input

```javascript
import {MatInputModule} from '@angular/material/input';
Copiar código
```

E importamos no arquivo `app-module.ts`:

> app-module.ts

```javascript
// código omitido

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// código omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
        MatIconModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule
  ],

// código omitido
Copiar código
```

Acessando a aplicação, temos:

![Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, há um campo de preenchimento chamado "Origem".](https://cdn1.gnarususercontent.com.br/1/723333/6a9f2eb3-5f39-4303-8ab2-f224b0ebcdd1.png)

Agora está funcionando.

### Adicionando os ícones

Para alterar os ícones dos campos, vamos ao arquivo `form-busca.component.html`.

É interessante que o Angular Material nos traz uma forma de inserirmos os ícones onde desejarmos através do atributo `matSuffix`. Este atributo adiciona o ícone no final do campo, e para adicionar no começo usamos o `matPrefix`.

Portanto, copiamos a linha com o `matSuffix` e colamos abaixo do campo "Origem", alterando para `matPrefix`. Em seguida, alteramos os nomes dos ícones, onde a lupa é o `search`.

> form-busca.component.html

```xml
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix></mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
            </div>
    </form>
</app-card>
Copiar código
```

Vamos consultar a documentação para verificar o ícone correspondente ao avião decolando.

> [Google Fonts](https://fonts.google.com/icons?hl=pt-br)

Buscamos por "*plane*" que significa avião em inglês e observamos que já aparecem as opções "*Flight Takeoff*" (decolando) e "*Flight Land*" (pousando). Para verificar o nome dos ícones, clicamos neles e na janela do lado direito copiamos o que consta na seção "*Inserting the icon*", sendo:

```xml
<span class="material-symbols-outlined">
flight_takeoff
</span>
Copiar código
```

Copiamos somente o nome `flight_takeoff` e colamos na tag `matPrefix`

> form-busca.component.html

```xml
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
            </div>
    </form>
</app-card>
Copiar código
```

Ao acessar a aplicação, agora temos o ícone do avião decolando à esquerda do botão "Origem" e à direita temos o ícone da lupa.

Analisando no Figma, temos um botão de mudança entre os campos "Origem" e "Destino".

**Vinícios:** Vale a pena comentar que, apesar de ter um ícone, ele representa uma ação da pessoa usuária e estará dentro de um botão.

**Nayanne:** Isso mesmo.

Pesquisando por "*Sync*" na documentação, obtemos que o nome do botão é "*Sync alt*".

```undefined
sync_alt
Copiar código
```

No VS Code, adicionamos na linha 26 digitando `<button mat-icon-button> </button>`. entro colocamos `<mat-icon>sync_alt</mat-icon>`.

> form-busca.component.html

```xml
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
                <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
            </div>
    </form>
</app-card>
Copiar código
```

Analisando na aplicação, observamos que o botão está presente, mas falta uma classe. Para corrigir isso, na linha 18, onde temos o `mat-form-field`, adicionamos `class="input-container"`.

> form-busca.component.html

```xml
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field class="input-container" appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
                <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
            </div>
    </form>
</app-card>
Copiar código
```

Agora está alinhado com o campo "Origem".

Para fazermos o outro campo copiamos da linha 18 até a 25 do código e colamos após o fechamento da tag `</button>`:

> Trecho para ser copiado:

```javascript
<mat-form-field class="input-container" appearance="outline">
    <mat-label>Origem</mat-label>
    <mat-icon matPrefix>
        flight_takeoff
    </mat-icon>
    <input matInput placeholder="Origem">
    <mat-icon matSuffix>search</mat-icon>
</mat-form-field>
Copiar código
```

Vamos ajustar com o nome do outro ícone e botão:

> form-busca.component.html

```javascript
< !-- código omitido -- > 

            <div class="flex-container">
                <mat-form-field class="input-container" appearance="outline">
                    <mat-label>Origem</mat-label>
                    <mat-icon matPrefix>
                        flight_takeoff
                    </mat-icon>
                    <input matInput placeholder="Origem">
                    <mat-icon matSuffix>search</mat-icon>
                </mat-form-field>
                <button mat-icon-button>
        <mat-icon>sync_alt</mat-icon>
      </button>
      <mat-form-field class="input-container" appearance="outline">
        <mat-label>Destino</mat-label>
        <mat-icon matPrefix>
          flight_land
        </mat-icon>
        <input matInput placeholder="Destino">
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
            </div>
    </form>
</app-card>
Copiar código
```

Na aplicação, obtemos:

![Na parte superior centralizada à esquerda, temos o título "Passagens". Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, há dois campos de preenchimento chamados "Origem" e "Destino" com um botão de mudança entre eles. Ambos estão com os respectivos ícones.](https://cdn1.gnarususercontent.com.br/1/723333/5fa7f041-4b7d-4680-bf8e-f79f884ab6bb.png)

> [Arquivo `form-busca.component.html` no repositório do GitHub](https://github.com/nayannelbatista/3150-jornada-milhas/blob/aula-3/src/app/shared/form-busca/form-busca.component.html)

### Conclusão

**Nayanne:** No próximo vídeo, continuaremos a montar o formulário de busca, incluindo os campos para a seleção de dados.

Até mais!

# 06 **Criando campos de formulário**

Imagine que você está trabalhando como dev em um projeto Angular e implementou um campo de formulário utilizando a propriedade `matInput` do Angular Material, como você pode ver no código a seguir:

```xml
<form>
    <mat-label>Campo 1</mat-label>
    <input matInput appearance="outline" value="1">
</form>
Copiar código
```

No entanto, ao testar o código, você percebeu que o campo não está funcionando corretamente e o layout do `input` está quebrado. A propriedade de `appearance` que foi definida como `outline` também não está sendo aplicada.

Observe as alternativas a seguir e assinale o código que apresenta a solução para esse problema:

[ ]

```xml
<form>
      <mat-label>Textarea</mat-label>
      <textarea matInput value="1"></textarea>
</form>
```

[X]

```xml
<form>
    <mat-form-field appearance="outline">
      <mat-label>Campo 1</mat-label>
      <input matInput placeholder="Informe valor 1" value="1">
   </mat-form-field>
</form>
```

Quando criamos componentes de formulário como `input`, `textarea`, `select`, entre outros com o Angular Material, precisamos envolver esse campo com o `<mat-form-field>`. Esse componente é o que permite que esses campos recebam os estilos como a propriedade `appearance` ou a mensagem de dica sobre o campo(`mat-hint`).[ ]

```xml
<form>
    <mat-form-field>
        <mat-label>Campo 1</mat-label>
        <mat-input placeholder="Informe valor 1" value="1"></mat-input>
    </mat-form-field>
</form>
```

Esse código utiliza a sintaxe correta de envolver o input com `<mat-form-field>`, porém utiliza a sintaxe incorreta para criar o `input`: `<mat-input></mat-input>`. A sintaxe correta é `<input matInput>` para criar um campo de entrada com o estilo do Angular Material.[ ]

```xml
<form>
    <mat-label>Campo 1</mat-label>
    <mat-form-field appearance="outline" placeholder="Informe valor 1" value="1">
</form>
```

O `<mat-form-field>` funciona como um `wrapper`, ou seja, ele deve envolver o código dos campos de um formulário. Aqui, ele foi usado como se fosse um `input`, o que não é sua função. Além disso, o `<mat-form-field>` também está sem a tag de fechamento, o que torna o código inválido. O correto seria fechar a tag `<mat-form-field>` utilizando `</mat-form-field>`.

# 07 **Para saber mais: ícones do Material Design**

Os ícones do Material Design são um conjunto de ícones desenvolvidos pelo Google. Eles fornecem uma vasta coleção de símbolos que podem ser usados para melhorar a aparência e a usabilidade de interfaces de usuário.

Para importar os ícones do Material Design em seu projeto, você pode seguir os seguintes passos:

* Acesse a biblioteca de ícones do Material Design [clicando aqui](https://fonts.google.com/icons?hl=pt-br);
* Na biblioteca, você encontrará uma lista de todos os ícones disponíveis. Clique no ícone desejado para ver mais detalhes, como o nome do ícone e a classe CSS correspondente;
* Para usar os ícones em seu projeto, você pode selecioná-lo e obter o código HTML ou a classe CSS para incorporá-lo em seu projeto;
* Ainda, se estiver usando o Angular Material, como fizemos na aula, basta importar o `MatIconModule` no `app.module.ts` e adicionar seu `<mat-icon>` com a propriedade `fontIcon=""` recebendo o nome do ícone desejado, como no exemplo abaixo:

```xml
<mat-icon fontIcon="home"></mat-icon>
Copiar código
```

Também é possível adicionar um ícone diretamente entre as tags, como fizemos em aula:

```css
<mat-icon>home</mat-icon>
Copiar código
```

Ambas as implementações de código acima resultam na exibição do ícone `home`:

![ícone “home” sendo exibido, com fundo cinza claro e o contorno de uma casinha na cor preta](https://cdn3.gnarususercontent.com.br/3150-angular-componentizacao-design-angular-material/image7.png)

> Caso você queira explorar mais as possibilidades de uso dos ícones, você pode acessar o [Guia dos ícones do Material Design clicando aqui](https://developers.google.com/fonts/docs/material_icons?hl=pt-br).


# 08 **Campos para data**


![Na parte superior centralizada à esquerda, temos o título "Passagens" em destaque. Logo abaixo, alinhados horizontalmente, encontram-se dois botões. O primeiro é intitulado "Ida e volta", seguido do botão "Somente ida". Na área à direita, são exibidos dois chips, um identificado como "1 Adulto" e o outro como "Econômica". Em seguida, alinhados horizontalmente, há quatro campos de preenchimento: "Origem", "Destino", "Data de Ida" e "Data de Volta". À direita desses campos, há um botão na cor roxa com o texto "Buscar".](https://cdn1.gnarususercontent.com.br/1/723333/cd42f427-1ca9-4a56-b727-121428da34ab.png)

**Vinícios:** Estamos nos aproximando da parte final do formulário de busca, faltando apenas os campos de "Data de Ida" e "Data de Volta", além do botão de ação com o texto "Buscar". No entanto, a aplicação será um pouco diferente, não é, Nay?

**Nayanne:** Isso mesmo.

**Esses campos ficarão de desafio para você!** Esses campos são semelhantes aos campos "Origem" e "Destino" que criamos, porém com algumas diferenças nos detalhes.

Iremos fornecer algumas dicas sobre como criá-los. Ao analisar a documentação, identificamos que o componente necessário para esse cenário é o **Datepicker**.

> [Datepicker](https://material.angular.io/components/datepicker/overview)

É necessário seguir o mesmo procedimento que fizemos anteriormente: importar o módulo na seção "*API reference for Angular Material datepicker*" da aba "API", inserir o módulo no array de imports e, em seguida, selecionar um [exemplo ](https://material.angular.io/components/datepicker/overview#datepicker-overview)na aba "*Overview*" da documentação que seja semelhante ao que estamos utilizando.

> *API reference for Angular Material datepicker*

```javascript
import {MatDatepickerModule} from '@angular/material/datepicker';
Copiar código
```

Clicando no botão "< >" da documentação, temos:

```xml
<mat-form-field>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
Copiar código
```

Basta copiar o trecho de código e colar no arquivo, adaptando-o conforme as necessidades do projeto.

> Lembrando que, ao final da documentação, encontramos algumas soluções para possíveis problemas que possam surgir.

**Vinícios:** Caso encontre dificuldades, não se preocupe, pois iremos disponibilizar o gabarito para auxiliar no processo.

**Nayanne:** Além dos campos "Data de Ida" e "Data de Volta", não nos esqueceremos de adicionar o botão "Buscar" para submeter esses dados quando adicionarmos as funcionalidades.

Dessa forma, concluímos o formulário de busca.

**Vinícios:** Agora o desafio está sob sua responsabilidade!


# 09 **Desafio: crie os campos para data**

Nas aulas anteriores, aprendemos a construir nosso formulário de busca, adicionamos o `button-toggle`, os `chips` e também os campos de origem e destino. Agora é com você!

Seguindo o design do figma, para que o layout do formulário de busca fique completo, precisamos dos campos de Data de ida e Data de volta, além de um botão de `buscar`. Esse é o momento de colocar seu aprendizado em prática para construir esses componentes que faltaram.

Lembre-se que, se você se deparar com algum erro ao longo da criação desses componentes, na [documentação do Angular Material](https://material.angular.io/components/datepicker/overview), rolando até o final da página, você pode encontrar os erros mais comuns e suas soluções. Além disso, você também pode conferir o gabarito a seguir. É muito importante que você faça esse desafio e exercite sua capacidade de lidar com os *bugs* que podem surgir pelo caminho.


# 10 **O que aprendemos?**

Nessa aula, você aprendeu como:

* Utilizar os componentes de `chips` e `button-toggle` do Angular Material;
* Criar os campos de origem e destino do Jornada Milhas;
* Incluir **ícones do Material Design** na aplicação;
* Construir campos de data com o `datepicker` do Angular Material.
