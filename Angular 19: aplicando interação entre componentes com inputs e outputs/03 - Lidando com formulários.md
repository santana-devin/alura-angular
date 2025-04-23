# 01 **Projeto da aula anterior**

Para acompanhar o instrutor, você pode [baixar o projeto da aula anterior](https://github.com/alura-cursos/4456-angular-19-curso-2/archive/refs/heads/aula-02.zip) ou [acessar os arquivos do GitHub do projeto](https://github.com/alura-cursos/4456-angular-19-curso-2/tree/aula-02).

# 02 **Criando componente FormNovaTransacao**

Já finalizamos o banner da nossa aplicação AnyBank. Exploramos diversos conceitos interessantes, como *pipes* e internacionalização. Agora, é o momento de avançarmos mais na nossa aplicação.

Até o momento, ainda não conseguimos realizar nenhuma operação bancária. Queremos ser capazes, por exemplo, de efetuar **saques e depósitos**, ajustando o saldo conforme necessário. Como podemos implementar isso?

Felizmente, ao abrir o Figma, encontramos um formulário específico para essa finalidade: o formulário de **nova transação**. Vamos aprender muito com ele, então é hora de colocar a mão no código e começar a desenvolvê-lo.

### Criando novo componente

Vamos abrir o VS Code e criar um novo componente dedicado a esse formulário. Vamos abrir um novo terminal integrado, para manter o terminal do servidor ativo. Utilizaremos o comando `ng gc` para gerar um novo componente chamado `form-nova-transacao`.

```shell
ng g c form-nova-transacao
Copiar código
```

Após pressionar "Enter", aguardaremos a criação do componente dentro da pasta `app`.

> CREATE src/app/form-nova-transacao/form-nova-transacao.component.html (35 bytes) CREATE src/app/form-nova-transacao/form-nova-transacao.component.ts (275 bytes) CREATE src/app/form-nova-transacao/form-nova-transacao.component.css (0 bytes)

### Importando o formulário

Com o componente de formulário criado, fechamos o terminal e abrimos o explorador. Dentro da pasta `app`, encontramos uma nova pasta chamada `form-nova-transacao`, contendo arquivos HTML, CSS e TypeScript. Vamos importar esse formulário no nosso aplicativo.

Abrimos o arquivo `app.component.html` e, abaixo de `app-banner`, ainda dentro da `div` de `banner-form-wrapper`, inserimos a tag `app-form-nova-transacao`.

```html
<div class="app">
  <div class="banner-form-wrapper">
    <app-banner />
    <app-form-nova-transacao />
  </div>
</div>
Copiar código
```

Após fechar a tag, salvamos o arquivo. O arquivo TypeScript, que foi aberto automaticamente, já contém as linhas de importação do formulário e ele foi adicionado ao array de importação na linha 7.

```typescript
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
Copiar código
```

```typescript
@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
Copiar código
```

Salvamos esse arquivo também.

### Verificando a aplicação

Ao retornar ao navegador e abrir a aplicação AnyBank, já podemos ver o parágrafo `form-nova-transacao-works` aparecendo.

Agora, vamos abrir o arquivo desse componente e começar a desenvolvê-lo.

### Desenvolvendo o HTML do formulário

Fechamos as outras abas e abrimos o HTML do `form-nova-transacao`. Apagamos o parágrafo inicial e começamos a desenvolver o HTML do componente. Iniciamos com uma tag `main` com a classe `form-wrapper`, que envolve o formulário.

```html
<main class="form-wrapper">

</main>
Copiar código
```

Dentro do `main`, criamos um `form` com a classe `form`, removendo o atributo `action` que o VS Code adicionou automaticamente, pois não será necessário.

Dentro do formulário, inserimos um `h2` com a classe `titulo`, cujo texto será "Nova Transação".

Abaixo do `h2`, adicionamos uma `div` com a classe `campos`, utilizada principalmente para organização.

Dentro dessa `div`, colocamos uma `label` com a classe `campo-grupo`. Removemos o atributo `for` da `label`, pois utilizaremos uma estratégia diferente para vinculá-la ao campo de formulário, que será explicada em breve.

```html
<main class="form-wrapper">
  <form class="form">
    <h2 class="titulo">Nova transação</h2>

    <div class="campos">
      <label class="campo-grupo">
        Transação
      </label>
    </div>
  </form>
</main>
Copiar código
```

Salvamos o arquivo e verificamos como está ficando. No HTML, já podemos ver o título `h2` "Nova Transação" e a `label` "Transação". Retornamos ao código para continuar o desenvolvimento.

Ainda dentro da `label`, abaixo do texto "Transação", adicionamos uma `div` com a classe `select-wrapper`, que envolverá o campo de seleção.

Agora vamos escrever o campo `select`, que terá duas classes: uma chamada `campo` e outra chamada `select-tipo-transacao`. O `select` terá um atributo `name` com o valor `tipo-transacao`, e vamos remover o `id` dele, pois está diretamente dentro da `label`.

Dentro dele, colocaremos opções. A primeira opção terá um `value` como uma string vazia, será selecionada por padrão e desabilitada. Essa opção exibirá o texto "Selecione o tipo de transação" antes da interação com o formulário.

```html
<option value="" selected disabled>Selecione o tipo de transação</option>
Copiar código
```

Abaixo dessa opção, criaremos mais uma. O `value` será "deposito" em minúsculas, mantendo a padronização dos valores das opções. O texto será "Depósito", com "D" maiúsculo e acento no "O".

```html
<option value="deposito">Depósito</option>
Copiar código
```

Na terceira `option`, o `value` será "saque" em minúsculas, e o conteúdo será "Saque", com "S" maiúsculo.

```html
<main class="form-wrapper">
  <form class="form">
    <h2 class="titulo">Nova transação</h2>

    <div class="campos">
      <label class="campo-grupo">
        Transação
        <div class="select-wrapper">
          <select name="tipo-transacao" class="campo select-tipo-transacao" required>
            <option value="" selected disabled>Selecione o tipo de transação</option>
            <option value="deposito">Depósito</option>
            <option value="saque">Saque</option>
          </select>
        </div>
      </label>
    </div>
  </form>
</main>
Copiar código
```

Após salvar o arquivo e voltar ao navegador, verificamos que a opção "Selecione o tipo de transação" aparece por padrão. Podemos selecionar "Depósito" ou "Saque", mas não a opção padrão, o que está funcionando conforme esperado. No entanto, o formulário ainda não está estilizado como desejamos.

## Estilizando o formulário

Vamos copiar o código CSS abaixo e colá-lo no arquivo CSS do novo componente. Esse código inclui personalizações, como a setinha que aparece no `select`.

```css
.form-wrapper {
  background: var(--fundo-azul-claro, #F2FBFF);
  border-radius: 0.5rem;
  padding: 2rem;

  display: flex;
  justify-content: center;
  gap: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
}

.titulo {
  font-size: 1.5625rem;
  font-weight: 600;
  line-height: 125%;
}

.campos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.campo-grupo {
  font-size: 1rem;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.campo {
  border-radius: 1rem;
  border: 2px solid var(--preto);
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: border .3s;
}

.campo:focus {
  outline: none;
  border: 2px solid var(--azul-pressionado);
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  position: absolute;
  content: "▼";
  font-size: 0.9rem;
  top: 0.625rem;
  right: 1.5rem;
}

.select-tipo-transacao {
  padding-right: 3.5rem;
  appearance: none;
  background-color: transparent;
}
Copiar código
```

Após salvar o arquivo e voltar ao navegador, o formulário está mais bonito e correspondente ao Figma. Podemos selecionar as opções, e ele exibe uma borda azul ao ser selecionado.

## Próximo passo

Ainda não conseguimos definir o valor da transação, mas isso será abordado no próximo vídeo!

# 03 **Facilitando a navegação**

A CodeChella, uma organização de festival de música, está desenvolvendo um aplicativo para ajudar os participantes a navegar pelas diversas atrações do evento. A equipe de desenvolvimento, da qual você faz parte, está criando um formulário de seleção de atrações que permita às pessoas usuárias escolher entre diferentes palcos e horários. O formulário deve exibir "Selecione uma atração" como opção padrão, que não pode ser selecionada.

Como você implementaria esse formulário para garantir que a opção padrão seja exibida corretamente, mas não seja selecionável, enquanto as outras opções estejam disponíveis para seleção?

[ ] Criar um campo de seleção com a opção "Selecione uma atração" marcada como `selected`.

[X] Criar um campo de seleção com a opção "Selecione uma atração" marcada como `disabled` e `selected`.

Correta, pois essa abordagem garante que a opção padrão seja exibida corretamente e não seja selecionável, enquanto as outras opções estão disponíveis para escolha, proporcionando uma interface intuitiva.

[ ] Criar um campo de seleção com a opção "Selecione uma atração" marcada como `selected` e `required`.

[ ] Criar um campo de seleção com a opção "Selecione uma atração" marcada como `selected` e `readonly`.

# 04 **Finalizando HTML do FormNovaTransacao**

Já começamos a desenvolver nosso formulário para uma nova transação, mas até agora criamos apenas o campo de *select* para selecionar entre depósito ou saque.

Ainda não conseguimos definir o valor dessa transação. Podemos relembrar como nosso formulário ficará no final, conforme o design no Figma. Teremos um campo para o valor e um botão para confirmar a transação, que é o que faremos agora.

## Adicionando e configurando o input numérico

Vamos voltar ao VS Code. Dentro da `div` de campos, com a classe `campos`, temos a `label` do primeiro campo de grupo. Vamos adicionar mais uma logo abaixo, que também terá a classe `campo-grupo`, já que compartilham alguns estilos. Dentro da `label`, colocaremos o texto "valor".

```html
<label class="campo-grupo">Valor</label>
Copiar código
```

Abaixo, adicionaremos uma `div` com a classe `input-wrapper`, e dentro dessa `div`, um `input` do tipo `number`. Podemos nomear esse `input` como `valor` e remover o `id`, já que ele está dentro da `label` e ficará corretamente associado.

```html
<input type="number" name="valor" class="campo input-valor-transacao">
Copiar código
```

Ao salvar o arquivo e voltar ao navegador, podemos conferir como está.

Agora temos um campo de valor, onde podemos inserir, por exemplo, 10 e alguns centavos, como `10,50`. Ao pressionar "Enter" e selecionar a opção de transação "Depósito", ao pressionar "Enter" no valor, ele exibe a seguinte informação:

> Insira um valor válido. Os dois valores válidos mais próximos são 10 e 11.

Precisamos ajustar isso para permitir que o campo receba casas decimais.

Voltando ao VS Code, ajustaremos isso. Logo após o `type:number`, adicionaremos uma validação com o atributo `min`, indicando que o valor mínimo é 0.01, para que a transação, seja depósito ou saque, seja de no mínimo um centavo. Pois não faz sentido ser um valor negativo.

```html
<input type="number" min="0.01" name="valor" class="campo input-valor-transacao">
Copiar código
```

Além disso, adicionaremos o atributo `step`, que significa "passo", para indicar o intervalo em que os números podem aumentar ou diminuir. Definiremos também como 0.01, o que significa que os valores serão incrementados ou decrementados de um em um centavo.

```html
<input type="number" min="0.01" step="0.01" name="valor" class="campo input-valor-transacao">
Copiar código
```

Vamos verificar isso na prática, salvando e abrindo o projeto no navegador.

Vamos inserir, por exemplo, um depósito de 10,50. Ao pressionar "Enter", a página é atualizada automaticamente, pois esse é o comportamento padrão de um formulário HTML. Quando submetido, a página é atualizada. Isso significa que o valor de 10,50 foi aceito corretamente.

Se tentarmos agora fazer um depósito de 20,511 reais, não queremos que isso aconteça, pois não faz sentido ter mais de dois números indicando os centavos. Ao pressionar "Enter", a validação é acionada:

> Insira um valor válido. Os dois valores válidos mais próximos são 20,51 e 20,52.

Isso é possível graças ao atributo `step`, que permite que as casas decimais aumentem apenas de um em um centavo, **limitando a duas casas decimais**. É interessante que estamos utilizando uma validação nativa do HTML, sem recorrer ao Angular, aproveitando os recursos do HTML nativo.

## Tornando o campo obrigatório e criando o botão

Vamos voltar para o VS Code, pois ainda há mais algumas coisas a fazer.

No `input`, vamos adicionar o atributo `required` para indicar que ele é obrigatório no formulário.

```html
<input type="number" min="0.01" step="0.01" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

Por fim, após a `label`, vamos inserir o botão com a classe `botao-confirmar-transacao`. Esse botão terá o texto "Confirmar Transação".

```html
<button class="botao-confirmar-transacao">Confirmar Transação</button>
Copiar código
```

## Estilizando o input de valor e o botão

Ao salvar esse arquivo e voltar ao navegador, o botão aparece, mas ainda não está bem estilizado. Também queremos aplicar algumas estilizações no campo de valor. Vamos fazer isso agora. Vamos colar no arquivo CSS do nosso componente, o bloco CSS adicional que está disponível abaixo:

Estamos inserindo o CSS para o `input` e o botão, além de personalizar um ícone do `input`.

```css
.input-wrapper {
  position: relative;
}


.input-wrapper::before {
  position: absolute;
  content: "R$";
  top: 0.5938rem;
  left: 1rem;


  color: var(--cinza-escuro);
  font-size: 1rem;
  font-weight: 400;
}


.input-wrapper:has(.input-valor-transacao:not(:placeholder-shown))::before {
  color: var(--preto);
}


.input-valor-transacao {
  width: 100%;
  padding-left: 2.88rem;
  background-color: transparent;
}


.input-valor-transacao::placeholder {
  color: var(--cinza-escuro);
  font-size: 1rem;
  font-weight: 400;
}


.botao-confirmar-transacao {
  border-radius: 1rem;
  background: var(--azul-destaques);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;


  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;


  transition: background-color .3s;
}


.botao-confirmar-transacao:hover {
  background: var(--azul-hover);
}


.botao-confirmar-transacao:focus {
  background: var(--azul-pressionado);
}
Copiar código
```

Após salvar o arquivo e atualizar a página, verificamos que tudo está funcionando corretamente. Vamos testar mais uma vez o formulário.

Desta vez, vamos inserir um saque de 10,20. Ao confirmar a transação, a página é atualizada.

## Próximo passo

Conseguimos finalizar nosso formulário de nova transação utilizando HTML e CSS puro. O próximo passo é dinamizá-lo com o restante da aplicação. Nos vemos no próximo vídeo!

# 05 **Validação de transações**

A Tratotech, uma plataforma de classificados focada em produtos tecnológicos, está desenvolvendo um sistema de transações para facilitar a compra e venda de eletrônicos entre usuários. A equipe de desenvolvimento, da qual você faz parte, está implementando um formulário para que os usuários possam registrar o valor das transações. É crucial que o sistema aceite apenas valores válidos, com no máximo duas casas decimais, para evitar erros de arredondamento e garantir a precisão das transações financeiras. Além disso, o valor mínimo permitido para qualquer transação deve ser de 0,01, para evitar transações nulas ou negativas.

Qual abordagem você utilizaria para garantir que o formulário de transações da Tratotech atenda a esses requisitos de validação?

[ ] Utilizar os atributos nativos do HTML, configurando o campo de entrada como "text", com "step" definido para 0.01, "min" como 0.01, e adicionar o atributo "required" para garantir a validação no lado do cliente.

[ ] Utilizar os atributos nativos do HTML, configurando o tipo de input como "number" e adicionando o atributo "required" para garantir a validação no lado do cliente.

[ ] Utilizar os atributos nativos do HTML, configurando o campo de entrada como "number", com "step" definido para 1, "min" como 0.01, e adicionar o atributo "required" para garantir a validação no lado do cliente.

[X] Utilizar os atributos nativos do HTML, configurando o campo de entrada como "number", com "step" definido para 0.01, "min" como 0.01, e adicionar o atributo "required" para garantir a validação no lado do cliente.

Correta, pois esta configuração assegura que apenas valores válidos, com até duas casas decimais e acima de 0,01, sejam aceitos. O uso de "required" garante que o campo não seja deixado em branco, oferecendo uma validação eficaz no lado do cliente.


# 06 **Vínculo bidirecional com ngModel**


Nós já finalizamos o HTML e o CSS do formulário de nova transação da nossa aplicação.

Agora, precisamos refletir sobre o que realmente queremos fazer com esse formulário. Podemos realizar um depósito e um saque, mas como vamos implementar isso?

Por enquanto, não estamos fazendo nada com as informações do formulário. O que queremos que aconteça quando submetemos esse formulário?

Se realizarmos, por exemplo, um depósito de R\$ 50,00, queremos que o saldo no componente do banner aumente R\$ 50,00. E se realizarmos um saque, queremos que diminua. Além disso, se observarmos o Figma da nossa aplicação, futuramente teremos um extrato com a lista de transações já realizadas. Portanto, de alguma forma, precisamos capturar essas informações do formulário quando o submetemos e armazená-las em algum lugar.

Primeiro, precisamos entender **como capturar essas informações**. Vamos descobrir como fazer isso no projeto do VS Code.



Voltando para o VS Code, vamos adicionar na linha 20 do nosso `input` um atributo que esquecemos: o `placeholder`. Após o atributo `step`, vamos inserir o `placeholder` com o valor 00,00. Ao salvar o arquivo, voltar ao navegador e abrir o projeto, o `placeholder` já aparece como texto de sugestão, em conformidade com o que está no Figma.

```html
<input type="number" min="0.01" step="0.01" placeholder="00,00" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

## Como capturar os dados desse formulário quando ele for submetido?

Primeiramente, sabemos como fazer isso com JavaScript. Utilizamos, por exemplo, métodos como o `querySelector` para capturar o elemento e, a partir dele, pegamos a propriedade `value` para obter seu valor. Podemos fazer o que quisermos com esse valor, até exibi-lo em outro lugar da tela com a propriedade `innerHTML` de algum outro elemento.

No entanto, quando trabalhamos com *frameworks* de *front-end* como o Angular, realizamos essas operações com o HTML e o DOM de forma diferente. Eles fornecem métodos que facilitam o trabalho com essas interações a longo prazo, especialmente em projetos maiores. Vamos aprender as formas que o Angular oferece para trabalhar com campos de formulário.

Para demonstrar, vamos abrir o arquivo TypeScript do nosso formulário e adicionar uma propriedade chamada `valorTransacao`. Queremos ter essa propriedade no TypeScript para manipulá-la de forma mais dinâmica. Esse `valorTransacao` pode iniciar como uma string vazia.

```typescript
export class FormNovaTransacaoComponent {
  valorTransacao = "";
}
Copiar código
```

Após salvar o arquivo, no HTML podemos adicionar o atributo `value` no nosso `input` e definir, por exemplo, 30. Ao voltar ao navegador, o `input` já começa com o valor 30.

```html
<input value="30" type="number" min="0.01" step="0.01" placeholder="00,00" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

Se apagarmos o 30 e deixarmos uma string vazia, ao salvar o arquivo e voltar ao navegador, o `input` começa vazio, como antes.

```html
<input value="" type="number" min="0.01" step="0.01" placeholder="00,00" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

Se voltarmos ao HTML e fizermos um *attribute binding* no `value`, colocando colchetes ao redor dele e referenciando `valorTransacao` dentro das aspas, ao salvar o arquivo e voltar ao navegador, tudo continua funcionando.

```html
<input [value]="valorTransacao" type="number" min="0.01" step="0.01" placeholder="00,00" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

Agora, se no TypeScript definirmos que `valorTransacao` começa com 40 e salvarmos o arquivo, ao voltar ao navegador, já aparece 40. Assim, conseguimos fazer um vínculo de atributo corretamente.

```typescript
export class FormNovaTransacaoComponent {
  valorTransacao = "40";
}
Copiar código
```

Em teoria, já temos esse valor da transação no TypeScript. Vamos ver se conseguimos fazer algo com ele após submeter o formulário.

Para isso, utilizaremos uma forma que o Angular recomenda para lidar com formulários. No array de *imports* do nosso componente na linha 5, vamos importar um módulo chamado `FormsModule` de `@angular/forms`.

```typescript
import { FormsModule } from '@angular/forms';
Copiar código
```

Ao salvar o arquivo, podemos voltar ao HTML, subir no início do código e, no formulário, utilizar uma diretiva disponibilizada por esse módulo. Vamos abrir os parênteses e utilizar a diretiva `ngSubmit` com S maiúsculo. Dentro das aspas, colocaremos `aoSubmeter()`.

```html
<main class="form-wrapper">
  <form (ngSubmit)="aoSubmeter()" class="form">
    <h2 class="titulo">Nova transação</h2>
Copiar código
```

## Implementação de função no TypeScript

Inicialmente, precisamos criar uma função que ainda não existe. Vamos salvar o arquivo atual e, em seguida, abrir o arquivo TypeScript para criar essa função. Após a valorização, criaremos a função `aoSubmeter`, que será definida com parênteses e aspas. Vamos incluir um `console.log` com o texto submetido para garantir que tudo está funcionando corretamente.

```typescript
aoSubmeter() {
    console.log('submetido!');
}
Copiar código
```

Após salvar o arquivo, retornamos ao navegador, abrimos o console (utilizando a tecla "F12") e clicamos em "Confirmar transação". Ao clicar, verificamos que a mensagem de submissão aparece.

Nosso objetivo é imprimir o valor da transação. Para isso, voltamos ao TypeScript, removemos a string "submetido" e imprimimos `this.valorTransacao`.

```typescript
aoSubmeter() {
    console.log(this.valorTransacao);
}
Copiar código
```

Após salvar o arquivo, submetemos novamente o formulário. Ao confirmar, o valor 40 aparece, indicando que a informação está disponível para ser utilizada em outras partes da aplicação.

## Problema de atualização de valor

Ao alterar o valor do input para 100 reais e confirmar a transação, notamos que o valor 100 não é impresso no console. Cada vez que clicamos em "Confirmar transação", o valor 40 é exibido. Isso ocorre porque o valor não foi atualizado. Vamos verificar o que aconteceu.

Fizemos um *attribute bind*, vinculando a propriedade `valorTransacao` ao input do HTML. Inicialmente, o input foi configurado com o valor 40. O problema é que, ao interagir com o formulário e inserir um novo valor, essa alteração não foi refletida na propriedade `valorTransacao`. Não implementamos o **fluxo de retorno**, que poderia ser feito manualmente escutando o evento de mudança do input.

## Solução com Angular

Para resolver isso, utilizaremos a abordagem recomendada pelo Angular. Em vez de usar o atributo antigo no input, aplicaremos a diretiva `ng-model` do módulo de *forms*. Inicialmente, o `ng-model` funciona da mesma forma que o `value`.

```html
<input [ngModel]="valorTransacao" type="number" min="0.01" step="0.01" placeholder="00,00" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

Após salvar o arquivo e retornar ao navegador, o campo começa com 40. Ao submeter, o valor 40 é impresso. Mesmo ao alterar para 60 e confirmar a transação, o valor 40 continua sendo exibido.

Agora, vamos explorar o potencial do `ng-model`. Envolvemos o `ng-model` com parênteses e colchetes.

```html
<input [(ngModel)]="valorTransacao" type="number" min="0.01" step="0.01" placeholder="00,00" name="valor" class="campo input-valor-transacao" required>
Copiar código
```

Após salvar o arquivo e retornar ao navegador, ao mudar o valor para 150 reais e confirmar a transação, o valor 150 é impresso. Ao alterar para 200 e submeter novamente, o valor é atualizado.

## Vínculo bidirecional de dados

O `ng-model` oferece a capacidade de realizar um vínculo bidirecional de dados, permitindo que alterações no HTML sejam refletidas na propriedade do TypeScript e vice-versa. Esse fluxo de dados é conhecido como *two-way data binding* (vínculo bidirecional de dados) e é essencial em frameworks como o Angular. A diretiva `ng-model` facilita esse vínculo, sendo especialmente útil para lidar com campos de formulários.

A sintaxe de parênteses seguida de colchetes é conhecida na comunidade Angular como "banana na caixa", facilitando a memorização da ordem dos caracteres. A banana sendo os parênteses e a caixa sendo os colchetes.

## Conclusão

Então, aprendemos a criar um vínculo bidirecional entre um dado do TypeScript e um campo de formulário do HTML.

Essa abordagem de formulários, fornecida pelo Angular, é uma das duas principais formas de trabalhar com formulários. A que utilizamos é chamada de **formulários orientados a template**. Existe também uma abordagem mais avançada, conhecida como **formulários reativos**, que será abordada em um curso futuro aqui na Alura. Uma atividade será disponibilizada para explicar melhor a diferença entre essas duas abordagens.

Estamos prontos para continuar o desenvolvimento e aguardamos vocês no próximo vídeo!
