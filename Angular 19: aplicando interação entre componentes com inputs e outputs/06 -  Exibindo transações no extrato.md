# 01 **Projeto da aula anterior**

Para acompanhar o instrutor, você pode [baixar o projeto da aula anterior](https://github.com/alura-cursos/4456-angular-19-curso-2/archive/refs/heads/aula-05.zip) ou [acessar os arquivos do GitHub do projeto](https://github.com/alura-cursos/4456-angular-19-curso-2/tree/aula-05).

# 02 **Criando componentes Extrato e Transacao**

Conseguimos implementar a comunicação entre diversos dos nossos componentes, utilizando *input*, *output* e várias outras interações. Corrigimos erros, e atualmente a nossa aplicação está bastante funcional com o banner, a exibição do saldo e o formulário de uma nova transação.

## Relembrando o layout no Figma antes de codificar o extrato

Em aplicações bancárias, é comum que a pessoa usuária queira **consultar o seu extrato**, um histórico de transações já realizadas. Nossa aplicação ainda não possui essa funcionalidade, mas ela já está especificada no Figma, como já vimos anteriormente.

Conforme o Figma, a seção de extrato fica à direita da duas principais partes, que são o banner e o formulário, já codificadas. Esse extrato exibe exemplos de transações, onde aparece o valor da transação (se é um saque, o valor é negativo), e à sua direita, a data da transação. É isso que vamos começar a codificar.

## Criando o componente do extrato e adicionando-o ao app

Vamos abrir o VS Code. A primeira ação será criar um novo componente que chamaremos de extrato. No terminal, executaremos o comando `ng gc extrato`.

```bash
ng gc extrato
Copiar código
```

Este componente não faz parte de nenhum dos outros componentes que já criamos e ficará diretamente como filho do `AppComponent`.

A geração pode demorar um pouco, mas assim que terminar, fecharemos o terminal e acessaremos o arquivo HTML `app.component`. Abaixo da `div` do `form-wrapper` , escreveremos `app-extrato`, que é o que queremos importar do componente, e utilizaremos "Ctrl + Espaço para visualizar a sugestão de importação.

Após pressionar "Enter" para aceitar a importação, adicionaremos uma classe chamada `extrato` nesse `app-extrato`, pois há algumas estilizações que queremos adicionar diretamente no `AppComponent`. Por fim, fecharemos a chamada do componente com `/>`.

> `app.component.html`:

```html
<app-extrato class="extrato" />
Copiar código
```

Salvaremos o arquivo. Ao importar o componente, o arquivo *TypeScript* do nosso `AppComponent` já foi aberto, importando o `extrato component` no *array* de `imports` do nosso *app*. Salvaremos esse arquivo também.

> `app.component.ts`:

```typescript
import { ExtratoComponent } from "./extrato/extrato.component";
Copiar código
```

## Estilizando o componente de extrato com base na referência

Além disso, abriremos o arquivo CSS do nosso `AppComponent`, e adicionaremos o código CSS abaixo após o bloco `banner-form-wrapper`:

```css
.extrato {
    flex-basis: 17.625rem;
}

@media screen and (max-width: 48rem) {
    .extrato {
        flex-basis: 100%;
    }
}
Copiar código
```

Esse código aplica estilos para a classe `extrato`. Podemos salvar o arquivo e conferir no navegador que já aparece o texto padrão de componente no canto superior, à direita do banner de boas-vindas.

> extrato works!

## Estruturando o HTML do extrato e criando o componente de transação

Voltando ao VS Code, fecharemos os arquivos abertos e acessaremos o arquivo HTML do nosso extrato. Em seu interior, apagaremos o parágrafo padrão e escreveremos a *tag* `aside` com a classe `extrato`.

Dentro de `aside`, colocaremos um `h2` com a classe `titulo` e o texto "extrato". Abaixo do `h2`, colocaremos uma `ul` com a classe `transacoes`, onde teremos uma lista de transações. Dentro dessa `ul`, teremos várias `li`.

Por enquanto, escreveremos apenas um item de lista, e dentro dele chamaremos outro componente que criaremos agora.

> `extrato.component.html`:

```html
<aside class="extrato">
    <h2 class="titulo">Extrato</h2>

    <ul class="transacoes">
        <li>

        </li>
    </ul>
</aside>
Copiar código
```

Abriremos o terminal integrado e copiaremos o último comando enviado, `ng gc extrato`, teclando a seta para cima. Executaremos `ng gc extrato/transacao`, pressionando "Enter".

```bash
ng gc extrato/transacao
Copiar código
```

Assim, criaremos esse componente de transação na pasta "transacao", dentro da pasta "extrato". Fecharemos o terminal integrado, voltaremos para dentro da `li` e importaremos o nosso `app-transacao`. Fecharemos o componente com o sinal de maior `>`.

```html
<ul class="transacoes">
    <li>
        <app-transacao />
    </li>
</ul>
Copiar código
```

Salvaremos esse arquivo e abriremos o arquivo TypeScript do extrato. Ele já terá importado o `TransacaoComponent` e poderemos salvá-lo.

> `extrato.component.ts`:

```typescript
import { TransacaoComponent } from "./transacao/transacao.component";
Copiar código
```

Agora, verificaremos no navegador. O título "extrato" já está aparecendo, assim como o texto "transacao works!".

## Finalizando o HTML e aplicando os estilos do componente de transação

Queremos adicionar os estilos CSS abaixo no arquivo CSS do nosso extrato. Após colar o conteúdo, salvaremos o arquivo.

> `extrato.component.ts`:

```css
.extrato {
    border-radius: 0.5rem;
    background: var(--fundo-cinza-claro, #F5F5F5);
    padding: 2rem 1.5rem;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.titulo {
    font-size: 1.5625rem;
    font-weight: 600;
    line-height: 125%;
}

.transacoes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
Copiar código
```

Verificando no navegador, a área do extrato já estará com um fundo cinza, correspondendo ao do Figma. O título e o parágrafo também terão sido ajustados com suas estilizações.

Falta apenas o HTML do componente de transação. Estamos componentizando pequenas partes da aplicação para evitar componentes muito grandes e manter conteúdos focados, com dados mais organizados.

## Exibindo valor e data na transação com estilização visual

Voltaremos ao VS Code, fecharemos os arquivos abertos e abriremos a pasta "transacao". Abriremos o HTML dela, apagaremos o parágrafo e colocaremos uma `div` com a classe `transacao`.

Dentro da `div`, colocaremos um `span` com a classe `valor`. Podemos colocar o valor dessa `span` dentro de chaves duplas para interpolar um número, que colocaremos como "-50", conforme está no Figma.

Abaixo dessa `span`, adicionaremos outra com a classe `data`. Colocaremos uma data fixa, "23/11/2022", também conforme o Figma, apenas como exemplo.

> `transacao.component.html`:

```html
<div class="transacao">
    <span class="valor">{{ valor() | currency:'BRL' }}</span>
    <span class="data">{{ transacao().data | date:'dd/MM/yyyy' }}</span>
</div>
Copiar código
```

Salvaremos esse arquivo e voltaremos ao navegador, no qual os textos do extrato já estão aparecendo, mas estão todos juntos.

Para resolver esse problema, adicionaremos o CSS abaixo no arquivo do componente de transação:

> `transacao.component.css`:

```css
.transacao { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    gap: 1rem; 
} 

.valor { 
    font-size: 1rem; 
    font-weight: 600; 
} 

.data { 
    font-size: 0.8125rem; 
    font-weight: 400; 
} 
Copiar código
```

Após salvar o arquivo, voltaremos ao navegador. Agora, o valor da transação e a data estão separados: o valor está em negrito à esquerda e a data está com a fonte correta, à direita.

## Próximos passos

Este é apenas o início do componente de transação. A seguir, começaremos a dinamizá-lo.

# 03 **Listando transações com @for**

Já criamos o componente de extrato e o componente de transação que será inserido dentro do extrato. Atualmente, estamos exibindo apenas o título "Extrato" e uma única transação estática, que ainda não está bem formatada. O valor está em menos 50, e a data também é estática.

## Dinamizando a lista de transações

Precisamos dinamizar o extrato, pois, ao realizar uma nova transação, ela ainda não aparecerá na lista, já que estamos utilizando apenas HTML e CSS estáticos. Vamos então modificar o código para dinamizar essa lista.

Vamos abrir o VS Code. Já temos uma lista de transações no `app.component`. Podemos, então, abrir o arquivo `app.component.html`, onde a lista está próximo à linha 14, definida como um `signal`. Essa lista será populada conforme criarmos novas transações. Como é um `signal`, podemos passá-la por meio de um *input* para o nosso extrato.

No HTML do nosso aplicativo, utilizaremos a sintaxe correta, que envolve abrir e fechar colchetes. Vamos criar um *input* chamado `transacoes` no nosso `app.extrato` e definir que ele é igual a `transacoes()`. Como é um `signal`, precisamos abrir e fechar esses parênteses.

```html
//Código omitido

<app-extrato [transacoes]="transacoes()" class="extrato" />
Copiar código
```

O VS Code está indicando um erro porque ainda não criamos esse *input*. Vamos então criar o *input* de transações dentro do `app.extrato`.

Segurando a tecla "Ctrl", clicamos sobre o componente para abrir o arquivo TypeScript correspondente, nesse caso `extrato.componet.ts`. Na classe, criamos a propriedade `transações` e definimos que é um `input`. Importamos de `@angular/core` e utilizamos `input.required` para indicar que é obrigatório, abrindo e fechando parênteses. Antes disso, abrimos a *generics* do TypeScript para especificar que é do tipo `Transacao` com T maiúsculo, importando de `./modelos/transação`. Após importar, definimos que é uma lista de transações, abrindo e fechando colchetes dentro da *generics*. Agora, a tipagem está correta, e se inserirmos no HTML do aplicativo, a tipagem estará corrigida.

```ts
//Código omitido

export class ExtratoComponent {
  transacoes = input.required<Transacao[]>();
}
Copiar código
```

Voltando ao TypeScript do extrato, podemos salvar o arquivo. Em seguida, abrimos o HTML do extrato `extrato.component.html`. No template, temos acesso à lista de transações por meio do *input*. Queremos renderizar uma `<li>` para cada membro da lista. Antes da `<li>`, escrevemos `@for`, utilizando a ajuda do VS Code para renderizar esse *for*. Cada item da lista será uma transação, utilizando `transação of transacoes()`. Precisamos abrir e fechar os parênteses também, pois o *input* é um `signal`, e essa sintaxe é necessária. Por enquanto, manteremos o `track $index`, mas melhoraremos esse código posteriormente. Dentro do *for*, nas chaves, podemos passar uma `<li>`, onde cada uma renderiza um `app-transação`.

```html
//Código omitido

  <ul class="transacoes">
    @for (transacao of transacoes(); track transacao.id) {
      <li>
        <app-transacao />
      </li>

  </ul>
</aside>
Copiar código
```

Ao salvar o arquivo e voltar ao navegador, a transação estática que estava lá desapareceu, pois nossa lista começa vazia e, portanto, não renderiza nenhuma `<li>`.

Vamos continuar o desenvolvimento do código. Mesmo que adicionemos transações, elas ainda serão estáticas, e queremos personalizar cada uma delas na visualização. Para isso, criaremos um *input* para o componente de transação. Vamos criar um *input* chamado `transacao`, colocando-o entre colchetes, e definir que ele é igual a `transacao`. Estamos pegando essa transação da variável disponibilizada pelo nosso `for` e passando para um *input* chamado `transAção`, que será criado agora no componente.

```html
//Código omitido

  <ul class="transacoes">
    @for (transacao of transacoes(); track transacao.id) {
      <li>
        <app-transacao [transacao]="transacao" />
      </li>
Copiar código
```

Após salvar o arquivo, abriremos o arquivo `transacao.component.ts`. Na classe, criaremos a propriedade de transação, que será um *input*. Importamos de `@angular/core`, escrevemos `.required` para indicar que é obrigatório, abrimos e fechamos parênteses, e tipamos a transação como `Transacao`, que será importado de `../../modelos/transação`.

No componente `.type`, que era o extrato, recebíamos uma lista de transações como *input*, mas o componente de transação não recebe uma lista, e sim uma única transação para personalizar a forma como será renderizada. Salvamos o arquivo.

```ts
//Código omitido

export class TransacaoComponent {
  transacao = input.required<Transacao>();
Copiar código
```

Por fim, abrimos o `transacao.component.html` e podemos personalizar o que será renderizado. No lugar do "-50", colocamos `transacao`, que é o nosso *input*. Abrimos e fechamos parênteses, e depois de fechá-los, escrevemos `.valor` para verificar se funciona.

```html
<div class="transacao">
   <span class="valor">{{ transacao().valor }}</span>
  <span class="data">{{ transacao().data | date:'dd/MM/yyyy' }}</span>
</div>
Copiar código
```

Salvamos o arquivo, voltamos ao navegador e inserimos uma nova transação para verificar se aparece corretamente. Realizamos um depósito de R\$10, pressionamos "Enter", assim ele é exibido. O saldo também foi aumentado em R\$10. Realizamos mais um depósito de R\$1, pressionamos Enter, e o R\$1 aparece no topo do extrato, mostrando as transações mais recentes primeiro, devido à escolha de inserir a transação sempre no início do *array*.

## Formatando corretamente o valor da transação

O próximo ajuste será **formatar corretamente o valor da transação**. Voltamos ao código, abrimos o arquivo TypeScript da transação, e no *array* de *imports* na linha 6, importamos o `currency pipe`.

```ts
//Código omitido

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
Copiar código
```

Salvamos o arquivo, abrimos o HTML, e utilizamos o operador de *pipe* no `transação.valor`. Passamos a barra vertical, escrevemos `currency`, e não esquecemos de passar o parâmetro, que é uma *string* "brl". Escrevemos dois pontos, e depois "brl" entre aspas.

```html
<div class="transacao">
   <span class="valor">{{ transacao().valor | currency: 'BLR' }}</span>
  <span class="data">{{ transacao().data | date:'dd/MM/yyyy' }}</span>
</div>
Copiar código
```

Salvamos o arquivo, voltamos ao navegador e realizamos mais um teste. Fazemos um depósito de R\$1.000, confirmamos, e o valor aparece no extrato. Se fizermos um depósito de R\$100 agora e confirmarmos a transação, ela aparece no topo.

O extrato está ficando bem apresentável, mas ainda há ajustes a serem feitos para completá-lo. Nos encontramos no próximo vídeo.

# 04 **Gerando ID único para cada transação**

Já conseguimos dinamizar a renderização da nossa lista de transações dentro do componente de extrato! Fizemos duas transações de depósito, uma de R\$ 1.000 e uma de R\$ 100,00, e elas já estão sendo mostradas de forma dinâmica no extrato, o que é muito positivo. No entanto, há um ponto de melhoria no nosso código que queremos destacar, então vamos voltar para o VS Code.

## Entendendo o Problema com `$index` no `@for`

No `@for` do arquivo `extrato.component.html`, temos a parte do `track`, que o Angular utiliza para rastrear corretamente cada item da nossa lista, garantindo que será renderizado corretamente e com boa performance.

Por padrão, ele fornece o `$index`. Podemos utilizar o `$index` se estivermos renderizando com o `@for` uma lista estática, pois o índice é basicamente a posição de cada membro do *array*. Se a lista for estática, esse índice não será alterado. No entanto, esse não é o nosso caso.

```xml
<aside class="extrato">
  <h2 class="titulo">Extrato</h2>
  <ul class="transacoes">
    @for (transacao of transacoes(); track $index) {
      <li>
        <app-transacao [transacao]="transacao" />
      </li>
    }
  </ul>
</aside>
Copiar código
```

Nossa lista é completamente dinâmica, começando vazia, e novas transações são inseridas conforme a pessoa usuária utiliza a aplicação. Além disso, as inserções ocorrem no início, não no final. Portanto, o `$index` não é confiável para que o Angular utilize essa informação para renderizar corretamente e de forma performática a nossa lista.

## Utilizando um Identificador Único

Sempre que tivermos uma lista mutável e dinâmica sendo renderizada pelo `@for`, o Angular recomenda fortemente que utilizemos um identificador único para cada membro dessa lista. Mas será que já temos isso dentro do nosso modelo de transação? Vamos teclar "Ctrl + P" e escrever `transacao.ts` para localizar o arquivo da classe.

```typescript
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

Analisando esse arquivo, verificamos que a classe de transação possui apenas um tipo e um valor, e nenhum desses dois valores é único. O tipo pode ser o mesmo para várias transações, e o valor também. Portanto, devemos adicionar uma nova propriedade que identifique unicamente cada transação.

## Instalando o `nanoid` para Gerar IDs Únicos

Queremos algo como um `readonly id` dentro da classe, um id único. Mas como gerar esse identificador único? Existem várias bibliotecas que geram ids únicos, e optamos por usar a chamada **nanoid**. Vamos instalá-la a partir do terminal.

Para isso, abrimos o terminal com "Ctrl + Alt + '", interrompemos o servidor com "Ctrl + C" e executamos o seguinte comando:

```bash
npm i nanoid@5.0.9 -E
Copiar código
```

Isso garantirá que utilizemos exatamente a mesma versão, evitando problemas de compatibilidade.

Enquanto a biblioteca está sendo instalada, podemos conferir a [documentação do nanoid no site npmjs.com](https://www.npmjs.com/package/nanoid). No momento da gravação deste vídeo, a versão 5.0.9 é a mais recente, mas é possível que novas versões já tenham sido lançadas quando você estiver assistindo.

Voltando para o VS Code, o pacote já foi instalado. Podemos conferir isso no arquivo `package.json`. Ao abrir o explorador no projeto e acessar o `package.json`, verificamos que o `nanoid` foi instalado exatamente na versão desejada.

```json
"nanoid": "5.0.9",
Copiar código
```

## Implementando o `nanoid` no Código

Agora que o pacote está instalado, podemos importar os métodos que ele disponibiliza. No arquivo da classe, vamos atribuir ao nosso `id` o `nanoid`. Utilizamos a sugestão do VS Code para importar esse pacote, abrindo e fechando os parênteses conforme especificado na documentação da biblioteca.

```typescript
import { nanoid } from "nanoid";

export class Transacao {
  readonly id = nanoid();

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

Feito isso, salvamos o arquivo, o que é suficiente para gerar um identificador único.

## Atualizando o `@for` com `transacao.id`

Sabemos que toda transação terá uma propriedade chamada `id`. No arquivo `extrato.component.html`, podemos remover `$index`, acessando a propriedade da transação com `transacao.id`.

```html
<aside class="extrato">
  <h2 class="titulo">Extrato</h2>
  <ul class="transacoes">
    @for (transacao of transacoes(); track transacao.id) {
      <li>
        <app-transacao [transacao]="transacao" />
      </li>
    }
  </ul>
</aside>
Copiar código
```

Para visualizar o identificador, fazemos uma interpolação com `transacao.id` abaixo da `<li>`.

```html
<aside class="extrato">
  <h2 class="titulo">Extrato</h2>
  <ul class="transacoes">
    @for (transacao of transacoes(); track transacao.id) {
      <li>
        <app-transacao [transacao]="transacao" />
      </li>
        {{ transacao.id }}
    }
  </ul>
</aside>
Copiar código
```

Feito isso, salvamos o arquivo.

Agora, precisamos reiniciar o servidor executando `npm start`. Lembre-se que é necessário reiniciar o servidor sempre que ele é interrompido.

```bash
npm start
Copiar código
```

Após a construção, voltamos ao navegador. Realizamos uma nova transação, como um depósito de R\$ 5,00, e verificamos que um identificador com vários caracteres aleatórios aparece. Em seguida, realizamos um saque de R\$ 1,00 e confirmamos que cada transação possui um identificador único. Isso demonstra o funcionamento da biblioteca.

Como já testamos a visualização do identificador, voltamos ao código e removemos a interpolação `{{ transacao.id }}`.

## Exibindo uma Mensagem Quando Não Houver Transações

Para finalizar, queremos adicionar uma mensagem quando não houver transações. Utilizamos um bloco que o Angular disponibiliza, chamado `@empty`, logo após a chave de fechamento do `for`.

Dentro desse bloco, inserimos uma `<li>` com o atributo `aria-hidden` igual a `true` para acessibilidade, **garantindo que o item não seja encontrado por leitores de tela**. Dentro da `<li>`, colocamos a frase "**Ainda não há transações.**".

```html
<aside class="extrato">
  <h2 class="titulo">Extrato</h2>

  <ul class="transacoes">
    @for (transacao of transacoes(); track transacao.id) {
      <li>
        <app-transacao [transacao]="transacao" />
      </li>
    } @empty {
      <li aria-hidden="true">
        Ainda não há transações.
      </li>
    }
  </ul>
</aside>
Copiar código
```

Ao salvar o arquivo e atualizar a página no navegador, a frase "**Ainda não há transações.**" aparece, pois a lista está vazia.

## Conclusão e Próximos Passos

Aplicamos uma boa prática ao garantir que cada membro da lista tenha um identificador único, o que é importante em listas mutáveis. Essa prática é útil para projetos futuros.

No próximo vídeo, faremos mais uma melhoria no projeto. Até lá!

# 05 **Identificação única de produtos no e-commerce**

A Zoop, uma plataforma de e-commerce que oferece soluções tecnológicas completas para vendedores online, está enfrentando um desafio com a gestão de estoque. A equipe de desenvolvimento que você faz parte está trabalhando em um sistema que precisa lidar com uma lista dinâmica de produtos, onde novos itens são constantemente adicionados e removidos. A empresa decidiu que cada produto deve ter um identificador único para garantir que o sistema funcione corretamente, mesmo com alterações frequentes na lista de produtos.

Como você implementaria essa solução para garantir que cada produto tenha um identificador único e que o sistema funcione de forma eficiente?

[ ] Adicionar um campo de data de criação para minimizar a inconsistência, além de implementar um sistema de logs que registre cada alteração na lista para facilitar o rastreamento de mudanças.

[ ] Atribuir identificadores únicos manualmente a cada produto, anotando-os em um documento separado para referência futura, e criar um processo de revisão periódica para garantir que os identificadores estejam atualizados e corretos.

[ X] Utilizar uma biblioteca que gera IDs únicos, garantindo que cada produto seja identificado de forma consistente e precisa, independentemente de alterações na lista.

Correta, pois você pode utilizar uma biblioteca como o `nanoid` para gerar identificadores únicos. Cada produto recebe um ID único que não muda com a alteração da lista.

[ ] Utilizar o nome do produto como identificador único, assumindo que cada nome de produto será sempre único, e implementar um sistema de verificação que alerte sobre possíveis duplicatas ou alterações nos nomes dos produtos.



# 06 **Exibindo datas das transações**

Nós instalamos uma biblioteca que cria um ID único para cada transação. Isso garante que a diretiva `@for` renderize corretamente nossas transações, sem problemas de otimização, por exemplo, e até mesmo na renderização da ordem dessas transações. Além disso, também estamos exibindo uma mensagem informando que ainda não há transações quando não há nenhuma transação.

Agora, vamos criar uma nova transação. Por exemplo, podemos registrar um depósito de R\$10,00. Atualmente, está aparecendo um valor estático na data, que é 23/11/2022. Esse valor está fixo no componente e queremos torná-lo dinâmico. Vamos entender qual lógica utilizaremos para mostrar a data em que a transação foi realizada.

## Adicionando a Data à Transação

No arquivo `transacao.ts`, adicionaremos mais uma propriedade para cada uma das transações. Vamos escrever `readonly data = new Date()`:

```typescript
import { nanoid } from "nanoid";

export class Transacao {
  readonly id = nanoid();
  readonly data = new Date();

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

Assim, basta instanciarmos um novo objeto de data sempre que uma nova transação for criada a partir dessa classe. Feito isso, salvamos o arquivo.

Conforme evoluímos as lógicas de como lidar com as transações, percebemos cada vez mais os benefícios de encapsular a forma de criar uma transação dentro de uma classe. Não precisamos alterar como essa classe está sendo criada, por exemplo, no componente de formulário. Tudo fica encapsulado na classe, e cada arquivo mantém sua própria responsabilidade. Isso é algo muito interessante e está alinhado com o princípio da responsabilidade única do SOLID.

## Exibindo a Data Dinâmica

Agora, no arquivo `transacao.component.html`, removemos a data fixa. Depois, abrimos e fechamos duas chaves dentro do `span` e escrevemos `transacao()` para acessar seu valor, passando `.data`.

```html
<div class="transacao">
  <span class="valor">{{ valor() | currency:'BRL' }}</span>
  <span class="data">{{ transacao().data }}</span>
</div>
Copiar código
```

Ao salvarmos o arquivo, voltarmos ao navegador e realizarmos um depósito de R\$ 20,00, aparecerá uma data estranha, formata neste estilo:

> Tue Feb 04 2025
>
> 17:06:46 GMT-0300 (Horário Padrão de Brasilia)

## Formatando a Data com `DatePipe`

Vamos formatar essa data com o `DatePipe`. No VS Code, abrimos o arquivo `transacao.component.ts` e importamos o `DatePipe`, além do `CurrencyPipe`, no array de importações:

```typescript
import { CurrencyPipe, DatePipe } from '@angular/common';
Copiar código
```

Feito isso, salvamos o arquivo e voltamos para `transacao.component.html`. Após `transacao.data`, utilizamos o operador pipe `|` e escrevemos `date` em um formato específico. Vamos relembrar como formatar: escrevemos o parâmetro `date:`, abrimos aspas simples e colocamos `dd` minúsculo para dois dígitos do dia do mês, `MM` maiúsculo para dois dígitos do mês e, por fim, quatro `y` para quatro dígitos do ano: `date:'dd/MM/yyyy'`.

O código ficará assim:

```html
<div class="transacao">
  <span class="valor">{{ valor() | currency:'BRL' }}</span>
  <span class="data">{{ transacao().data | date:'dd/MM/yyyy' }}</span>
</div>
Copiar código
```

Feito isso, salvamos o arquivo e voltamos ao navegador para realizar mais um teste. Fazemos um depósito de R\$ 100,00, confirmamos e, agora, a data 04/02/2025 aparece corretamente - que é a data de gravação deste vídeo. Se realizarmos mais uma transação, como um saque de R\$ 10,00, a data de hoje aparecerá novamente. Corrigimos com sucesso a questão da data de cada transação!

## Atividade Final: Indicando Saques no Extrato

No entanto, ainda há um detalhe: ao realizar um saque de R\$10,00, não há nenhum indicador no extrato de que esse valor é um saque. Parece até um depósito, mas não é. Precisamos corrigir essa informação.

No Figma, há um indicativo de quando é um saque, com um exemplo de saque de R\$50,00, que basicamente coloca o sinal de menos (`-`) para indicar que é um valor negativo. Essa correção será uma atividade para você, e assim concluiremos o projeto deste curso.

Após realizar essa atividade, esperamos você no último vídeo do curso!


# 07 **Encapsular funcionalidades**

A equipe da Jornada Milhas precisa calcular os preços das passagens aéreas com base na categoria escolhida pelo cliente e em regras promocionais. Para garantir organização e facilitar a manutenção do código, os desenvolvedores decidiram encapsular essa lógica em uma classe específica.

Por que encapsular essa funcionalidade em uma classe pode ser considerado uma boa prática no desenvolvimento da aplicação?


[ ] Porque permite reutilizar o cálculo dos preços das passagens em diferentes partes do código, melhorando a organização e manutenção.

Correta, pois encapsular funcionalidades em classes melhora a reutilização do código e facilita a manutenção ao isolar responsabilidades.

[ ] Porque impede qualquer modificação no cálculo, tornando-o completamente imutável para evitar alterações inesperadas.

Incorreta, pois classes permitem modificar comportamentos conforme necessário, e encapsulamento não significa imutabilidade total.

[ ] Porque elimina a necessidade de declarar variáveis dentro da classe, tornando o código mais curto e eficiente.

Incorreta, pois o uso de classes não elimina a necessidade de declarar variáveis, mas organiza melhor a lógica.

[ ] Porque classes garantem que o código será executado sempre da mesma forma, sem precisar de atualizações futuras.


# 08 **Mão na massa: implementando sinal negativo no saque**

Nossa aplicação está quase completa, falta apenas diferenciar os tipos de transação no extrato do Anybank para que seja possível identificar quais valores foram retirados da conta e quais valores foram depositados.

Por isso, conto uma última vez com a sua ajuda para implementar essa funcionalidade, que vai ajudar a tornar a aplicação mais intuitiva.

Para isso você pode:

* Abrir o arquivo `transacao.component.ts`;
* Adicionar uma condição dentro da classe `TransacaoComponent` para verificar o tipo de transação e, caso seja um saque, colocar o sinal negativo no valor do template.

Abaixo está o passo a passo detalhado de como você pode realizar a atividade!



# 09 **Para saber mais: SOLID**

No vídeo anterior, foi mencionado sobre o chamado **Princípio da Responsabilidade Única** (do inglês *Single Responsibility Principle* ou SRP), que determina a letra “S” dos princípios SOLID.

Caso queira ler mais sobre esse tema, recomendo o artigo [SOLID: o que é e quais os 5 princípios da Programação Orientada a Objetos (POO)](https://www.alura.com.br/artigos/solid)!

Bons estudos. :)


# 10 **Projeto final e portfólio**

Ufa! Agora que o curso terminou, você pode [baixar](https://github.com/alura-cursos/4456-angular-19-curso-2/archive/refs/heads/aula-06.zip) ou [acessar os arquivos no GitHub](https://github.com/alura-cursos/4456-angular-19-curso-2/tree/aula-06) do projeto final.

Vou aproveitar para te contar algumas dicas de como usar esse projeto no seu portfólio e te preparar para uma entrevista de emprego!

## O que você aprendeu com esse projeto?

Com o projeto deste curso você aprendeu:

* Criação e gerenciamento de projetos e componentes com a Angular CLI;
* Comunicação entre componentes usando `inputs` e `outputs`;
* Formatação de dados usando *pipes* como `DatePipe`, `CurrencyPipe`, `TitleCasePipe` e `KeyValuePipe`;
* Internacionalização (`i18n`) para suporte a diferentes idiomas;
* *Two-way data binding* com `ngModel` para formulários dinâmicos;
* Uso de `signals` e `computed` para otimizar a reatividade da aplicação;
* Geração de identificadores únicos com o uso da ferramenta `nanoid`.

## E onde você usará esses conhecimentos?

O Angular é um framework bem completo para criar uma aplicação frontend. Aqui abaixo, vou deixar algumas aplicações que usam Angular:

* [Clickup](https://clickup.com/), uma plataforma de gerenciamento de projetos e produtividade que permite equipes e indivíduos organizarem tarefas, acompanharem prazos e colaborarem de maneira eficiente;
* [Gemini](https://gemini.google.com/), modelo de inteligência artificial desenvolvido pelo Google;
* [Google Fonts](https://fonts.google.com/), um site com muitas fontes para você utilizar em seus projetos;
* [Adobe Fonts](https://fonts.adobe.com/), assim como o Google Fonts, também possui muitas opções de fontes;
* [HP](https://www.hp.com/br-pt/home.html), o site da famosa marca de impressora e acessórios para computadores.

Essas são apenas algumas das empresas que aplicam o Angular em seu desenvolvimento, mas existem muitas outras que optam por esse framework.

Ao navegar nos sites e ferramentas que mencionamos, é possível ver muitos conceitos que foram explorados ao longo das aulas deste curso como reatividade, formatação de informações como datas, valores e caracteres, internacionalização, aplicação de formulários e muito mais.

## Como usar esses conhecimentos para expandir seu portfólio?

Incrível! Você seguiu os passos desse curso comigo e agora possui um projeto completo nas suas mãos, mas como utilizá-lo no seu portfólio e em uma entrevista de emprego?

1 - Decida onde hospedará seu portfólio

Em um site pessoal? No YouTube? No GitHub? A decisão de onde você hospedará esses e seus outros projetos é muito importante!

Recomendamos usar primariamente o GitHub por ser uma plataforma já bem difundida, com todas as ferramentas que você precisa, na maioria gratuita e que já demonstra que você manja de git! ;)

2 - Personalize seu projeto

Uma das coisas mais interessantes que você pode fazer com o projeto final do curso é usar todo seu conhecimento, seja o aprendido nesse curso ou em outros, para tornar o projeto com sua cara!

* Pensou em uma funcionalidade nova? Implemente-a!
* Quer aplicar os conceitos desse curso para resolver outros problemas? Incrível! Quanto mais aplicabilidade na realidade, melhor!

3 - Destaque seu papel

Tenha muito bem em mente o que você trouxe de novo, de criativo e de real para o projeto durante a personalização, anote:

* O que embasou sua tomada de decisão;
* Quais técnicas você escolheu para resolver seus problemas;
* Quais desafios você teve e como você os superou.

4 - O README é a alma do negócio!

Crie um README para sua aplicação que valorize os aspectos aprendidos nos cursos, mas principalmente suas contribuições! Um arquivo README claro e profissional é essencial para seu projeto se destacar! Um README de sucesso em geral contém:

* Boa diagramação;
* GIFs ou Screenshots com a execução do projeto;
* Objetivo do projeto;
* Origem do projeto e suas contribuições;
* Tecnologias e técnicas utilizadas;
* Passo a passo para rodar o projeto;
* Bugs e defeitos conhecidos, e futuras implementações.

5 - Valorize seu GitHub

A página inicial do GitHub pode ser o seu primeiro cartão de visitas, então é bem interessante que ela seja informativa e interessante!

Aqui vão algumas dicas para que ela chame atenção:

* Descreva brevemente sua experiência e formação;
* Fale um pouco sobre você;
* Destaque suas contribuições e participações;
* Deixe “pinnado” (fixado) os seus principais projetos, aqueles que você mais se orgulha.

Se quiser saber mais sobre como fazer essas configurações, recomendo esses dois vídeos de Alura Stars (e também pessoas instrutoras!):

* [Como personalizar o seu perfil no GitHub (Readme)](https://youtu.be/TsaLQAetPLU?si=N20DHd3v4BE1GGvK)
* [Como criar uma página de perfil (Readme) perfeita no GitHub](https://youtu.be/D2ebJ48h0N0?si=PVgUmzAuLb8Fdhlf)

Bons estudos!


# 11 **O que aprendemos?**

Nesta aula, aprendemos a:

* Utilizar `input` para componentes filhos receberem dados dinâmicos.
* Utilizar a biblioteca `nanoid` para gerar IDs únicos.
* Aplicar um identificador único no `track` do `@for` para evitar problemas de performance e renderização.
* Encapsular funcionalidades em classes para facilitar manutenção e seguir boas práticas.



# 12 **Conclusão**


**Parabéns por finalizar mais um curso de Angular nessa incrível jornada!**

Vamos mostrar a versão final do Anybank para recapitularmos os conceitos que abordamos?

Começamos pelo banner, um componente grande, onde aplicamos um *pipe* de data e formatamos da maneira desejada. Vimos como o Angular facilita a realização dessas formatações sem a necessidade de usar JavaScript puro, oferecendo uma forma direta de fazer isso.

Em seguida, vimos como aplicar um *pipe* de moeda em nosso saldo e até um pouco de internacionalização para traduzir nossa aplicação, tanto no dia da semana quanto na questão de ponto e vírgula, que é a formatação da moeda.

No formulário, aprendemos a utilizar o `ngModel`, que é uma abordagem de formulários orientados a *template*, para controlarmos as informações com as quais a pessoa usuária interage no formulário.

Aprendemos como capturar informações na submissão do formulário e, em seguida, como transmiti-lás entre os componentes utilizando *outputs*, *inputs* e outros recursos, como *signals* e *computed*, para tornar nossa aplicação reativa e dinâmica, com vários efeitos colaterais ocorrendo conforme os dados são definidos pela pessoa usuária.

No final, concluímos mostrando o extrato, aproveitando várias informações que já tínhamos no projeto. Vamos relembrar essa parte fazendo um depósito de R\$50,00. No extrato, utilizamos uma lista completamente dinâmica e até mesmo uma biblioteca específica para isso, formatando a data.

O projeto está muito bem estruturado, e estamos orgulhosos do que construímos juntos! Esperamos que vocês também se sintam orgulhosos.

Se desejar, compartilhe este projeto no LinkedIn, marcando o instrutor Antônio Evaldo e a Alura. Caso tenha dúvidas na construção, utilize o [fórum da Alura](https://cursos.alura.com.br/forum/todos/1) ou a [comunidade do Discord da Alura](https://discord.com/invite/QeBdgAjXnn).

Não deixe de realizar as atividades deste curso, pois são uma excelente oportunidade para colocar em prática todos esses conhecimentos!

Esperamos você no próximo passo dessa jornada!
