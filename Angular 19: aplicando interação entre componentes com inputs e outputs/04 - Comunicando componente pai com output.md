# 01 **Projeto da aula anterior**

Para acompanhar o instrutor, você pode [baixar o projeto da aula anterior](https://github.com/alura-cursos/4456-angular-19-curso-2/archive/refs/heads/aula-03.zip) ou [acessar os arquivos do GitHub do projeto](https://github.com/alura-cursos/4456-angular-19-curso-2/tree/aula-03).

# 02 **Árvore de componentes**

Nós já conseguimos imprimir as duas informações importantes do formulário: o tipo e o valor da transação. Também deixamos uma atividade para implementar o *reset* do formulário quando ele for submetido.

Por exemplo, quando preenchemos um tipo e um valor para a transação e clicamos em "Confirmar transação", o formulário é submetido e resetado. Assim, a transação retorna para a opção original "Selecione o tipo de transação" e o valor fica em branco novamente. Sugerimos que você faça essa atividade antes de continuar seus estudos.

Agora, vamos discutir o próximo passo. O que faremos com essas duas informações recebidas do formulário? Ao realizar uma nova transação, queremos que ela **modifique o saldo**, dependendo do valor e do tipo da transação, e também que seja **registrada no extrato**.

Como faremos isso, considerando que essas duas informações estão dentro do componente de nova transação? Como compartilharemos essas informações com outros componentes?

## Explorando árvore de componentes

Para refletir sobre isso, vamos analisar a **árvore de componentes** atual da nossa aplicação.

![Árvore de componentes da aplicação bancária Anybank. A estrutura começa com o componente 'App' conectado a três componentes, logo abaixo, 'Banner', 'FormNovaTransacao' e 'Extrato'. O componente 'Banner' se divide em 'BoasVindas' com a propriedade 'dataAtual' e 'Conta' com a propriedade 'saldo'. O componente 'FormNovaTransacao' possui o objeto 'transacao' com as propriedades 'tipo' e 'valor'. O componente 'Extrato' contém a propriedade 'transacoes'.](https://cdn1.gnarususercontent.com.br/1/795715/d6496f2a-a248-4df3-be9c-dcb723debfc9.png)

No topo, contamos com o componente `App`, que é o componente raiz e pai de todos os outros. Ele possui dois componentes filhos. Dele, partem duas setas que descem até o componente de `Banner` e o componente de `FormNovaTransacao`.

O componente de `Banner`, por sua vez, possui mais dois filhos: o componente de `BoasVindas` e o componente de `Conta`. Cada componente pode ter informações próprias. Por exemplo, o componente de `BoasVindas` exibe a `dataAtual` formatada, enquanto o componente de `Conta` possui o `saldo` bancário. Por enquanto, o saldo é apenas um valor estático, mas eventualmente será uma propriedade do código, pois terá interação com outras partes da aplicação.

Voltando ao componente de `FormNovaTransacao`, ele possui duas informações: `tipoTransacao` e `valorTransacao`. Para facilitar a explicação, consideraremos essas duas informações juntas como uma única `transacao`, que eventualmente será um objeto.

Agora, daremos alguns *spoilers* do código. Nós iremos criar um objeto `transacao` com as propriedades `tipo` e `valor`. Eventualmente, também teremos um componente de `Extrato`, que será filho do componente `App`. Esse componente possuirá uma lista de transações, por meio da propriedade chamada `transacoes`.

## Compartilhando dados entre componentes com *input* e *output*

A partir daqui, vamos pensar em como **compartilhar a transação do formulário com outros componentes**. Podemos começar com o extrato, mesmo que ainda não esteja implementado em código, podemos discutir sobre isso.

Como atualmente compartilhamos informações entre componentes? Você já deve conhecer o *input*, que utilizaremos como parte da solução para esse problema.

> O ***input*** é uma forma de comunicação que passa informações de um componente pai para o componente filho.

Como o `Extrato` terá lista de transações, podemos pegar essa lista e movê-la para o componente `App`. Assim, podemos repassar essa lista como um *input* para o `Extrato`. Fazemos isso porque o componente `App` também tem uma forma de comunicação com o `FormNovaTransacao`.

Mas qual é a comunicação que desejamos estabelecer? Ao submeter um formulário, queremos inserir a nova transação na lista de transações que está no componente pai. Para fazer isso, te apresentaremos agora um novo recurso do Angular chamado *output*.

> O ***output*** é o contrário de *input*, ou seja, envia uma informação do componente filho para o componente pai.

Eventualmente, transformaremos a `transacao`, quando o formulário for submetido, em um *output* que será enviado para a lista de `transacoes` agora armazenada no componente `App`. Com isso, a alteração também será refletida nas transações que passaremos como *input* para o `Extrato`.

Entendendo a diferença do fluxo de *input* e *output*, também conseguimos encontrar uma solução para **calcular o saldo da conta**. Atualmente, a `Conta` possui a propriedade `saldo`, o qual deve ser calculado a partir das transações.

O que podemos fazer é elevar esse `saldo` para o componente `App`. Ao fazer isso, conseguimos calculá-lo a partir da lista de `transacoes` e repassá-lo como *input* para o `Banner` e, posteriormente, para o saldo da `Conta`. A forma como calcularemos esse saldo será detalhada no futuro, mas ele precisará estar no mesmo componente `App` para ter uma comunicação direta com a lista de transações.

![Árvore de componentes da aplicação bancária Anybank atualizada. A estrutura começa com o componente 'App' que possui as propriedades 'transacoes' e 'saldo'. Esse componente pai é conectado a três componentes filhos: 'Banner', 'FormNovaTransacao' e 'Extrato'. O componente 'Banner' recebe o input de saldo e se divide em 'BoasVindas' com a propriedade 'dataAtual' e 'Conta' com o input de 'saldo'. O componente 'FormNovaTransacao' possui o objeto 'transacao (output)' com as propriedades 'tipo' e 'valor'. O componente 'Extrato' contém o input de 'transacoes'.](https://cdn1.gnarususercontent.com.br/1/795715/33e50d73-1190-43ed-a18d-4eaf09ca23bc.png)

## Evitando *prop-drilling*

Essa é a estratégia que costumamos utilizar quando queremos compartilhar a mesma informação em diferentes componentes, mesmo que sejam componentes irmãos ou até tios e sobrinhos. Vamos **centralizar a informação em um componente pai** ou algum componente ancestral comum entre os componentes que precisam acessá-la - seja para exibi-la, como no caso do extrato, ou para alterá-la, como no formulário.

Essa é a solução para um problema clássico de comunicação entre componentes em frameworks como o Angular. Inclusive, isso pode levar a alguns problemas, dependendo da situação.

Por exemplo, o saldo que desce como *input* repetidamente entre os componentes leva a um problema conhecido como ***prop-drilling***, que vem do termo "prop", utilizado em outros frameworks, enquanto o Angular utiliza *input*. Deixaremos uma atividade para explicar melhor esse termo.

> *Prop-drilling* é o **aprofundamento de *inputs* através de muitos componentes**.

## Próximos passos

Agora que realizamos um planejamento do que faremos até o final do curso, podemos começar a implementar o *output* e compartilhar a informação com os outros componentes.

# 03**Para saber mais: Prop drilling**

Imagine que você está trabalhando no desenvolvimento de uma aplicação e precisa passar uma informação entre componentes, contudo para que essa informação chegue ao componente desejado, ela precisa passar por muitos outros componentes que muitas vezes nem chegam a usar essa informação.

O fenômeno descrito acima, é conhecido no mundo do React como *prop drilling*, e tem esse nome porque normalmente as informações nesta biblioteca são passadas como *props* e elas acabam tendo que perfurar (*drilling*) diversos componentes até chegar aonde serão de fato utilizadas.

Mas o que isso tem a ver com o Angular?

Calma, que é exatamente isso que vou explicar. Assim como no React as informações são passadas entre componentes através de *props*, no Angular, as informações acabam sendo passadas de um componente pai para um componente filho através de *inputs* e, caso você precise passar uma informação entre muitos componentes até que chegue ao componente de destino, você pode acabar caindo no problema do *prop drilling*.

Quando a aplicação é grande o suficiente para levar ao uso do *prop drilling* (ou *input drilling*) podemos ter que lidar com um código difícil de manter, pois qualquer mudança no estado de um componente pode exigir a modificação de todos os componentes intermediários que lidam com aquele dado.

Caso você acabe lidando com esse tipo de situação, você pode optar por usar alguns serviços do próprio Angular que vão te ajudar a lidar com o gerenciamento de estados e que você irá aprender em um curso futuro.

# 04 **Emitindo evento personalizado com output**

Já planejamos como queremos compartilhar a informação de uma nova transação com outros componentes. Para isso, montamos uma árvore de componentes que representa como desejamos que nossa aplicação fique ao final deste curso.

Atualmente, esse planejamento ainda não está implementado no nosso código, então vamos fazer essa transação ser um *output*.

## Emitindo evento personalizado com *output*

Vamos abrir especificamente o arquivo TypeScript do formulário. Na função `aoSubmeter()`, vamos remover os dois `console.log()` que não utilizaremos mais.

Como faremos para pegar as informações de `tipoTransacao` e `valorTransacao` e emitir para o componente pai? Vamos criar uma nova propriedade chamada `transacaoCriada`, que será igual a uma função chamada `output()`, a qual importaremos de `@angular/core`.

Agora, precisamos definir em que momento queremos enviar essa informação que, nesse caso, é ao submeter o formulário.

Dentro da função `aoSubmeter()`, antes dos códigos que resetam o formulário, escreveremos `this.transacaoCriada.emit()`. Assim, **emitiremos um evento personalizado** para o componente pai. O `emit()` é uma função, então precisamos abrir e fechar os parênteses também.

> `form-nova-transacao.component.ts`:

```typescript
import { Component, output } from '@angular/core';

export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output();

  aoSubmeter() {
    this.transacaoCriada.emit();

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
Copiar código
```

Esse código, por si só, não fará nada ainda. Vamos salvar o arquivo e, em seguida, abrir o HTML do componente pai do formulário, que é o `app.component.html`. Ele está consumindo o formulário, exatamente na linha 5.

Dentro da chamada do componente `app-form-nova-transacao`, vamos abrir parênteses e selecionar o evento personalizado que criamos com o *output*. Esse evento se chama `transacaoCriada`. Basta dar um "Enter" para aceitar a sugestão do VS Code.

Com isso, podemos executar o código desejado quando o evento for emitido. Para esse contexto, vamos executar uma chamada da função `processarTransacao()`. Essa função ainda não existe, mas vamos criá-la agora.

> `app.component.html`:

```html
<app-form-nova-transacao (transacaoCriada)="processarTransacao()" />
Copiar código
```

Salvamos o arquivo e abrimos o TypeScript do `app.component`. Dentro da classe, removeremos a propriedade `title`, que não estamos utilizando.

Em seguida, criaremos um método chamado `processarTransacao()`. Dentro dessa função, entre as chaves, utilizaremos um `console.log()` para indicar que uma transação foi criada.

> `app.component.ts`:

```typescript
export class AppComponent {
  processarTransacao() {
    console.log('transação criada!');
  }
}
Copiar código
```

Devemos verificar se essa função será executada quando o formulário do componente filho for submetido. Vamos conferir.

## Testando o código

Salvamos o código e voltamos para a aplicação Anybank no navegador. Pressionamos "F12" para abrir o DevTools do Chrome.

Em seguida, preenchemos o formulário de nova transação, com as informações de tipo e valor. Para exemplificar, faremos um saque de 10 reais. Por fim, clicamos no botão para "Confirmar transação".

> transação criada!

No console, aparece a mensagem "transação criada!".

Com isso, aprendemos que o *output* emite um evento personalizado, o qual precisamos escutar do lado do componente pai. É necessário realizar essas operações tanto no componente filho quanto no pai para criar essa conexão entre eles.

Além disso, entendemos a importância de dar **nomes semânticos** para esses eventos personalizados.

## Próximos passos

De maneira semelhante aos eventos do DOM, existem eventos personalizados de clique e de teclado. Nesse exemplo, criamos um evento personalizado que será emitido em momentos específicos. Essa é uma forma de comunicar dados de um componente filho para o componente pai.

No próximo vídeo, daremos continuidade à implementação dessa solução.

# 05 **Criando classe ''Transacao''**

Nós criamos um *output* para permitir que um evento personalizado fosse enviado de um componente filho para o componente pai.

Atualmente, quando fazemos qualquer transação, apenas imprimimos a *string* "transação criada" no console. Vamos modificar isso para que o componente pai (`App`) receba informações detalhadas sobre a transação, como o **tipo** e o **valor** da transação.

Vamos entender como fazer isso no código?

## Criando classe para transação

Vamos acessar novamente o componente de `FormNovaTransacao` no VS Code. Atualmente, dentro da função `aoSubmeter()`, estamos emitindo um evento personalizado.

> `form-nova-transacao.component.ts`:

```kotlin
aoSubmeter() {
    this.transacaoCriada.emit();

    this.tipoTransacao = "";
    this.valorTransacao = "";
}
Copiar código
```

Entre os parênteses da função `emit()`, é possível passar dados junto com esse evento. No entanto, o `emit()` aceita apenas um parâmetro. Para **enviar múltiplas informações**, como o tipo e o valor da transação, podemos criar um **objeto** com essas propriedades.

Seria possível criar um objeto literal dentro da função `aoSubmeter()` e passá-lo para o `emit()`. No entanto, é uma boa prática do padrão de orientação a objetos criar uma classe que vai **encapsular a complexidade de criação de um objeto** com um formato específico.

Podemos criar essa classe de transação tanto manualmente quanto através do Angular CLI. Para fazer a segunda opção, abrimos um terminal integrado do VS Code e executamos:

```bash
ng g class modelos/transacao
Copiar código
```

Queremos criar essa classe dentro de uma pasta denominada "modelo", pois essa classe será um modelo de um objeto com um formato específico.

Esse comando cria um arquivo `transacao.ts` dentro da pasta "modelos", contendo uma classe `Transacao`.

> `transacao.ts`:

```typescript
export class Transacao {
}
Copiar código
```

## Definindo propriedades na classe

Dentro da classe `Transacao`, teremos as propriedades para `tipo` e `valor`, que serão recebidas pelo construtor. Portanto, criaremos um `constructor()` e, entre parênteses, definiremos um parâmetro `tipo` do tipo `TipoTransacao` e outro parâmetro `valor` que será do tipo `number`.

Além disso, vamos aproveitar uma sintaxe do TypeScript que permite que esses parâmetros do construtor atribuam automaticamente à propriedade dessa classe. Basta colocar algum modificar nesses parâmetros. Nesse caso, adicionaremos os modificadores `public` e `readonly` em ambos para indicar que são parâmetros apenas de leitura e que não podem ser modificados.

```typescript
export class Transacao {
  constructor(
    public readonly tipo: TipoTransacao,
    public readonly valor: number
  ) {}
}
Copiar código
```

Dessa maneira, não precisamos nem mesmo escrever código dentro do construtor, pois as propriedades da classe são atribuídas automaticamente.

Em seguida, vamos criar um enumerador `TipoTransacao` para definir os tipos permitidos de transações.

Abaixo da classe, vamos fazer um `export enum TipoTransacao`. Nele, vamos listar os tipos de depósito e saque. Por convenção, esses membros devem ser escrito em maiúsculo. Enquanto o `DEPOSITO` será igual à *string* `deposito`, o `SAQUE` será igual a `saque`.

```typescript
export enum TipoTransacao {
  DEPOSITO = 'deposito',
  SAQUE = 'saque'
}
Copiar código
```

É importante que a *string* esteja em letras minúsculas, pois deve ser igual à *string* utilizada no atributo `value` da tag `<option>` no HTML do formulário.

> `form-nova-transacao.component.html`:

```html
<option value="deposito">Depósito</option>
<option value="saque">Saque</option>
Copiar código
```

### Utilizando a classe no formulário

Agora, no arquivo TypeScript do formulário, vamos construir o objeto de transação a partir da classe `Transacao`. Dentro da função `aoSubmeter()`, criamos uma constante `transacao` que recebe uma instância de `new Transacao()`. Devemos importar `Transacao` de `../modelos/transacao`.

Em `new Transacao()`, devemos passar os dois parâmetros: `this.tipoTransacao` e `this.valorTransacao`.

> `form-nova-transacao.component.ts`:

```typescript
import { Transacao } from '../modelos/transacao';

aoSubmeter() {
    const transacao = new Transacao(
        this.tipoTransacao,
        this.valorTransacao
    );

    // código omitido…
}
Copiar código
```

Contudo, o TypeScript assinala um erro em `this.tipoTransacao`, pois o argumento do tipo *string* não é atribuível a um parâmetro do tipo `TipoTransacao`. Essa é uma maneira do TypeScript se assegurar de que não passaremos tipos errados.

Como o `tipoTransacao` da classe do formulário é uma *string* qualquer, o TypeScript não permite que passemos essa *string* qualquer para um parâmetro que aceita apenas duas *strings*, "deposito" ou "saque", como definido no enumerador.

Para garantir que passaremos um valor válido para o construtor da classe `Transacao`, vamos colocar o operador `as` para assegurar a tipagem de `tipoTransacao` como `TipoTransacao`. Além disso, devemos importar esse enumerador de `../modelos/transacao`.

Agora, precisamos resolver o erro em `this.valorTransacao`. O Typescript recebe uma *string*, quando esperava receber um número. De fato, o `valorTransacao` é inicializado como uma *string* vazia. Por isso, precisamos converter o `valorTransacao` de *string* para número usando a função `Number()`.

```typescript
import { Transacao, TipoTransacao } from '../modelos/transacao';

aoSubmeter() {
    const transacao = new Transacao(
        this.tipoTransacao as TipoTransacao,
        Number(this.valorTransacao)
    );

    // código omitido…
}
Copiar código
```

## Próximos passos

No próximo vídeo, passaremos a transação completa para o método `emit()`, permitindo que o componente pai receba as informações de tipo e valor da transação.

# 06 **Para saber mais: enumeradores do TypeScript**

Se você já precisou definir um conjunto de valores fixos e distintos no seu código, os enumeradores (enums) do TypeScript podem ser seus melhores amigos. Eles ajudam a organizar e dar mais significado aos dados, tornando seu código mais legível e menos propenso a erros.

## O que são enumeradores?

Enumeradores são uma funcionalidade do TypeScript que permite criar conjuntos de valores nomeados, tornando o código mais expressivo. Pense neles como etiquetas que representam valores específicos.

Sem enums, você poderia definir constantes para representar estados ou opções da seguinte maneira:

```ts
const STATUS_PENDENTE = 0;
const STATUS_APROVADO = 1;
const STATUS_REJEITADO = 2;
Copiar código
```

A abordagem acima funciona, mas pode ser difícil lembrar o que cada número significa. Aqui entra o poder dos enums!

Com um enum, podemos escrever o mesmo código de forma mais organizada. Para isso, precisamos definir a palavra-chave `enum` e em seguida, atribuir o nome do enumerador, seguida de chaves que abrigam os valores separados por vírgulas, como mostrado no código abaixo:

```ts
enum Status {
  Pendente,
  Aprovado,
  Rejeitado
}
Copiar código
```

Agora, realizar uma comparação do tipo `status === Status.Pendente` é mais legível e significativo do que `status === 0`, e ainda temos a vantagem dos editores de autocompletar o código fornecendo as opções disponíveis.

As principais características dos enumeradores incluem:

* A criação de conjunto de valores nomeados, que facilitam a leitura e compreensão do código, simplificam a manutenção e reduzem erros;
* A possibilidade de serem numéricos ou *string*;
* Um comportamento auto-incremental no caso de enumeradores numéricos.

Além do exemplo que foi apresentado acima, os enumeradores são ideais para representar: outros estados de uma aplicação, direções e comandos, tipos de usuários e permissões e categorias ou grupos fixos de valores.

## Tipos de Enumeradores

### Enums Numéricos

Por padrão, o TypeScript atribui automaticamente valores numéricos sequenciais começando em 0.

```ts
enum Direcoes {
  Cima,    // 0
  Baixo,  // 1
  Esquerda, // 2
  Direita // 3
}
Copiar código
```

Contudo, também podemos atribuir valores manualmente:

```ts
enum Direcoes {
  Cima = 1,
  Baixo,   // 2 (auto-incremento)
  Esquerda,   // 3
  Direita   // 4
}
Copiar código
```

### Enums de String

Em vez de números, podemos usar *strings* como valores fixos para os enumeradores:

```objectivec
enum Direcoes {
  Cima = “CIMA”,
  Baixo = “BAIXO”, 
  Esquerda = “ESQUERDA”,
  Direita = “DIREITA”
}
Copiar código
```

Isso facilita o debug, pois os valores são mais legíveis no console.

### Enums Híbridos

Embora raro, é possível misturar números e *strings*:

```TS
enum MixedEnum {
  No = 0,
  Yes = "YES"
}
Copiar código
```

Mas na maioria dos casos, manter a consistência é uma melhor prática.

Os enumeradores do TypeScript são uma ferramenta poderosa para organizar e dar significado aos valores no seu código. Por isso, sempre que for possível e necessário, considere usar um enum, pois vai te ajudar na clareza, manutenção e segurança do seu código!

Caso queira mais informações sobre os enumeradores do TypeScript, você pode consultar a [documentação oficial](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content).



# 07 **Enviando dados pelo output**


Nós criamos uma nova `Transacao` com o auxílio de uma classe do JavaScript. Além de nos ajudar a encapsular a lógica referente à criação dessa transação, isso também nos ajudará futuramente a modificar como essa transação é criada.

No entanto, ainda precisamos enviar essa transação para o componente pai para, assim, poder realizar as operações necessárias.

## Enviando dados pelo *output*

No código TypeScript do formulário, queremos emitir a instância de transação, criada a partir da classe `Transacao`, utilizando o *output*. Para isso, vamos passar a constante `transacao` dentro dos parênteses da função `emit()`.

> `form-nova-transacao.component.ts`:

```typescript
aoSubmeter() {
    const transacao = new Transacao(
        this.tipoTransacao as TipoTransacao,
        Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
}
Copiar código
```

No entanto, recebemos um erro de TypeScript, pois um argumento do tipo `Transacao` não é atribuível a um parâmetro do tipo `void`. Para resolver isso, precisamos tipar corretamente a emissão do *output*.

Na linha 15, onde criamos o `output()`, podemos utilizar as *generics* do TypeScript para tipar o parâmetro que enviaremos. Basta abrir o sinal de maior e menor que (`<>`) antes dos parênteses do `output()`, especificando que o dado enviado será do tipo `Transacao`.

Como já importamos esse tipo anteriormente da pasta de "modelos", não é preciso acrescentar nenhuma importação.

```typescript
export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<Transacao>();

  // código omitido…
}
Copiar código
```

## Capturando dados no componente pai

Agora, precisamos capturar essa informação no componente pai. No HTML do `AppComponent`, escutamos o evento personalizado de `transacaoCriada` e chamamos a função `processarTransacao()`.

Para capturar o dado enviado no evento, utilizamos a sintaxe `$event`, que significa "evento" em inglês.

> `app.component.html`:

```html
<app-form-nova-transacao (transacaoCriada)="processarTransacao($event)" />
Copiar código
```

No entanto, enfrentamos um erro de TypeScript, pois o método `processarTransacao()` não espera nenhum argumento. Vamos corrigir isso no arquivo TypeScript do `AppComponent`.

Na função `processarTransacao()`, precisamos especificar que esperamos um parâmetro `transacao` que será do tipo `Transacao`. Com isso, devemos importar a classe `Transacao` de `./modelos/transacao`. Feito isso, o erro deve sumir no HTML.

Agora, no corpo da função `processarTransacao()`, podemos utilizar `console.log()` para verificar se a `transacao` está sendo recebida corretamente como parâmetro.

> `app.component.ts`:

```typescript
import { Transacao } from './modelos/transacao';

export class AppComponent {
  processarTransacao(transacao: Transacao) {
    console.log(transacao);
  }
}
Copiar código
```

Podemos salvar o arquivo, abrir a aplicação Anybank no navegador e acessar o DevTools com o atalho "F12". Nosso objetivo é realizar uma nova transação para conferir se conseguimos exibi-la no console a partir do componente pai.

Por exemplo, vamos realizar um saque de R\$10, o console deve mostrar o tipo e o valor da transação impresso pelo `app.component.ts`.

> Transacao {tipo: 'saque', valor: 10}

## Próximos passos

Com isso, conseguimos enviar dados de um componente filho para o componente pai com sucesso, utilizando um evento personalizado juntamente com o dado desejado.

Agora, podemos continuar a implementar a comunicação entre outros componentes.



# 08 **Realizando a comunicação entre componentes**

Na empresa Jornada Milhas, a equipe de desenvolvimento está aprimorando o sistema de reservas para oferecer uma melhor experiência aos clientes. Durante a construção de um componente filho que exibe detalhes de um voo, surgiu a necessidade de permitir que o usuário selecione uma opção e envie essa informação para um componente pai que gerencia a reserva.

Como você ajudaria a equipe de desenvolvimento do Jornada Milhas a realizar a comunicação dessa informação de um componente filho para o componente pai?

[ ] Utilizar `input` para permitir a comunicação do filho para o pai ao transmitir eventos diretamente.

[ ] Utilizar `ViewChild` para acessar diretamente o componente filho e capturar seus eventos.

[ ] Utilizar `ngModel` para criar uma comunicação bidirecional entre os componentes.

[X] Utilizar `output` para permitir a comunicação do filho para o pai ao transmitir eventos diretamente.

Correta, pois essa abordagem permite que o componente filho envie dados e informações para o componente pai de forma eficiente.


Parabéns, você acertou!



# 09**Integração de dicas de cozinha**

A Cookin'UP, um aplicativo que compartilha receitas culinárias e dicas de cozinha, está expandindo suas funcionalidades para incluir dicas de cozinha personalizadas para cada receita. O aplicativo possui um componente de criação de dicas e um componente de exibição de receitas, que são componentes filhos de um componente pai. A equipe de desenvolvimento, da qual você faz parte, precisa garantir que as dicas criadas sejam associadas corretamente às receitas correspondentes e exibidas às pessoas usuárias.

Qual abordagem de comunicação entre esses módulos garantiria uma integração eficiente das dicas de cozinha?

[ ] Criar um banco de dados separado para dicas e receitas, onde cada componente acessa o banco de dados independentemente para buscar as informações necessárias.
[ ] Utilizar um sistema de notificações onde o componente de criação de dicas notifica o componente de exibição de receitas sempre que uma nova dica é criada, para que este atualize a exibição.

[ ] Utilizar um componente pai que centralize as associações entre receitas e dicas. O componente de criação de dicas envia cada dica como um output para o componente pai e o módulo de exibição acessa as associações através de input.

Correta, pois essa abordagem centraliza o gerenciamento das associações, permitindo que as dicas sejam corretamente vinculadas e exibidas com as receitas, garantindo precisão e eficiência na integração.

[ ] Implementar uma comunicação direta entre o componente de criação de dicas e o componente de exibição de receitas, onde cada dica é enviada diretamente para o componente de exibição assim que criada, sem um componente intermediário.



# 10 **Faça como eu fiz: compartilhando transações com componentes ancestrais**

Chegou sua vez de colocar em prática tudo o que vimos nesta aula! Para isso você precisa:

* Criar a classe `Transacao` para representar os dados de uma transação;
* Configurar `FormNovaTransacaoComponent` para emitir a transação usando `output()`;
* Escutar o evento `transacaoCriada` no `AppComponent` e processar a transação recebida.


# 11 **O que aprendemos?**

Nesta aula, aprendemos:

* Como compartilhar dados entre componentes Angular usando comunicação entre componentes pai e filho.
* A utilizar o `output` para enviar dados de componentes filhos para componentes pais.
* A criar e escutar eventos personalizados no Angular, capturando dados do evento com a sintaxe `$event`.
* A gerar classes com o comando `ng g class` para encapsular dados e definir modelos.
* A usar enumeradores e construtores em TypeScript para garantir consistência e inicializar propriedades.
