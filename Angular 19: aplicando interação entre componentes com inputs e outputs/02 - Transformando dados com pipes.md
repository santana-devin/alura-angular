# 01 **Projeto da aula anterior**

Para acompanhar o instrutor, você pode [baixar o projeto da aula anterior](https://github.com/alura-cursos/4456-angular-19-curso-2/archive/refs/heads/aula-01.zip) ou [acessar os arquivos do GitHub do projeto](https://github.com/alura-cursos/4456-angular-19-curso-2/tree/aula-01).

# 02 **Formatando data com DatePipe**

Começamos a codificar o componente de banner da nossa aplicação. Por enquanto, colocamos apenas uma data e uma apresentação com o nome fictício da pessoa usuária.

No entanto, há um problema: a data inserida está completamente estática, mostrando uma quinta-feira e uma data de 2022, que está desatualizada. O que desejamos é que esse banner **mostre a data atual** , algo comum em aplicações bancárias, por exemplo.

Vamos explorar como dinamizar essa data para que ela corresponda ao dia em que a pessoa usuária estiver acessando a aplicação.

## Inserindo a data dinâmica no componente

Vamos abrir o VS Code para realizar essa modificação. Queremos dinamizar essa informação no TypeScript do banner, portanto, abriremos o arquivo `banner.component.ts`.

Em seu interior, entre as chaves da classe do componente `Banner`, criaremos uma nova propriedade chamada `dataAtual`. Ela será igual a `new Date()` com "D" maiúsculo.

> `banner.component.ts`:

```typescript hljs
export class BannerComponent {
    dataAtual = new Date();
}

```

Ao criar um novo objeto do tipo `Date`, próprio do JavaScript, ele será inicializado com as informações do momento em que executarmos essa linha de código. Assim, quando o componente for criado, a data atual será capturada. Podemos salvar esse arquivo.

## Interpolando a data no template HTML

Voltando ao *template* do componente, ou seja, no `banner.component.html`, podemos acessar o `span` chamado "data", apagar o texto estático da data atual, abrir duas chaves e fechá-las para realizar uma interpolação e obter a propriedade `dataAtual`.

> `banner.component.html`:

```html hljs language-xml
<span class="data">{{ dataAtual }}</span>

```

Ao salvar o arquivo e verificar no navegador, a data aparecerá com uma formatação peculiar:

> Thu Jan 30 2025 15:25:10 GMT-0300 (Horário Padrão de Brasília)

Isso ocorre porque, ao utilizar o objeto `Date` diretamente no *template* , ele é automaticamente convertido para o formato string, que é o padrão.

## Utilizando o DatePipe para formatar a data

Para adequar esse formato ao especificado no Figma, que é "Dia da semana, dia, mês e ano em numerais, separados por barra", precisamos transformar essa string. Embora seja possível fazer isso com JavaScript puro, seria trabalhoso comparado à solução que vamos apresentar.

De volta ao VS Code, no `span` do HTML, logo após `dataAtual`, dentro da interpolação, colocaremos o caractere de barra vertical (`|`), conhecido como ***pipe*** No teclado, ele costuma estar na mesma tecla da barra invertida.

Após o *pipe* , escreveremos `date`, que usaremos para converter o tipo de dado.

```html hljs language-xml
<span class="data">{{ dataAtual | date }}</span>

```

No entanto, o VS Code indica que não consegue encontrar um *pipe* chamado `date`, então precisamos importá-lo. No arquivo TypeScript do banner, entre os colchetes do *array* de `imports`, escreveremos `DatePipe`.

> `banner.component.ts`:

```typescript hljs
imports: [DatePipe],

```

O VS Code sugerirá importar isso de `@angular/common`. Basta selecionar essa sugestão na lista suspensa para gerar o código abaixo no topo do arquivo.

```typescript hljs
import { DatePipe } from '@angular/common';

```

Com isso, não há mais erros de código. Salvaremos o arquivo e voltaremos ao HTML para verificar que o erro de lá também desapareceu.

O que acontecerá se passarmos essa sintaxe de *pipe* e o nome `date`? Salvaremos o arquivo, voltaremos ao navegador e notaremos que algo mudou.

> Jan 30, 2025

A mensagem exibe a data de hoje, mas com uma formatação diferente. No entanto, ainda não está na formatação que mostramos no Figma.

## Personalizando o formato da data com parâmetros

Vamos ao VS Code, no arquivo HMTL, para personalizar esse formato. No `DatePipe`, podemos passar parâmetros. Para passar um parâmetro para um *Pipe* , escrevemos dois pontos.

O primeiro parâmetro que o `date` pode receber é uma string. Colocaremos aspas duplas (podem ser duplas ou simples) e o parâmetro, que será exatamente o formato que queremos para o texto da data.

Para o `DatePipe` em específico, esse formato pode receber uma combinação específica de caracteres, que realizará conversões que entenderemos melhor após escrever. Vamos colocar quatro "E" maiúsculos.

> `banner.component.html`:

```html hljs language-xml
<span class="data">{{ dataAtual | date:"EEEE" }}</span>

```

Ao fazer isso, salvar o arquivo e voltar ao navegador, já aparece "Thursday".

> Thursday

"Thursday" significa quinta-feira em inglês. No dia em que o vídeo foi gravado, realmente era quinta-feira.

Funcionou. O código está mostrando o dia da semana.

Voltando ao código, colocaremos uma vírgula, espaço, e em seguida `dd/MM/yyyy`.

```html hljs language-xml
<span class="data">{{ dataAtual | date:"EEEE, dd/MM/yyyy" }}</span>

```

Ao salvar o arquivo e voltar ao navegador, já está no formato desejado. É o mesmo formato do Figma: dia da semana, vírgula, dia do mês, barra, número do mês e número do ano.

> Thursday, 30/01/2025

## Compreendendo o uso e potencial dos *pipes*

Esse `DatePipe` faz parte de um conjunto de *pipes* que o Angular fornece. Os *pipes* servem para transformar dados do JavaScript e **formatá-los** especificamente para o *template* do componente.

Sempre os utilizaremos no HTML para realizar transformações de forma facilitada. Se fizéssemos isso com JavaScript, daria muito mais trabalho.

Sobre o parâmetro que passamos, que é uma string, e essas letras que parecem aleatórias: para personalizar da forma que preferirmos, podemos consultar a [documentação do `DatePipe`](https://cursos.alura.com.br/course/angular-19-aplicando-interacao-componentes-inputs-outputs/task/angular.dev/api/common/DatePipe?tab=usage-notes).

Em seu interior, na seção que aborda o parâmetro do `DatePipe`, descobriremos que é possível passar alguns parâmetros já prontos para formatos específicos, como as strings `'short'`, `'medium'` e `'long'`. Se descermos a página, encontraremos uma tabela explicando o que cada letra representa — por exemplo, na seção "*Weekday* " (dia da semana), encontraremos os quatro "E" maiúsculos, mostrando que exibirá o dia da semana.

Essa é a forma de usar o `DatePipe` da maneira mais personalizada possível. Ainda conheceremos outros *pipes* ao longo do curso.

## Conclusão

Por enquanto, nossa missão de mostrar a data de hoje foi realizada. Só falta traduzir essa informação, o que faremos em breve.

# 03 **Para saber mais: documentação do DatePipe**

O `DatePipe` é um dos pipes mais utilizados no Angular, especificamente para a formatação de datas de maneira prática. Com ele, é possível exibir datas em diferentes formatos, personalizar a exibição conforme a localidade e criar padrões customizados.

Minha sugestão é que você acesse a documentação do [DatePipe](https://angular.dev/api/common/DatePipe?tab=usage-notes) para conferir seus detalhes de uso! Aproveite para explorar os exemplos disponíveis e testar diferentes opções de formatação.

Bons estudos!

# 04 **Criando componentes BoasVindas e Conta**

Conseguimos dinamizar a data que aparece no nosso banner para mostrar o dia de hoje. Além disso, utilizamos um recurso muito interessante do Angular, um *pipe* (especificamente o `DatePipe`), para formatar a data exatamente no formato desejado: dia da semana, vírgula, dia do mês, barra, número do mês, barra, número do ano.

Atualmente, a data ainda está em inglês, mas vamos corrigir isso em breve.

## Compreendendo o uso de pipes no Angular

Falando um pouco mais sobre o termo *pipe* , que significa "cano" em português, podemos imaginar que aplicamos *pipes* para **transformar dados** .

Sempre temos um dado do JavaScript e, ao passá-lo por um "cano", ele sofre transformações e formatações. Do outro lado, o dado sai formatado, transformado e tratado da forma desejada. No caso da data, pegamos um objeto do JavaScript do tipo `Date` e o transformamos em uma string formatada no padrão desejado.

Concluímos essa parte inicial e agora vamos codificar o restante do banner. Ao acessar o Figma, notamos que no lado direito do banner, temos o saldo, que mostra a conta e o valor em reais.

É importante que a pessoa saiba o saldo em uma conta bancária. Vamos codificar essa parte.

## Componentizando a seção de boas-vindas

No VS Code, com o arquivo HTML do banner aberto, vamos trabalhar na seção do saldo da conta. Podemos adicionar essa parte abaixo da `section` de boas-vindas e continuar codificando.

No entanto, percebemos que o código do banner está aumentando de tamanho. A seção de boas-vindas já possui informações próprias, como a data atual e o uso do `DatePipe`. Podemos **componentizar** essa `section` de boas-vindas, criando um componente separado, e depois criar um componente apenas para a parte da conta. Essa prática ajuda a manter o código organizado e facilita a localização.

Primeiro, vamos abrir o terminal integrado e utilizar o comando `ng g c` para gerar um componente no caminho `banner/boas-vindas`.

```bash hljs
ng g c banner/boas-vindas

```

Após executar o comando, uma nova pasta chamada "boas-vindas" foi criada dentro da pasta "banner", contendo o novo componente. Essa prática é útil quando queremos criar um componente que será utilizado apenas por outro componente, mantendo-o como um componente filho.

Feito isso, vamos voltar ao arquivo HTML da pasta "banner" e recortar a `section` de boas-vindas, substituindo-a por `<app-boas-vindas>`.

> `banner.component.html`:

```html hljs language-xml
<header class="banner">
    <app-boas-vindas />
</header>
Copiar código
```

Ao digitar essa *tag* , aceitaremos a sugestão do VS Code, que importará automaticamente o componente no TypeScript.

Salvaremos o arquivo e verificaremos a importação no TypeScript.

> `banner.component.ts`:

```typescript hljs
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";
Copiar código
```

Acessando o navegador, verificaremos que o texto "boas-vindas works!" aparece.

Voltando ao código, abriremos a pasta "boas-vindas" para editar o HTML do componente, no qual substituiremos o parágrafo pelo código copiado anteriormente.

> `boas-vindas.component.html`:

```html hljs language-xml
<section class="boas-vindas">
    <span class="data">{{ dataAtual | date:"EEEE, dd/MM/yyyy" | titlecase }}</span>

    <h1 class="titulo">Olá, Evaldo! :)</h1>
</section>
Copiar código
```

Esse código ainda não tem acesso à data atual nem ao `DatePipe`, portanto, precisamos transferir essas importações. No arquivo TypeScript do banner, recortaremos a propriedade `dataAtual` da classe `BannerComponent` e removeremos o `DatePipe` da lista de `imports`, que estava sublinhado em amarelo, indicando que não estava mais sendo utilizado nesse componente.

O código desse arquivo ficou assim:

> `banner.component.ts`:

```typescript hljs
import { Component } from '@angular/core';
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";

@Component({
    selector: 'app-banner',
    imports: [BoasVindasComponent, ],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css'
})
export class BannerComponent {
}
Copiar código
```

## Transferindo lógica e estilo para o novo componente

Após salvar o arquivo, voltaremos para o componente de boas-vindas, abriremos o arquivo TypeScript e colaremos a data atual dentro da classe `BoasVindasComponent`.

> `boas-vindas.component.ts`:

```typescript hljs
export class BoasVindasComponent {
    dataAtual = new Date();
}
Copiar código
```

No array de `imports`, escreveremos `DatePipe`, importando-o de `@angular/common`.

```typescript hljs
imports: [DatePipe],
Copiar código
```

```typescript hljs
import { DatePipe } from '@angular/common';
Copiar código
```

Salvaremos o arquivo, voltaremos para o HTML de boas-vindas e verificaremos que os erros desapareceram. Ao retornar ao navegador, observaremos que o funcionamento foi restabelecido.

No entanto, a estilização ainda não está como antes, pois precisamos **transferir o código CSS** ao realizar uma componentização.

Voltando ao código, abrimos o CSS da pasta "banner" e localizaremos o código relacionado à parte de boas-vindas: os blocos `.boas-vindas`, `.data` e `.titulo`.

Recortaremos esse trecho, salvaremos o arquivo e, no componente de boas-vindas, abriremos o CSS, que está vazio, e colaremos o código.

> `boas-vindas.component.css`:

```css hljs
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
Copiar código
```

Após salvar o arquivo, verificaremos no navegador que a estilização foi restaurada. Com isso, o componente está encapsulado, guardando essas informações.

## Criando o componente da conta

Vamos criar um novo componente para a parte da conta, que **exibirá a conta corrente e o saldo** . No VS Code, abriremos o terminal integrado e recuperaremos o último comando `ng gc banner`, substituindo "boas-vindas" por "conta", para criar o componente dentro da pasta do banner.

```bash hljs
ng g c banner/conta
Copiar código
```

Após isso, fecharemos o terminal. Também fecharemos todas as abas de arquivos com o atalho "Ctrl + K + W". Em seguida, abriremos o explorador lateral e verificaremos a nova pasta "conta" dentro da pasta "banner".

* banner
  * boas-vindas
  * conta

Sabendo que ela vem com um texto padrão, abriremos o HTML do banner e, logo abaixo de `app-boas-vindas`, importaremos também `app-conta`.

Também adicionaremos as classes necessárias no `banner component`. No `app-boas-vindas`, adicionaremos a classe `boas-vindas`, e no `app-conta`, a classe `conta`.

> `banner component.html`:

```html hljs language-xml
<header class="banner">
    <app-boas-vindas class="boas-vindas" />
    <app-conta class="conta" />
</header>
Copiar código
```

Em seguida, salvaremos o arquivo.

## Estruturando o HTML do componente Conta

Abriremos o arquivo TypeScript do banner e salvaremos a importação automática do `ContaComponent`.

> `banner.component.ts`:

```typescript hljs
import { ContaComponent } from "./conta/conta.component";
Copiar código
```

No array de `imports`, verificaremos que o `ContaComponent` foi adicionado.

```typescript hljs
imports: [BoasVindasComponent, ContaComponent],
Copiar código
```

Após salvar, desenvolveremos o HTML do `ContaComponent`. Abriremos a pasta "conta" e o HTML `conta.component`, que inicialmente contém apenas o parágrafo "conta works". Conferindo no navegador, esse texto aparece alinhado à direita conforme desejado, devido a algumas `div`s e estilizações prévias.

> `conta.component.html`:

```html hljs language-xml
<p>conta works!</p>
Copiar código
```

Voltando ao código, removeremos esse parágrafo padrão e estruturaremos o componente como uma `section` com a classe `conta`. Em seu interior, inseriremos um `h2` com a classe `titulo` e o texto "Saldo".

Abaixo do `h2`, adicionaremos uma `div` com a classe `divisoria`, puramente visual, que aparecerá debaixo do saldo conforme o Figma. Abaixo da divisória, teremos um `span` com a classe `tipo-conta` e o texto "Conta Corrente".

Por fim, teremos outro `span` com a classe `saldo`, contendo uma interpolação com o valor 2500.

```html hljs language-xml
<section class="conta">
    <h2 class="titulo">Saldo</h2>
    <div class="divisoria"></div>
    <span class="tipo-conta">Conta corrente</span>
    <span class="saldo">{{ 2500 | currency:"BRL" }}</span>
</section>
Copiar código
```

Ao salvar esse arquivo e voltar ao navegador, verificaremos que temos o título "Saldo" e abaixo dele, o texto "Conta corrente" junto ao número 2500. Entretanto, o texto ainda não está estilizado.

Voltando ao código, abriremos o CSS da pasta "conta" e colaremos o código abaixo, formatando-o usando o atalho "Alt + Shift + F".

> `conta.component.css`:

```css hljs
.divisoria {
    height: 0.125rem;
    background: var(--preto);
}

.tipo-conta {
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
}

.saldo {
    font-size: 1.9375rem;
    font-weight: 600;
    line-height: 125%;
}
Copiar código
```

Após salvar, teremos o título, a divisória e os textos posicionados corretamente. Contudo, o número ainda não estará formatado como desejado.

## Próximos passos

Queremos que o número apareça com o símbolo de real, um ponto separando 2000 de 500, e uma vírgula para as casas decimais. No próximo vídeo, transformaremos esse número em um formato de texto específico, semelhante ao que fizemos com a data, utilizando um *pipe* .

[ Discutir no Fórum](https://cursos.alura.com.br/forum/curso-angular-19-aplicando-interacao-componentes-inputs-outputs/exercicio-criando-componentes-boasvindas-e-conta/189169/novo)[ Próxima ](https://cursos.alura.com.br/course/angular-19-aplicando-interacao-componentes-inputs-outputs/task/189169/next)

# 05 **Organização de código em Techsafe**


A Techsafe, uma empresa especializada em segurança tecnológica e cibersegurança, está desenvolvendo um dashboard para monitorar a integridade dos sistemas de segurança. A equipe de desenvolvimento, da qual você faz parte, percebeu que o código do dashboard estava se tornando extenso e difícil de gerenciar.

Como a prática de componentização pode ajudar a Techsafe a organizar o código do dashboard e melhorar a eficiência do desenvolvimento?


[X]A componentização permite que o código do dashboard seja dividido em partes menores e mais gerenciáveis, cada uma responsável por uma funcionalidade específica, facilitando a navegação e a compreensão do código.

Correta, pois a componentização organiza o código em módulos menores, tornando-o mais fácil de gerenciar e permitindo que a equipe de desenvolvimento trabalhe de forma mais eficiente, além de facilitar a adição de novas funcionalidades e a manutenção do código existente.


[ ]A componentização permite que o código do dashboard seja completamente reescrito em uma nova linguagem de programação, o que melhora a eficiência do desenvolvimento ao eliminar a necessidade de manutenção do código antigo.


[ ]A componentização permite que o código do dashboard seja automaticamente otimizado por ferramentas de inteligência artificial, eliminando a necessidade de intervenção humana no processo de desenvolvimento.

[ ]A componentização permite que o código do dashboard seja centralizado em um único arquivo, o que facilita a navegação e a compreensão do código por toda a equipe de desenvolvimento.



# 06 **Mais pipes e internacionalização**


Criamos os componentes de boas-vindas e conta para manter o código de cada um deles bem organizado e encapsulado. Esses dois componentes estão sendo utilizados pelo componente maior, que é o banner.

No entanto, encontramos um problema. No componente de conta, estamos exibindo o saldo da pessoa, que, por enquanto, é um saldo estático de 2.500 e ainda não está formatado da maneira desejada.

Vamos relembrar como queremos formatá-lo no Figma: queremos ter um "R$" e que as casas de milhares estejam separadas dos outros números por um ponto. Além disso, queremos uma vírgula separando as casas decimais para mostrar os centavos, se necessário.

## Formatando valores com o `CurrencyPipe`

Existe um *pipe* para realizar essa transformação do número. Voltando ao VS Code, abriremos o arquivo TypeScript do componente de conta.

Agora, precisamos importar o `CurrencyPipe` para formatar o saldo. "*Currency* " significa "moeda".

No arquivo TypeScript do componente de conta, vamos adicionar o `CurrencyPipe` ao *array* de importações.

> `conta.component.ts`:

```typescript hljs
imports: [CurrencyPipe],
Copiar código
```

Também precisamos importar o `CurrencyPipe` do `@angular/common`. Após aceitar a sugestão do VS Code, ele fará a importação:

```typescript hljs
import { CurrencyPipe } from '@angular/common';
Copiar código
```

Salvaremos o código e acessaremos o HTML. Em seu interior, usaremos o operador de *pipe* mais uma vez, que é a barra vertical, dentro da interpolação e logo após o número 2500. Após a barra vertical, adicionaremos o nome do *pipe* , que é `currency`:

> `conta.component.html`:

```html hljs language-xml
<span class="saldo">{{ 2500 | currency }}</span>
Copiar código
```

Ao salvar o arquivo e voltar ao navegador, o número já estará formatado, mas no padrão americano. Ele não colocou "R$", apenas um cifrão, e o milhar está separado da centena por uma vírgula, com as casas decimais separadas por um ponto.

> $2,500.00

Existe uma forma de resolver um desses problemas. No HTML de conta, podemos passar um **parâmetro** para o `currency`, indicando qual moeda queremos utilizar. Podemos passar um dois-pontos e o parâmetro será uma string entre aspas, onde colocaremos o código da moeda do Brasil, que é **BRL** (Real Brasileiro):

```html hljs language-xml
<span class="saldo">{{ 2500 | currency: 'BRL' }}</span>
Copiar código
```

> Para saber mais sobre os códigos de moedas internacionais, acesse as atividades desta aula.

Ao salvar o arquivo e voltar ao navegador, o cifrão já foi trocado por "R$". No entanto, a vírgula e o ponto ainda não estão nos lugares desejados, e isso será resolvido de outra forma que se relaciona com o dia da semana estar em inglês.

## Traduzindo a aplicação com configurações de idioma

Além da questão da moeda, temos o dia da semana que aparece em inglês, como "Thursday", em vez de "quinta-feira". Embora as duas questões possam não parecer relacionadas, existe uma configuração do Angular que permite **traduzir a aplicação inteira para um idioma específico** , afetando a forma como os *pipes* do Angular realizam suas transformações.

No VS Code, abriremos a estrutura de pastas no explorador lateral. Na pasta raiz, há um arquivo chamado **`angular.json`** . Ao abrir esse arquivo, encontraremos várias configurações do projeto.

No bloco `projects`, estão os projetos dentro desse *workspace* (nome dado pelo Angular ao espaço de trabalho). Em seu interior, há o bloco `anybank` com o nome do projeto, e em seu interior, há o bloco `projectType`, com várias configurações dele do projeto, como o seu tipo e algumas `schematics`.

Podemos colapsar o bloco de `schematics`, clicando na seta para baixo à esquerda desse nome, para facilitar a localização do que queremos.

Descendo o arquivo, encontraremos mais configurações. Também podemos colapsar o bloco `architect`.

As configurações do bloco `anybank` terminam por volta da linha 119. Acima das chaves que terminam esse bloco, colocaremos uma vírgula no final da linha e saltaremos para a próxima com "Enter". Nessa nova linha, adicionaremos uma nova propriedade direta do objeto `anybank`.

Para isso, abriremos um bloco de chaves e entre elas, digitaremos **`i18n`** , dois pontos e abriremos um bloco de chaves.

> `angular.json`:

```json hljs
"anybank": {
    // Código omitido
    },
    "i18n": {
    }
}
Copiar código
```

O comando `i18n` é uma abreviação para uma palavra em inglês que pode ser traduzida como **internacionalização** . A internacionalização é um assunto extenso no Angular, permitindo ter versões diferentes da aplicação em diversas línguas.

Neste curso, não nos aprofundaremos nesse assunto, mas abordaremos as configurações básicas para traduzir nossa aplicação para o português.

## Ajustando o padrão de formatação com o `locale`

Ao digitar `source`, o *autocomplete* para `sourceLocale` será exibido. Clicaremos nele para gerar esse comando. Adicionaremos dois pontos e definimos o seu valor entre aspas como `pt`, que representa o português:

```json hljs
"i18n": {
    "sourceLocale": "pt"
}
Copiar código
```

Após salvar o arquivo, será necessário reiniciar o servidor para aplicar as mudanças. No terminal integrado, fecharemos o terminal vazio clicando na lixeira do canto direito e interromperemos o servidor rodando no outro terminal com "Ctrl + C".

> Caso o terminal trave, basta clicar no ícone de lixeira para extinguir esse terminal e interromper o servidor.

Fecharemos o terminal e o reabriremos com "Ctrl + aspas simples". Em seguida, executaremos `npm start` para reiniciar o servidor e aplicar a nova configuração do `angular.json`.

```bash hljs
npm start
Copiar código
```

Esperamos que as palavras que vinham em inglês por padrão, trazidas pelos *pipes* , agora **apareçam em português** . Além disso, a formatação da moeda, que seguia o padrão americano, deve ser ajustada para o padrão em português, com ponto e vírgula nas posições corretas.

Após a construção da aplicação, atualizaremos a página no navegador. Observaremos que as palavras foram traduzidas corretamente, e a formatação da moeda foi ajustada padrão brasileiro.

> R$ 2.500,00

## Corrigindo capitalização com TitleCasePipe

No entanto, percebemos que o dia da semana está com a primeira letra minúscula. Para corrigir isso, utilizaremos um *pipe* que transforma a primeira letra de cada palavra em maiúscula.

No componente de boas-vindas, acessaremos o HTML. Na `span`, temos uma interpolação que aplica formatação do `DatePipe` chamado `date`.

Na string de formatação, após os formatos já aplicados, adicionaremos um `TitleCasePipe` chamado `titlecase` à data.

> `boas-vindas.component.html`:

```html hljs language-xml
<span class="data">{{ dataAtual | date:"EEEE, dd/MM/yyyy" | titlecase }}</span>
Copiar código
```

Importaremos esse `TitleCasePipe` no arquivo TypeScript, adicionando-o ao *array* de importações:

> `boas-vindas.component.ts`:

```typescript hljs
import { DatePipe, TitleCasePipe } from '@angular/common';
Copiar código
```

```typescript hljs
imports: [DatePipe, TitleCasePipe],
Copiar código
```

Após salvar o arquivo HTML, o erro desapareceu, e a primeira letra do dia da semana terá sido corrigida para maiúscula no navegador.

## Conclusão e próximos passos

Exploramos dois *pipes* interessantes: o `CurrencyPipe` para formatar a moeda e o `TitleCasePipe` para ajustar a capitalização das palavras. O Angular possui uma variedade de *pipes* que podemos usar a nosso favor.

Além disso, abordamos brevemente a internacionalização, utilizando uma configuração que traduz automaticamente alguns recursos do Angular para o português.

Finalizamos esta parte do banner. A seguir, começaremos a construir o formulário de nova transação.




# 07 **Transformação de dados financeiros na Organo**


A Organo, uma plataforma para criação e gestão de organogramas empresariais, está implementando uma nova funcionalidade que permite às pessoas usuárias visualizar o orçamento de diferentes departamentos em um organograma. A equipe de desenvolvimento, que você integra, precisa garantir que os valores financeiros sejam apresentados de forma clara e padronizada.

De que forma a utilização de Pipes no Angular pode ajudar a Organo a transformar e formatar esses dados financeiros de maneira eficaz?


[ ]Aplicando Pipes para traduzir os valores financeiros em diferentes idiomas, a Organo pode garantir que as informações sejam compreendidas por pessoas usuárias de diversas regiões, além de facilitar a integração com sistemas de tradução automática para expandir o alcance global da plataforma.


[ ]Utilizando Pipes para converter os valores financeiros em gráficos interativos, a Organo pode apresentar os dados de forma visual, eliminando a necessidade de formatação textual, e permitindo que os usuários interajam diretamente com os dados para obter insights mais profundos sobre o orçamento.


[ ]Configurando Pipes para validar e corrigir automaticamente valores financeiros inseridos pelos usuários, a Organo pode evitar erros de digitação e garantir que todos os valores sigam o formato correto antes mesmo de serem processados pelo sistema.


[X]Utilizando Pipes, como o CurrencyPipe, a Organo pode transformar e formatar os valores financeiros de forma consistente, garantindo que sejam apresentados de acordo com as convenções monetárias locais, facilitando a compreensão dos dados pelas pessoas usuárias.

Correta, pois o uso de Pipes, como o CurrencyPipe, permite a formatação automática dos valores financeiros conforme as convenções locais, assegurando precisão e padronização.


# 08 **Para saber mais: CurrencyPipe e i18n**


Acesse a documentação do [CurrencyPipe](https://angular.dev/api/common/CurrencyPipe) para conferir seus detalhes de uso!

Essa página diz que você pode utilizar qualquer código de moeda do [padrão ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) para o primeiro parâmetro do pipe.

Acesse também a documentação sobre [internacionalização](https://angular.dev/guide/i18n) se quiser ler mais sobre o tema! A abreviação “i18n” vem da palavra em inglês *internationalization* , que possui 18 letras entre o “i” e o “n”.

A configuração em específico que fizemos para traduzir o nosso projeto para português está na página [Refer to locales by ID](https://angular.dev/guide/i18n/locale-id).



# 09 **Faça como eu fiz: exibindo BoasVindas e Conta**


Vamos praticar o que aprendemos nesta aula? Para isso você precisa:

* Gerar os componentes `BoasVindas` e `Conta` e exibir esses dois componentes dentro do componente Banner;
* Formatar a data e o saldo usando pipes (`DatePipe`, `CurrencyPipe` e `TitleCasePipe`);
* Configurar o `i18n` para que datas e moedas apareçam no formato em português.

Caso tenha dúvidas, você pode clicar no botão **Ver opinião do instrutor** para consultar o passo a passo detalhado para realizar a atividade.


# 10 **O que aprendemos?**


Nesta aula, aprendemos:

* A utilizar o `DatePipe` no Angular para formatar datas.
* A importância de componentizar a lógica e a estilização entre componentes Angular.
* O uso de Pipes para formatação e transformação de dados, incluindo `CurrencyPipe` e `TitleCasePipe`.
* A configurar o projeto para internacionalização (i18n), afetando formatos de datas e moedas.
* A aplicar múltiplos pipes em uma única interpolação para transformações sequenciais de dados.
