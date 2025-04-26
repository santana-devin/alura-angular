# 01 **Projeto da aula anterior**

Para acompanhar o instrutor, você pode [baixar o projeto da aula anterior](https://github.com/alura-cursos/4456-angular-19-curso-2/archive/refs/heads/aula-04.zip) ou [acessar os arquivos do GitHub do projeto](https://github.com/alura-cursos/4456-angular-19-curso-2/tree/aula-04).

# 02 **Criando lista de transações com signal**

Anteriormente, aprendemos a utilizar o *output* do *Angular* para enviar um **evento personalizado** de um componente filho para o componente pai. Com isso, conseguimos finalmente **enviar uma nova transação a partir do formulário** para o componente `AppComponent`, que é o pai de todos os componentes da aplicação. No entanto, **por que fazemos isso afinal?**

## Criando uma lista de transações com `signal()`

Enviamos a transação, mas não fizemos nada com ela exceto exibir no navegador com `console.log()`. Nesse caso, queremos calcular o **saldo** a partir da transação.

**Por exemplo:** se fizermos um depósito de R\$ 50,00, queremos aumentar o saldo em R\$ 50,00. Além disso, desejamos manter um **registro de transações** no extrato, componente que ainda vamos criar no nosso projeto. Portanto, precisaremos de uma **lista de transações**. Se criarmos essa lista agora no componente pai, conseguiremos de calcular o saldo a partir dela.

### Criando a lista `transacoes`

Para criar a lista desejada, vamos abrir o *VS Code* e acessar o arquivo *TypeScript* de `AppComponent` (`app.component.ts`). Começaremos criando uma propriedade chamada `transacoes` no escopo da classe `AppComponent`, que será nossa **lista de transações**, e ela será inicializada como uma lista vazia.

No entanto, não será uma simples lista vazia (`[]`). Criaremos um `signal()`, função que importaremos de `@angular/core`. Entre parênteses, inicializaremos a lista com colchetes.

> *`app.component.ts`:*

```ts
// código omitido

export class AppComponent {
   transacoes = signal([]);
 
   processarTransacao(transacao: Transacao) {
     console.log(transacao);
   }
}
Copiar código
```

> Abaixo, o trecho da importação de `signal` do `@angular/core`:
>
> ```ts
> import { Component, signal } from '@angular/core';
> Copiar código
> ```

### Entendendo a função `signal()`

O `signal()` é apropriado para **inicializar propriedades de componentes que serão alteradas com o tempo**. No nosso caso, a lista inicializa vazia, mas será alterada conforme o uso da aplicação.

Ao adicionar uma nova transação, a lista será alterada, que passará a ter uma, depois duas, depois três transações. Para dados **mutáveis e reativos** que, ao serem alterados, geram efeito colateral, usamos a função `signal()`. A partir disso, conseguimos calcular o saldo, conforme desejado.

### Definindo o tipo da lista `transacoes`

Após criar o `signal()` com o valor inicial de uma lista vazia, queremos definir o **tipo** dessa lista. Para isso, usaremos o *generics* do TypeScript (`<>`) e indicaremos o tipo como `Transacao[]`.

```ts
// código omitido

export class AppComponent {
   transacoes = signal<Transacao[]>([]);
 
   processarTransacao(transacao: Transacao) {
     console.log(transacao);
   }
}
Copiar código
```

### Utilizando os métodos `set()` e `update()`

No método `processarTransacao()`, em vez de um `console.log()` na `transacao` recebida do formulário, poderíamos pensar em usar `this.transacoes.push()` para inserir a transação na lista vazia. No entanto, ao usar o `signal()`, precisamos de **métodos específicos** para alterar o dado.

Dito isso, no escopo de `processarTransacao()`, escreveremos `this.transacoes`. A partir disso, podemos utilizar dois métodos para alterar o valor do `signal()`:

> * `set()`;
> * E `update()`.

O método `set()` **define um novo valor**, como uma nova lista com itens. Já o método `update()` permite **criar um novo valor a partir do atual**. Nesse caso, usaremos `update()`.

Entre os parênteses de `update()`, passaremos uma função *callback* (`() => {}`) que receberá a **lista atual**, nomeada como parâmetro (`listaAtual`), e cujo retorno será o **novo valor da lista**.

Para isso, podemos criar uma nova lista utilizando colchetes (`[]`), espalhar os valores atuais de `listaAtual` com o *spread operator* (`...`) e inserir o novo item. Entretanto, em vez de adicionarmos a `transacao` ao final da lista, vamos inseri-la no início, escrevendo `transacao, ...listaAtual`.

```ts
// código omitido

export class AppComponent {
   transacoes = signal<Transacao[]>([]);
 
   processarTransacao(transacao: Transacao) {
     this.transacoes.update((listaAtual) => {transacao, ...listaAtual});
   }
}
Copiar código
```

Dessa forma, **as transações mais recentes ficam no início da lista**, facilitando a montagem do extrato, onde queremos mostrar essas transações primeiro.

Esse é um truque útil para simplificar nosso código. O método `update()` utiliza o valor atual da lista (`listaAtual`) para construir o novo valor.

Para verificar se funcionou, podemos fazer um `console.log()` em `this.transacoes`. Como `transacoes` é um `signal`, precisamos abrir e fechar parênteses após `this.transacoes`.

```ts
// código omitido

export class AppComponent {
   transacoes = signal<Transacao[]>([]);
 
   processarTransacao(transacao: Transacao) {
     this.transacoes.update((listaAtual) => {transacao, ...listaAtual});

     console.log(this.transacoes());
   }
}
Copiar código
```

### Verificando o resultado no navegador

Após salvar o arquivo, podemos verificar no navegador se a lista é atualizada com a nova transação.

Para testar, faremos um depósito de R\$ 50,00. No *DevTools* do *Chrome*, visualizamos uma lista com uma única posição contendo a transação (`Transacao`) do tipo `deposito` no valor de R\$ 50,00. Ao realizar uma nova transação, como um saque de R\$ 20,00, a lista exibe duas transações.

> * (2) `[Transacao, Transacao]`
>   * 0: `Transacao`
>     * `tipo: "saque"`
>     * `valor: 20`
>   * 1: `Transacao`
>     * `tipo: "deposito"`
>     * `valor: 50`

## Conclusão

Conseguimos criar a lista de transações e o método `update()` funcionou conforme esperado. Utilizamos a função `signal()` para isso, e conforme avançarmos no curso, entenderemos cada vez mais as **utilidades e benefícios** de utilizar `signal()` para listas de transações.

**Nos encontramos no próximo vídeo!**

# 03 **Calculando o saldo com computed**

Anteriormente, utilizamos a função `signal()` do *Angular* para criar uma lista de transações no componente `AppComponent`. O `signal()` é apropriado para dados que serão alterados conforme a interação da pessoa usuária com a aplicação. Dessa forma, a lista inicializa vazia e são inseridas novas transações conforme o preenchimento do formulário.

Isso pode nos ajudar tanto a criar efeitos colaterais no código, quanto a calcular outras informações a partir da lista. Uma dessas informações é o **saldo**, que, atualmente, está fixo na página, ou seja, é um **elemento estático**. Começaremos a implementar a lógica de **cálculo do saldo** a partir das transações já realizadas, utilizando a `listaAtual`.

Para isso, trabalharemos com as funções `signal()` e `computed()` do Angular.

## Calculando o saldo com `computed()`

Começaremos acessando o arquivo `app.component.ts` no *VS Code*, onde criamos uma lista de `transacoes` na classe `AppComponent`, utilizando a função `signal()`. Isso nos permitirá armazenar e manipular dados que mudam conforme a interação da pessoa usuária com a aplicação.

> *`app.component.ts`:*

```ts
// código omitido

export class AppComponent {
   transacoes = signal<Transacao[]>([]);
 
   processarTransacao(transacao: Transacao) {
     this.transacoes.update((listaAtual) => {transacao, ...listaAtual});

     console.log(this.transacoes());
   }
}
Copiar código
```

### Criando a lista `saldo`

Com a lista de transações inicializada como um `signal()`, podemos criar logo abaixo de `transacoes` uma nova propriedade chamada `saldo`. Essa propriedade será calculada a partir da lista de transações utilizando a função `computed()`.

Entre os parênteses de `computed()`, passaremos novamente uma função *callback*. No escopo dessa função, podemos depender do valor de outro `signal`.

Dito isso, usaremos `return` seguido de `this.transacoes()` para **definir o valor do saldo**. Usaremos o método `reduce()` para **iterar sobre a lista de transações e calcular o saldo**. O acumulador (`acc`) começa em 0 e, para cada `transacao`, somamos a ele o valor da transação atual (`transacaoAtual.valor`). Dessa forma, obtemos o **saldo total** das transações.

```ts
// código omitido

export class AppComponent {
   transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
     return this.transacoes().reduce((acc, transacaoAtual) => {
       return acc + transacaoAtual.valor;
     }, 0);
   });
 
   processarTransacao(transacao: Transacao) {
     this.transacoes.update((listaAtual) => {transacao, ...listaAtual});

     console.log(this.transacoes());
   }
}
Copiar código
```

> Abaixo, o trecho da importação de `computed` do `@angular/core`:
>
> ```ts
> import { Component, computed, signal } from '@angular/core';
> Copiar código
> ```

### Exibindo o saldo no *template* HTML

Para verificar se o saldo será calculado corretamente, podemos **exibi-lo no *template* HTML** do componente. Adicionaremos uma **interpolação do saldo** diretamente no template:

> *`app.component.html`:*

```html
<div class="app">
   <div class="banner-form-wrapper">
     <app-banner />
     <app-form-nova-transacao (transacaoCriada)="processarTransacao($event)" />
     {{ saldo() }}
   </div>
 </div>
Copiar código
```

> A função `computed()` também retorna um `signal`. Portanto, trata-se de um `signal` feito a partir de outro `signal`. Chamamos isso de ***signal* derivado**, ou **signal computado**.

### Verificando o resultado no navegador

Após salvar os arquivos, devemos visualizar no navegador o saldo inicial como zero.

Ao realizar uma nova transação na aplicação, como um depósito de R\$ 50,00, por exemplo, o saldo deverá ser **atualizado automaticamente**. Realizado o depósito, o saldo é atualizado para R\$ 50,00. Se fizermos um novo depósito de R\$ 20,00, o saldo é atualizado para R\$ 70,00, conforme esperado.

A abordagem com `computed()` e `signal()` é eficiente, pois o Angular **recalcula automaticamente o saldo** quando a lista de transações é modificada. Isso elimina a necessidade de atualizar manualmente, garantindo que ele esteja sempre correto.

Por fim, podemos remover qualquer `console.log()` desnecessário do código, considerando que já verificamos o resultado e o saldo funciona corretamente.

## Conclusão

Na sequência, trataremos o caso de **saques**, cujo objetivo é **decrementar o valor do saldo**!

# 04 **Diminuindo o saldo no saque**

Conseguimos calcular o saldo a partir da lista de transações com o apoio da função `computed()`, utilizada quando queremos um `signal` derivado de outro `signal`.

No entanto, a lógica que escrevemos serve apenas para **somar** o valor das transações ao saldo. Nesse caso, se realizarmos um **saque**, o que irá acontecer?

## Diminuindo o saldo no saque

Demonstrando na aplicação, ao realizarmos um saque de R\$ 30,00, por exemplo, e confirmarmos a transação, o saldo adicionado para testar aumentará para R\$ 30,00.

É como se o `computed()` calculasse apenas os depósitos. Portanto, precisamos ajustar a lógica da aplicação, a depender do **tipo de transação** realizada.

Vamos implementar essa alteração no código?

### Modificando o `reduce()` e criando um bloco `switch`

De volta ao *VS Code*, precisamos apenas modificar como o `reduce()` funciona em `app.component.ts`. No escopo do método, criaremos um bloco `switch`.

> Podemos usar o recurso do VS Code que auxilia na escrita da estrutura do bloco.

Entre parênteses, vamos comparar `transacaoAtual.tipo` e verificar os casos dela.

No primeiro `case`, verificaremos se o tipo da transação atual é `TipoTransacao`, que importaremos de `./modelos/transacao`, seguido de `DEPOSITO`.

> *`app.component.ts`*

```ts
// código omitido

export class AppComponent {
  transacoes = signal<Transacao[]>([]);
 
  saldo = computed(() => {
     return this.transacoes().reduce((acc, transacaoAtual) => {
       switch (transacaoAtual.tipo) {
         case TipoTransacao.DEPOSITO:
 
           break;
   
         default:
           break;
       }
       return acc + transacaoAtual.valor;
     }, 0);
   });

// código omitido
Copiar código
```

> Abaixo, o trecho da importação de `TipoTransacao` de `./modelos/transacao`:
>
> ```ts
> import { TipoTransacao, Transacao } from './modelos/transacao';
> Copiar código
> ```

Se o tipo for igual a `TipoTransacao.DEPOSITO`, usaremos o código de antes. Para isso, podemos recortar o trecho `return acc + transacaoAtual.valor;` e mover para o primeiro `case`.

> Com esse código, podemos remover a linha `break` do primeiro `case`, pois utilizamos o `return`, que interrompe o fluxo de execução do restante da função.

```ts
// código omitido

saldo = computed(() => {
  return this.transacoes().reduce((acc, transacaoAtual) => {
    switch (transacaoAtual.tipo) {
      case TipoTransacao.DEPOSITO:
        return acc + transacaoAtual.valor;

      default:
        break;
    }
  }, 0);
});

// código omitido
Copiar código
```

### Criando o segundo `case`

Agora, vamos criar outro `case`, verificando se o tipo da transação é igual a `TipoTransacao.SAQUE`. Nesse caso, vamos retornar o acumulador `acc` (valor do saque) e subtrair `transacaoAtual.valor`.

```ts
// código omitido

saldo = computed(() => {
  return this.transacoes().reduce((acc, transacaoAtual) => {
    switch (transacaoAtual.tipo) {
      case TipoTransacao.DEPOSITO:
        return acc + transacaoAtual.valor;

      case TipoTransacao.SAQUE:
        return acc - transacaoAtual.valor;

      default:
        break;
    }
  }, 0);
});

// código omitido
Copiar código
```

Com isso, nossa lógica está completa tanto para o depósito quanto para o saque.

### Lançando um erro

No entanto, há mais um caso interessante: o `default`.

Não queremos que o código caia no bloco `default`, pois, em teoria, vamos tratar todos os tipos de transações. Por enquanto, temos depósito e saque, mas se um dia houver outro tipo, como transferência, por exemplo, também queremos tratar.

Se ainda assim cairmos no `default`, podemos forçar um **erro** no código. Atualmente, o *TypeScript* reclama em `reduce()`, dizendo que nem todos os caminhos retornam um valor. Portanto, somos obrigados a retornar um valor ou lançar um erro. Nesse caso, lançaremos o erro no bloco `default`.

```ts
// código omitido

saldo = computed(() => {
  return this.transacoes().reduce((acc, transacaoAtual) => {
    switch (transacaoAtual.tipo) {
      case TipoTransacao.DEPOSITO:
        return acc + transacaoAtual.valor;

      case TipoTransacao.SAQUE:
        return acc - transacaoAtual.valor;

      default:
        throw new Error('Tipo de transação não identificado.');
    }
  }, 0);
});

// código omitido
Copiar código
```

No erro, adicionamos um *bug* que pode acontecer se não tratarmos o código corretamente. Sendo assim, esse erro nos ajudaria a depurar nosso próprio código.

### Verificando o resultado no navegador

Ao fazer isso, o erro do TypeScript some. Ou seja, com certeza, ou retornamos um valor, ou lançamos um erro. Finalizados os ajustes, podemos salvar o código e retornar ao navegador para verificar se o saque decrementa o valor do saldo.

Depositamos R\$ 100,00 e confirmamos a transação. Com isso, o valor muda para R\$ 100,00. Agora, queremos sacar R\$ 20,00. Ao confirmar, o valor muda de R\$ 100,00 para R\$ 80,00, então de fato subtraímos o valor do saldo com o tipo de transação saque.

## Conclusão

No momento, realizamos apenas o teste rápido de visualizar o número do saldo na página da aplicação, mas, na verdade, queremos exibi-lo **destacado no *banner***.

**Faremos isso no próximo vídeo!**

# 05 **Gerenciando atualizações**

No Organo, os administradores podem visualizar não apenas a estrutura hierárquica da empresa, mas também dados derivados, como o total de horas trabalhadas por uma equipe. Esse cálculo depende de variáveis que mudam frequentemente, como o número de funcionários e o total de horas de trabalho de cada um. Para isso, a equipe decidiu aplicar um `computed`.

Qual seria a principal vantagem de usar `computed` para calcular o total de horas trabalhadas por uma equipe?

[ ] O `computed` permite que valores derivados sejam recalculados em segundo plano continuamente, sem depender de mudanças no estado.

Incorreta, pois o `computed` não recalcula os valores de forma contínua.

[X] O `computed` garante que o valor do total de horas será calculado apenas quando as informações da equipe ou dos membros mudarem, evitando cálculos repetitivos.

Correta, pois o `computed` recalcula o valor somente quando necessário, ou seja, quando as informações dos membros ou da equipe mudam, evitando cálculos desnecessários.

Alternativa correta

[ ] O `computed` impede que a propriedade derivada seja modificada manualmente pelo usuário, garantindo maior segurança no código.

Incorreta, pois o `computed` não impede modificações manuais do usuário.

[ ] O `computed` permite que o total de horas seja calculado de forma assíncrona, o que é útil para grandes volumes de dados de membros da equipe.

Incorreta, pois o `computed` não executa cálculos assíncronos, todas as operações são feitas de modo síncrono.

# 06 **Utilizando o método reduce**

A empresa Jornada Milhas deseja fornecer um resumo financeiro claro para seus clientes, exibindo o saldo total de suas transações de milhas. Para isso, a equipe implementou uma lógica que percorre todas as transações e calcula o saldo acumulado usando o método `reduce()`, levando em conta os tipos de transação, como adição e resgate de milhas.

Ao utilizar o método `reduce()` para calcular o saldo das transações, qual das opções abaixo melhor explica seu funcionamento e aplicação correta?

[ ] O método `reduce()` é utilizado para filtrar os elementos da lista e eliminar aqueles que não se encaixam na condição especificada. Em seguida ele soma todos os valores filtrados.

[ ] O método `reduce()` percorre os elementos da lista, e a cada item ele incrementa o valor anterior alterando os valores originais da lista e exibindo o último item com o valor total.

[ ] O método `reduce()`, percorre uma lista, realiza a soma dos itens da lista e ao final apaga os elementos da lista, deixando-a vazia e exibe apenas resultado da operação.

[X] O método `reduce()` percorre uma lista e armazena o valor acumulado conforme uma lógica pré-definida, sendo ideal para somar ou combinar informações sequenciais.

Correta, pois o método `reduce()` percorre a lista e acumula o valor com base na lógica determinada pela pessoa desenvolvedora.

# 07 **Passando saldo com input**

Tratamos os casos de saque e depósito nas nossas transações, somando ou subtraindo corretamente o valor do nosso saldo de acordo. No entanto, estamos apenas mostrando o saldo debaixo do nosso formulário para teste, e queremos exibi-lo de forma destacada no banner. Vamos implementar isso no código.

## Implementando a exibição do saldo no banner

Primeiramente, vamos ao HTML do aplicativo e remover a interpolação do saldo que estávamos utilizando apenas para teste. Após isso, salvamos o arquivo. Para levar o saldo do `app.component` até o componente de conta, podemos passar pelo banner, utilizando o saldo como *input*. Vamos deixar a sintaxe preparada. Faremos um *property bind*, escrevendo colchetes `saldo`, que é o *input* que ainda vamos criar, e definimos que é igual a `saldo()`. Assim, estamos pegando o saldo do `app.component`, que é um sinal computado, e por isso precisamos abrir e fechar os parênteses.

```html
<div class="app">
  <div class="banner-form-wrapper">
    <app-banner [saldo]="saldo()" />
    <app-form-nova-transacao (transacaoCriada)="processarTransacao($event)" />
  </div>
</div>
Copiar código
```

Após salvar o arquivo, um erro aparece porque ainda não criamos o *input* chamado saldo. Vale lembrar que o nome do *input* não precisa ser igual ao valor que estamos passando do lado direito. Mantemos o mesmo nome saldo para simplificar o código.

Seguramos o "Ctrl" no teclado e clicamos sobre o componente `app-banner` para abrir automaticamente o arquivo TypeScript correspondente. Criaremos o *input* na classe, escrevendo `saldo` na linha 12, e definimos `saldo = input.required`, indicando que é obrigatório. Importamos o *input* pressionando "Ctrl + espaço" logo após *input*, e importamos de `@angular/core`. Definimos `input.required` com parênteses. Podemos também tipar esse *input* com *generics*, utilizando os sinais de menor e maior que, e escrevendo `number` entre eles, pois o saldo é um número. Ao voltar para o HTML do aplicativo, o erro desaparece, e no TypeScript salvamos o código.

```ts
//Código omitido

export class BannerComponent {
  saldo = input.required<number>();
}
Copiar código
```

Agora, faremos o mesmo no banner. Abrimos o HTML dele e precisamos repassar esse *input* para o `app-conta`, onde o número do saldo é exibido. Escrevemos a mesma sintaxe utilizada no `app-component`: colchetes `saldo` igual a `saldo` entre parênteses. Mais uma vez, precisamos abrir e fechar os parênteses porque o *input* também é um sinal, e utilizamos os parênteses para acessar o valor dele.

```html
<header class="banner">
  <app-boas-vindas class="boas-vindas" />
  <app-conta [saldo]="saldo()" class="conta" />
</header>
Copiar código
```

Salvamos o arquivo e abrimos o `conta.component.ts`, o arquivo TypeScript correspondente. Realizamos o mesmo processo de definir `saldo` como igual a `input`, importando de `@angular/core`. Em seguida, utilizamos `.required` e especificamos, com a *generics* do TypeScript, que ele é do tipo `number`.

```ts
/Código omitido

export class ContaComponent {
  saldo = input.required<number>();
}
Copiar código
```

## Testando as transações na aplicação

Após salvarmos esse arquivo, no HTML do componente de conta, substituímos o valor estático de 2500 estático por `saldo`. Utilizamos parênteses para acessar o valor do nosso *signal*, garantindo que funcione como antes. Esperamos que esse valor numérico seja processado pelo *pipe* de moeda, exibindo o valor em real brasileiro.

```html
<section class="conta">
  <h2 class="tiutlo">Saldo</h2>
  <div class="divisoria"></div>
  <span class="tipo-conta">Conta corrente</span>
  <span class="saldo">{{ saldo() | currency:"BRL" }}</span>
</section>
Copiar código
```

Após salvarmos o arquivo e retornarmos ao navegador, observamos uma mudança. O saldo inicial é de 0 reais, conforme configurado no `app-componente`. No `Reduce`, o acumulador também começa em 0. Se selecionarmos a opção "Depósito", definirmos o valor de "50" e depois clicarmos em "Confirmar transação", a tela atualiza com o saldo na conta corrente, assim como esperávamos.

A diferença é que agora passamos a informação do saldo, que começa no `app-componente`, até o componente de conta por meio de *inputs*. Esses *inputs* reagem corretamente quando o *signal* computado é alterado. Como o *signal computed* funciona da mesma forma que qualquer outro *signal*, essas reatividades ocorrem, e os componentes que recebem esse valor como *input* são re-renderizados automaticamente.

Vamos fazer outros testes. Selecionamos a opçaõ "Saque" e definimos o valor de "30". Assim, o valor da conta-corrente diminui para R\$20. Conseguimos implementar uma comunicação eficaz. Podemos relembrar como isso foi feito, conforme apresentado anteriormente.

Fizemos o *output* de uma transação do formulário até a lista de transações do aplicativo, computamos o saldo com base nessa lista e agora passamos essa informação por meio de *inputs*, aprofundando na árvore de componentes. É útil visualizar essa estrutura enquanto codificamos, montando uma mini árvore mental para auxiliar na implementação dessas comunicações.

Ainda falta a parte de extrato, que será abordada na próxima aula. Além disso, queremos mostrar o que acontece se tentarmos sacar um valor maior do que o saldo disponível. Por exemplo, temos R\$20 na conta, se tentarmos sacar 25 reais, ao confirmar a transação no formulário, o saldo fica negativo.

## Atividade complementar

Dependendo da aplicação bancária que desenvolvemos, podemos permitir ou não essa situação. Disponibilizamos uma atividade para impedir que o saldo fique negativo, exibindo um alerta caso alguém tente sacar um valor maior do que o saldo disponível. Não deixe de realizá-la.

Na próxima aula, implementaremos o componente de extrato. **Até lá!**

# 08 **Para saber mais: input e output vs Decorators**

No Angular a comunicação entre componentes é essencial e permite que dados sejam passados de componentes pais para componentes filhos e vice-versa. Para isso, podemos usar `inputs` ou `@Inputs` e `outputs` ou `@Outputs` e nesta atividade, vou te ajudar a entender melhor a diferença entre essas abordagens.

## inputs vs. @Inputs

Tanto os `inputs` quanto os `@Inputs` fazem a comunicação dos dados **do componente pai para o componente filho**.

Ao usar o decorador `@Input()`, o Angular monitora a propriedade para detectar mudanças e, quando necessário, atualiza a interface do usuário. O Angular faz isso por meio de seu mecanismo de detecção de mudanças, que, por padrão, utiliza o Zone.js.

Já o `input` foi introduzido no Angular a partir da versão 17.1 e é uma implementação mais recente e reativa, baseada no conceito de *signals*. Em vez de depender do Zone.js, os *signals* permitem que o Angular detecte mudanças de maneira mais eficiente, refletindo o estado mais recente diretamente nas propriedades de entrada.

## outputs vs. @Outputs

Tanto os `outputs` quanto os `@Outputs` fazem a comunicação dos dados **do componente filho para o componente pai**.

Na abordagem tradicional, usando `@Output()`, a emissão de eventos é feita através do `EventEmitter`, que permite que o componente emita eventos.

Já ao usar o `output` que, assim como o `input`, é uma abordagem mais recente no Angular, implementado na versão 17.3, utiliza a ideia de `OutputEmitterRef`, que é uma referência de evento que pode ser usada para capturar e manipular eventos dentro de um componente.

## Qual abordagem utilizar?

O time do Angular recomenda utilizar em projetos novos os `inputs` e `outputs` (sem *decorators*), pois eles fazem parte das versões mais recentes do Angular. Contudo, projetos antigos que fazem uso dos decorators `@Input` e `@Output` funcionam de forma equivalente.

Caso você queira se aprofundar nos estudos sobre `input`, `@Input`, `output` e `@Output`, você pode consultar a documentação do Angular para cada um desses casos:

* [inputs e @Inputs](https://angular.dev/guide/components/inputs)
* [outputs e @Outputs](https://angular.dev/guide/components/outputs)

Se quiser entender mais sobre signals, temos o curso [Angular: gerenciando estado com Signals](https://cursos.alura.com.br/course/angular-gerenciando-estado-signals) aqui na Alura que pode te ajudar! Além disso se quiser se aprofundar em decorators, você pode estudar nossa [Formação de Angular 14](https://cursos.alura.com.br/formacao-angular-14) que usa essa abordagem.

# 09 **Para saber mais: método reduce**

[ Próxima Atividade](https://cursos.alura.com.br/course/angular-19-aplicando-interacao-componentes-inputs-outputs/task/190627/next)

Se você já se perguntou como transformar uma lista de valores em algo completamente diferente (e útil), nesta atividade, vamos descobrir como o método `reduce` pode te ajudar a resolver esse problema. Vamos lá?

## O que é o método reduce?

O `reduce` é um método de listas em JavaScript que permite reduzir todos os elementos de uma lista a um único valor. Isso pode ser um número, uma *string*, um objeto, ou até mesmo outra lista. A mágica do `reduce` está na sua capacidade de processar cada elemento da lista e acumular um resultado, passo a passo.

## Como usar o reduce?

Vamos começar com um exemplo clássico: somar todos os elementos de uma lista.

```js
const numeros = [1, 2, 3, 4, 5];
 
const soma = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 0);
 
console.log(soma); // 15
Copiar código
```

No código acima, o `reduce` recebe dois argumentos:

* **Função de callback:** Essa função é chamada para cada elemento do array. Ela recebe dois parâmetros: `acumulador` (o valor acumulado até o momento) e o `numeroAtual` (o elemento atual da lista que está sendo processado);
* **Valor inicial:** O valor inicial do acumulador (no caso, 0).

A função de *callback* é executada para cada elemento da lista, e o valor retornado é passado como acumulador para a próxima iteração. No final, o `reduce` retorna o valor acumulado.

Mas o `reduce` não serve só para somar números. Vamos ver outro exemplo, onde transformamos uma lista de *strings* em uma única *string* concatenada:

```js
const palavras = ['Olá', 'mundo', 'do', 'JavaScript'];
 
const frase = palavras.reduce((acumulador, palavraAtual) => {
  return acumulador + ' ' + palavraAtual;
}, '');
 
console.log(frase); // "Olá mundo do JavaScript"
Copiar código
```

## Vantagens de uso

* **Flexibilidade:** O `reduce` pode ser usado para uma infinidade de tarefas, desde somar números até transformar listas em objetos;
* **Código conciso:** Em muitos casos, o `reduce` permite resolver problemas complexos com poucas linhas de código;
* **Processamento sequencial:** O `reduce` processa os elementos da lista em ordem, o que é útil quando a ordem dos elementos importa.

O método `reduce` é como um canivete suíço para manipulação de listas em JavaScript. Ele pode parecer um pouco intimidador no começo, mas uma vez que você pega o jeito, ele se torna uma ferramenta indispensável no seu arsenal de desenvolvimento. Então, da próxima vez que você precisar transformar uma lista em algo completamente diferente, lembre-se de colocar o `reduce` para trabalhar ao seu favor.

# 10 **Renderizando options com KeyValuePipe**

Conseguimos exibir corretamente o saldo da conta no componente Conta. O saldo é inicializado com 0 reais e, ao realizar um depósito de 10 reais, por exemplo, e confirmar a transação, o saldo é atualizado dinamicamente. Além disso, propomos uma atividade para impedir saques com valores superiores ao saldo disponível. Se tentarmos sacar 15 reais e confirmar a transação, o sistema indicará que o saldo é insuficiente. Essa funcionalidade já está implementada no código.

## Identificando um problema no código

Agora, vamos analisar um problema no código. Abrimos a pasta "form-nova-transacao" e o arquivo `form-nova-transacao-component.html`. Nas opções do *select* para selecionar o tipo de transação, o valor de cada opção deve ser exatamente igual à string definida no enumerador do tipo de transação. Vamos relembrar isso. Pressionamos "Ctrl + P" e buscamos por `transação.ts`, temos a classe de transação e o enumerador `TipoTransação`, que contém as strings `depósito` e `saque`, ambas em minúsculas. Essas strings devem ser idênticas às strings no valor das opções.

## Corrigindo erro no switch do tipo de transação

Se alterarmos, por exemplo, para `Depósito` e `Saque`, com letras maiúsculas, ao salvar e tentar realizar um novo depósito ou saque, um erro será exibido "Tipo de transação não identificado". Isso ocorre porque, no arquivo `app.component.ts`, fazemos um *switch* dos tipos de transação. Quando verificamos `TipoTransação.DEPOSITO`, o sistema espera `deposito` com D minúsculo. Como alteramos para D maiúsculo, o caso do *switch* não é identificado, resultando no erro.

## Utilizando a diretiva `@for` para dinamizar a renderização

Nosso código está duplicado, restringindo-nos a usar a mesma string em dois locais diferentes. Precisamos resolver esse problema, pois se uma dessas strings for alterada, o código não indicará o erro. Para evitar esse tipo de situação, vamos **dinamizar a renderização** das opções a partir do enumerador, utilizando a diretiva `*@For` do Angular.

Primeiro, no arquivo `form-nova-transacao.component.ts` , incluímos uma propriedade chamada `tipoTransacaoEnum`, que será igual a `TipoTransação`, já importado no arquivo.

```ts
//Código omitido

tipoTransacaoEnum = TipoTransacao;
Copiar código
```

Os enumeradores do TypeScript podem ser utilizados diretamente em código JavaScript, convertidos para objetos normais. Com o enumerador disponível no template, tanto no TypeScript quanto no HTML do formulário, podemos iterar sobre ele com `@for`.

Escreveremos o `*@for()` logo abaixo da primeira opção, que é desabilitada e permanecerá fixa. Utilizamos a ajuda do VS Code para a sintaxe, preenchendo `item of items`. O item será `tipo of tipoTransaçãoEnum`.

```html
//Código omitido

@for (tipo of tipoTransacaoEnum; track tipo.key) {
}
Copiar código
```

Inicialmente, ocorre um erro, pois não é possível iterar sobre um objeto diretamente. Para resolver isso, utilizaremos o *pipe* `keyValue` do Angular. No arquivo `form-nova-transacao.component.ts`, próximo à linha 7, adicionamos `KeyValuePipe` ao array de importações, importando de `@angular/common`. O `keyValue` significa chave e valor.

```ts
//Código omitido

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
Copiar código
```

Voltamos ao arquivo HTML. Após `tipoTransacaoEnum`, inserimo o operador de barra vertical, conhecido como operador de *pipe*, e escrever `key value`. O `key value` transforma a expressão do lado esquerdo em uma lista de pares chave-valor, semelhante a uma lista de objetos. Apenas ao passar esse *pipe* `key value`, o erro já desapareceu. Basicamente, conseguiremos iterar sobre nosso objeto.

Após o ponto e vírgula `track`, podemos remover o `$index` e atribuir um valor único a cada membro do nosso enumerador. Assim, cada membro é identificado como `tipo`, `tipo of tipoTransacaoEnum`, e após o `track`, escrevemos `tipo.key`. Ao realizar a conversão com o *pipe* `key value`, transformamos o enumerador em uma lista de pares chave-valor. Cada um deles possui uma propriedade chamada `key`, que representa a chave do nosso enumerador.

> Podemos verificar isso no arquivo `transacao.ts`. A propriedade `key` representa `DEPOSITO` e `SAQUE`, ambos em maiúsculas. Por outro lado, a propriedade `value`, que utilizaremos em breve, representa as strings à direita do nosso enumerador: `deposito` e `saque`, ambos em minúsculo.

Voltando ao HTML, para cada membro do nosso enumerador, renderizaremos uma opção. Escreveremos `option`, e no `value`, colocaremos entre colchetes para realizar um *attribute binding*, utilizando a expressão `tipo.value`, que corresponde aos valores dos membros do nosso enumerador. Também inseriremos esses valores no conteúdo das nossas opções, abrindo uma interpolação e escrevendo `tipo.value`, ou seja, o valor de cada tipo de transação. Podemos apagar as opções estáticas que estão abaixo, pois não serão mais necessárias.

```html
//Código omitido

@for (tipo of tipoTransacaoEnum | keyvalue; track tipo.key) {
    <option [value]="tipo.value">{{ tipo.value }}</option>
}
Copiar código
```

Após salvar o arquivo, verificamos o resultado no navegador. Ao clicar no "Select", observamos que `deposito` e `saque` aparecem em letras minúsculas, pois são os valores do nosso enumerador. Se selecionarmos "deposito" e realizarmos uma transação de 20 reais, o saldo no banner aumenta em 20 reais. Ao realizar um saque de 5 reais, o saldo é subtraído em 5 reais, mantendo o funcionamento anterior.

A única alteração foi nas strings de exibição, que agora não possuem mais o "D" maiúsculo ou acento no "O" da palavra `deposito`. `saque` também está com "S" minúsculo, mas podemos ajustar isso.

No código, abrimos o arquivo da classe de transação e centralizamos totalmente, no enumerador, até mesmo a string que será exibida nas opções. Escrevemos `Depósito` com "D" maiúsculo e acento no "O", e `Saque` com "S" maiúsculo.

```ts
export class Transacao {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
Copiar código
```

Após salvar o arquivo, verificamos que a duplicação de código não existe mais. Tudo está centralizado no enumerador, e no HTML não há mais strings estáticas de `deposito` e `saque`, eliminando o problema de alterar uma dessas strings em algum lugar e causar um erro em outro ponto da aplicação.

Esperamos que a alteração da string no enumerador não mude o comportamento do código, pois, ao olhar no arquivo TypeScript do `app.component`, a comparação com o `switch` utiliza as mesmas strings criadas no enumerador. No navegador, ao selecionar o tipo de transação, as strings aparecem conforme desejado, com acento e letras maiúsculas. Ao realizar um depósito de R\$20 e confirmar, o saldo aumenta. Ao tentar um saque de R\$30 e confirmar, a mensagem de saldo insuficiente é exibida, mantendo o comportamento da aplicação.

## Concluindo a refatoração e garantindo a manutenção do código

Conseguimos realizar uma **refatoração eficaz**, tornando o código mais dinâmico e evitando futuros erros. Além disso, o código está mais fácil de manter. Se desejarmos adicionar um novo tipo de transação, basta ir ao arquivo `transacao.ts` e adicionar um novo membro ao enumerador. Por exemplo, podemos adicionar `TRANSFERENCIA` e definir uma string que aparecerá no HTML, com características especiais, como um circunflexo. Após salvar o arquivo e voltar ao navegador, a nova opção `TRANSFERENCIA` já aparece no *select*. Apenas precisamos lembrar de **tratar esse tipo de transação** no `AppComponent` dentro do `switch`.

Por fim, retornamos o código ao estado anterior, salvamos o arquivo e concluímos essa parte.


# 11 **Mão na massa: impedindo saques maiores que o valor do saldo**

Nesta aula, criamos uma lista de transações com *signal* e realizamos o cálculo para que uma transação do tipo saque possa diminuir o valor do saldo. Contudo, ainda é possível sacar valores maiores que o saldo disponível.

Como sacar valores maiores que o saldo disponível não é algo padrão em aplicações bancárias, conto com você para me ajudar a implementar uma funcionalidade que ajude a impedir esse comportamento.

Para isso você pode:

* Abrir o arquivo `app.component.ts`;
* Imprimir uma mensagem de saldo insuficiente dentro da função `processarTransacao` se o saldo for inferior ao valor do saque.

Abaixo está o passo a passo detalhado de como você pode realizar a atividade!



# 12 **O que aprendemos?**

Nesta aula:

* Utilizamos signals no Angular para gerenciar dados mutáveis e reativos.
* Utilizamos o `computed` para criar propriedades derivadas que reagem automaticamente a outros signals.
* Implementamos a lógica de cálculo de saldo usando o método `reduce`, diferenciando entre tipos de transação.
* Aplicamos o `KeyValuePipe` na diretiva `@for` para criar opções dinâmicas baseadas em um enum.
