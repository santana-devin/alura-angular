# Apresentação 

Que tal aprender a criar a sua primeira aplicação com Angular? Eu sou a Nayanne Batista e irei te acompanhar ao longo dessa jornada de aprendizagem!

Audiodescrição: Nayanne se descreve como uma mulher de pele morena, com olhos castanho-escuros, cabelo liso e longo castanho-escuro, e sobrancelhas castanho-escuras. Ela veste uma camisa laranja, e está sentada em frente a uma estante branca iluminada em gradiente azul e rosa, contendo livros e enfeites. Ao fundo, à esquerda da instrutora, há um violão preto.

O que vamos aprender?
Neste curso, iremos aprender a criar uma aplicação com Angular do zero. Desenvolveremos a aplicação Organo, um organizador de leituras favoritas. Na sequência, entenderemos como aplicar a componentização no Angular, utilizando o Angular CLI para criar componentes. A partir disso, vamos compreender como associar dados a esses componentes.

Também aprenderemos como ocorre a comunicação entre os componentes no Angular, explorando diretivas, o novo control flow (fluxo de controle) do Angular para renderizar cards, e fazendo uma estilização condicional. Para concluir, aprenderemos a implementar a funcionalidade de favoritar livros, entre vários outros conteúdos que serão abordados durante as aulas.

Quais são os requisitos?
Quais são os conhecimentos necessários para melhor aproveitamento do curso?

É importante que você tenha como pré-requisitos conhecimentos básicos em HTML e CSS, JavaScript e TypeScript, linguagem utilizada pelo Angular.

Conclusão
Estamos muito animados para começar! Vamos mergulhar no Angular?

# Preparando o ambiente

Olá, dev!
Boas-vindas a esse curso!

Neste curso, vamos conhecer os fundamentos do Angular CLI, uma interface de linha de comando usada para facilitar a construção de aplicações Angular.

Este é um curso recomendado para iniciantes na tecnologia ou profissionais de nível júnior. Se você já trabalha com Angular e domina a tecnologia em um nível pleno-sênior, talvez não encontre tantas novidades, mas poderá revisitar e reforçar sua base de conhecimentos, entendendo o que mudou na nova versão 19 do Angular.

1. Instalação do Angular
Para instalar o Angular CLI (versão do curso 19.1.0) é necessário ter o NodeJS (versão do curso 22.11.0) na última versão recomendada instalado e usaremos o VSCode como editor de código.

Recomendo fortemente que você use as mesmas versões utilizadas no curso para obter melhor aproveitamento e evitar erros por incompatibilidade.

Para instalar o Angular CLI, abra seu terminal e utilize o seguinte comando:

```
 npm install -g @angular/cli
```

2. Layout do projeto no Figma
Durante o curso, trabalharemos com um design pronto que será transformado em código. Para visualizar o layout acesse o Figma e explore os elementos da aplicação “Organo” que iremos implementar ao longo do curso.

3. Imagens para o Projeto
Você pode fazer o download das imagens que serão adicionadas no projeto. Lembre-se de colocar todas as imagens na pasta public.

Tudo preparado?

Então agora vem comigo mergulhar no Angular! 🚀


# Criando um projeto com Angular 19

Forbes;
Gmail;
PayPal;
Samsung;
E Microsoft.


O que essas aplicações têm em comum? Todas foram criadas utilizando o framework Angular.

Essa informação nos permite perceber que o Angular é um framework utilizado para criar grandes aplicações, robustas e seguras, em todo o mundo. Se você tem interesse em entender por que ele é tão utilizado, por que foi escolhido para criar essas e tantas outras aplicações, e se tem curiosidade de saber como criar sua própria aplicação, este curso é o lugar certo.

Criando um projeto com Angular 19
Acessando o protótipo no Figma
Nosso desafio neste curso será criar um organizador de leituras.

Podemos acessar o protótipo no Figma para visualizar o projeto.

No Figma, temos o Organo, um organizador de leituras onde podemos organizar nossas leituras favoritas por gêneros, como literatura, poesia, entre outros.

Você pode modificar os gêneros utilizados e personalizar a sua aplicação, substituindo livros por filmes ou séries favoritos, por exemplo. Use sua criatividade!

Como criar uma aplicação com Angular?
Precisamos utilizar o Angular para criar essa SPA (Single Page Application). Para criar uma aplicação Angular, seria necessário estruturar uma série de pastas e arquivos de configuração antes de começar a codificar. No entanto, o Angular disponibiliza ferramentas para auxiliar na criação do projeto. Começaremos instalando essas ferramentas para iniciar a codificação.

Instalando o Node
Para começar, criaremos uma pasta chamada curso-organo.

Você também deve criar uma pasta no seu computador para armazenar o projeto. Após fazer isso, vamos clicar sobre a pasta criada com o botão direito e selecionar a opção "Abrir no Terminal".

Feito isso, estamos prontos para instalar a ferramenta do Angular que ajudará a criar o projeto. Primeiramente, é necessário ter o Node instalado, pois usaremos o npm, um gerenciador de pacotes para baixar a ferramenta do Angular. Para verificar se o Node está instalado, executamos:

```
node -v
```

Retorno do comando:

v22.11.0
Copiar código
Se o Node estiver instalado, a versão será exibida, como a v22.11.0 no exemplo acima. Caso contrário, será necessário instalar o Node acessando o site Node.js e fazendo o download da versão LTS. Após a instalação, conseguiremos utilizar o npm normalmente.

Instalando o Angular CLI
Finalizada a instalação do Node, vamos acessar a documentação do Angular. Embora a documentação anterior ainda exista, é recomendado utilizar a nova, que nos guiará neste curso.

Importante! Devemos nos acostumar a navegar pela documentação, pois ela centraliza todas as informações e atualizações do framework.

Na documentação, clicaremos em "Docs > Installation" no menu lateral esquerdo. A documentação nos mostra os pré-requisitos necessários, como o Node.js a partir da versão 18.19.1 e um editor de código, como o VS Code. Agora, precisamos instalar o Angular CLI. O comando para instalação é:

```
npm install -g @angular/cli
```

Uma vez copiado o comando, basta colar no terminal para realizar a instalação.

O npm é o gerenciador de pacotes que será instalado. Usamos o parâmetro -g para realizar uma instalação de forma global. Por fim, o @angular/cli é a ferramenta que nos auxiliará na criação do projeto. Com esse comando, será instalada a versão mais atual do Angular.

Caso deseje uma versão específica, ou se estiver realizando o projeto quando já existirem versões superiores, você pode especificar a versão desejada.

Para isso, após cli, digitamos @19.1, por exemplo:

```
npm install -g @angular/cli@19.1
```

Ao pressionar "Enter", o Angular começará a baixar todos os pacotes da CLI. Finalizada a instalação, podemos verificar qual foi a versão baixada. Primeiro, limparemos o terminal com clear:

```
clear
```
Em seguida, digitamos o comando para verificar a versão do Angular CLI instalada:

```
ng version
```

Retorno do comando:

```
Angular CLI: 19.1.3
Node: 22.11.0
Package Manager: npm 11.0.0
OS: win32 x64
```

Nesse caso, a versão do Angular CLI instalada foi a 19.1.3. A versão do Node é a 22.11.0 e a versão do npm é 11.0.0. Recomendamos usar essas mesmas versões.

As versões do Angular são retrocompatíveis, mas pode haver diferenças de estrutura, arquivo ou comportamento caso a versão do Angular seja diferente.

#### Criando o projeto
Com o Angular CLI instalado, vamos limpar novamente o terminal com clear. Feito isso, retornaremos à documentação do Angular para entender como criar um novo projeto. De acordo com a documentação, o comando para criar um novo projeto é ng new seguido do nome do projeto.

No terminal, executaremos o seguinte comando:

```
ng new organo
```

Ao executar, será exibida uma pergunta no terminal sobre qual formato de estilo desejamos utilizar. Podemos utilizar as setas para cima e para baixo para navegar e escolher entre CSS ou pré-processadores, como SCSS e Sass. Nesse caso, escolheremos a opção CSS.

Feito isso, surge uma segunda pergunta sobre habilitar o Server-Side Rendering (SSR) e o Static Site Generation (SSG). Responderemos "Não", pois não usaremos recursos avançados agora.

Observação: na plataforma da Alura, existem cursos específicos sobre esses temas, que podem ser incluídos posteriormente na sua lista de estudos.

Ao finalizar esse processo no terminal, o Angular CLI começará a criar a estrutura de pastas e arquivos de configuração necessários para a aplicação.

Abrindo o projeto no VS Code
Uma vez concluída a criação do projeto, uma mensagem indica que os pacotes foram instalados com sucesso e que podemos acessar o projeto. Para isso, executaremos:

```
cd organo
```

Após entrar na pasta do projeto, vamos abri-lo no VS Code com o comando:

```
code .
```

No menu lateral à esquerda, temos a estrutura inicial de um projeto em Angular. A pasta principal é a "ORGANO", que corresponde à área de trabalho. Nela, encontramos o projeto propriamente dito.

O Angular CLI cria uma estrutura com vários arquivos de configuração do TypeScript e dependências. Dessa forma, não precisamos nos preocupar em fazer isso manualmente.

O Angular CLI é uma ferramenta que significa command-line interface (interface de linha de comando), que nos auxilia não apenas na criação do projeto, mas também na criação de vários arquivos Angular, como componentes, serviços, pipes e diretivas. Ela também ajuda na parte de build, testes e deploy. Trata-se de uma ferramenta bastante útil e seguimos as boas práticas recomendadas durante sua aplicação, por ser disponibilizada oficialmente.

Conclusão
Com a estrutura inicial pronta, no próximo vídeo, vamos executar a aplicação para verificar como é a aparência inicial de um projeto Angular. Nos encontramos na sequência!


# Para saber mais: principais arquivos de uma aplicação Angular 19


Uma aplicação Angular é composta por diversos arquivos, como vimos.

Cada arquivo tem um papel, uma finalidade, para estruturar, configurar e inicializar o projeto.

Vamos nos ambientar e aprofundar com esses arquivos.

Assim, quando você desenvolver suas aplicações Angular, sentirá mais confiança e saberá onde criar um novo arquivo ou pasta, onde escrever (ou não) um código.

### 1. Arquivos de configuração importantes
#### 1.1. angular.json:
É o principal arquivo de configuração do Angular CLI. Ele define como o projeto deve ser construído, testado e servido, especificando diretórios de entrada e saída, assets (imagens, ícones, etc.), estilos globais, scripts adicionais e muito mais.

Por exemplo, ele gerencia quais arquivos CSS ou JS externos serão incluídos automaticamente no projeto.

#### 1.2. package.json:
Este arquivo lista todas as dependências do projeto, incluindo os pacotes necessários para desenvolvimento (como TypeScript e Angular CLI) e para a produção.

E mais: o “package.json” contém scripts que facilitam tarefas comuns, como:

Iniciar o servidor de desenvolvimento: ng serve;
Executar testes: ng test;
Construir o projeto: ng build.

#### 1.3. tsconfig.json:
O tsconfig.json configura o compilador TypeScript, definindo regras como:

target: a versão de JavaScript gerada após a transpilação (geralmente ES6 ou superior);
module: define como os módulos são tratados no JavaScript (por exemplo, ESNext ou CommonJS);
Outras opções incluem suporte a decoradores, validações mais rigorosas de tipos e caminhos para imports personalizados.

###2. Arquivos relacionados ao bootstrap da aplicação
#### 2.1. index.html:
Este é o ponto de entrada principal da aplicação no navegador. O index.html contém a estrutura HTML inicial e uma tag <app-root>, onde o Angular renderiza os componentes da aplicação.

Além disso, o Angular CLI injeta automaticamente os arquivos de estilo e script necessários durante o processo de build.

Veja um exemplo:

Exemplo do index.html:
```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>AngularApp</title>
      <base href="/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <app-root></app-root>
    </body>
  </html>
```

#### 2.2 main.ts:
Esse é o arquivo que inicia o bootstrap da aplicação Angular, e que utiliza o método bootstrapApplication – introduzido em versões mais recentes do Angular para inicializar a aplicação.

Veja um exemplo do main.ts:
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

#### 2.3. Como funciona o bootstrap da aplicação
##### 2.3.1. Carregamento do index.html

O navegador carrega o arquivo index.html e encontra a tag <app-root>, que será substituída pelo conteúdo renderizado pelo Angular.

##### 2.3.2. Inicialização do angular

O arquivo main.ts é executado, configurando o Angular para inicializar a aplicação com o método bootstrapApplication.

##### 2.3.3. Carregamento da configuração (appConfig)

Durante o bootstrap, a configuração da aplicação (definida em app.config.ts) é carregada. Essa configuração define provedores, rotas e outras dependências globais essenciais para o funcionamento da aplicação.

Exemplo de configuração em app.config.ts:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
```
Ótimo! Agora você conhece os principais arquivos da estrutura de um projeto Angular e como eles se conectam para inicializar a aplicação.

Ao longo do curso, exploraremos outros arquivos importantes e aprofundaremos nosso entendimento sobre suas funções.


# Criando o primeiro componente com Angular 19

No vídeo anterior, criamos a aplicação, mas ainda não verificamos como ela está visualmente, ou seja, qual é a aparência inicial de um projeto Angular.

Criando o primeiro componente com Angular 19
Foram criadas diversas partes e arquivos diferentes. Neste primeiro momento, não é necessário se preocupar com cada um deles, pois muitos não serão modificados. Utilizaremos a configuração padrão do Angular e, à medida que o projeto evoluir, entenderemos os arquivos principais. Também disponibilizaremos uma atividade explicando os principais arquivos, suas funções e configurações.

Executando a aplicação
Para começar, vamos executar a aplicação com o comando ng serve. O ng são a segunda e a terceira letras de Angular. Esse comando executará a aplicação, servindo-a localmente.

```
ng serve
```

A aplicação será executada e poderá ser acessada em http://localhost:4200/.

Acessando a página da aplicação
Na página inicial, temos o texto "Hello, organo", que é o nome da aplicação. Abaixo, temos o subtítulo "Congratulations! Your app is running.", indicando que o aplicativo está em execução. Na lateral direita, há diversos links da documentação que podemos acessar.

Desenvolvendo o projeto
Finalizada a criação da aplicação, precisamos começar a desenvolver o projeto. No Figma, podemos analisar como estruturar essa aplicação. O protótipo é composto por diversos blocos diferentes.

Por exemplo: temos um cabeçalho com o logotipo da aplicação, a frase "Suas leituras favoritas organizadas em um só lugar!" à esquerda, e uma imagem à direita. Abaixo, há um título seguido de algumas estruturas, como uma lista de cards. No card, temos uma imagem, um título, uma autoria e um ícone de coração. Ao final da página, encontramos um rodapé.

Podemos começar a estruturar a aplicação dividindo-a em diversos blocos e, posteriormente, juntando-os como se fosse uma brincadeira de Lego.

Cada pedaço da aplicação pode ser denominado como componente.

O Angular é um framework baseado em componentes, então nos preocuparemos com pequenos pedaços de código e, em seguida, faremos a junção. O cabeçalho, por exemplo, pode ser um componente, assim como o card, um botão, o rodapé, uma lista, entre outros.

Criando o componente de cabeçalho
A partir de agora, iniciaremos o processo de componentização da nossa aplicação. Podemos começar por componentes mais simples, como o cabeçalho, adicionando a imagem e visualizando-a renderizada na aplicação. Para criar um componente no VS Code, podemos utilizar a CLI, que nos auxilia tanto na criação do projeto quanto na criação de outros arquivos.

Antes disso, no terminal, precisamos parar a execução da aplicação. Faremos isso com o comando:

```
CTRL + C
```

Para criar um novo componente, utilizamos o comando ng generate component e especificamos o caminho onde queremos que o componente seja criado.

Se passarmos apenas o nome do componente, por exemplo, cabecalho, ele será criado na pasta "src > app". No entanto, queremos uma pasta específica para os componentes, então antes do nome do componente, passaremos o nome da pasta, que será componentes seguido de uma barra (/).

```
ng generate component componentes/cabecalho
```

Ao pressionar "Enter", o componente é criado, gerando quatro arquivos:

```
cabecalho.component.html
cabecalho.component.spec.ts
cabecalho.component.ts
cabecalho.component.css
```

Ao acessarmos o menu lateral esquerdo, dentro de "app", encontramos a pasta "componentes", onde está a pasta "cabecalho", contendo os quatro arquivos criados.

Ajustando o código HTML do cabeçalho
Inicialmente, vamos acessar o arquivo cabecalho.component.html, que é o código HTML do cabeçalho. Por padrão, ele vem com um parágrafo na primeira linha:

cabecalho.component.html:

```
<p>cabecalho works!</p>
```

Podemos deletá-lo e, em vez disso, utilizar a tag header com a classe (class) banner. Dentro de header, passaremos a tag img, com os atributos src e alt, onde definiremos a imagem do banner e o texto alternativo. Para adicionar a imagem, basta arrastar o arquivo banner.png para a pasta "public". Em seguida, passaremos o nome da imagem para o atributo src.

Por último, no atributo alt, colocaremos o texto "Organizador de leituras".

Importante! Todas as imagens utilizadas no curso estão na atividade Preparando o ambiente. Você deve armazená-las na pasta "public" do seu projeto.

```
<header class="banner">
  <img src="banner.png" alt="Organizador de leituras">
</header>
```

Ajustando o código CSS do cabeçalho
No CSS do cabeçalho (cabecalho.component.css, aplicaremos um estilo para a classe .banner, acessando a imagem do banner com img. Definiremos apenas uma largura (width) de 100%.

cabecalho.component.css:

.banner img {
  width: 100%;
}
Copiar código
Com isso feito, vamos retornar ao terminal e executar novamente a aplicação, pois interrompemos a execução para trabalhar na criação do componente:

ng serve
Copiar código
De volta à página http://localhost:4200/, ao recarregar, notamos que a mesma configuração de antes é exibida, ou seja, o cabeçalho ainda não apareceu.

Conclusão
No próximo vídeo, discutiremos sobre o que é necessário para que o componente criado seja exibido na tela da aplicação. Nos encontramos na sequência!

# Renderizando o cabeçalho do projeto

Anteriormente, criamos o componente de cabeçalho, adicionando os códigos HTML e CSS. No entanto, apesar disso, nada mudou na aplicação. Vamos retornar ao VS Code para entender como funciona o esquema de renderização de componentes no Angular.

Renderizando o cabeçalho do projeto
Acessando o arquivo index.html, página principal da nossa SPA, percebemos que dentro de body, temos a tag app-root, responsável por renderizar tudo o que visualizamos na aplicação.

index.html:

<!-- código omitido -->

<body>
  <app-root></app-root>
</body>

<!-- código omitido -->
Copiar código
A tag app-root também está presente no arquivo app.component.ts. O selector, dentro de @Component(), define o nome do componente, que é app-root:

app.component.ts:

// código omitido

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// código omitido
Copiar código
Ajustando o código de app.component.html
O AppComponent é o componente principal da aplicação, que vem por padrão quando a criamos. No arquivo app.component.html, encontramos o código HTML que visualizamos na aplicação. Como não queremos mais esse código, podemos deletá-lo.

Ao voltar para a aplicação, tudo ficará em branco, pois a atualização é feita automaticamente. À medida que modificamos algo no código, o HMR (Hot Module Replacement) recarrega partes da aplicação sem recarregar a página por completo.

Agora, em vez de todo o código que tínhamos anteriormente, queremos visualizar o cabeçalho. Para isso, vamos acessar o arquivo cabecalho.component.ts e copiar o nome do componente definido no selector de @Component(), que é app-cabecalho.

cabecalho.component.ts:

// código omitido

selector: 'app-cabecalho',

// código omitido
Copiar código
Em seguida, utilizando tags, vamos adicionar app-cabecalho ao código HTML:

app.component.html:

<app-cabecalho></app-cabecalho>
Copiar código
Se visualizarmos a aplicação nesse momento, o cabeçalho ainda não será exibido, pois precisamos importá-lo no componente principal: o app.component.ts.

Ajustando o código de app.component.ts
No arquivo app.component.ts, a classe CabecalhoComponent já está presente em imports, então a importação provavelmente foi feita automaticamente.

Nesse array de importações, precisamos importar tudo que utilizamos no componente. Como apagamos todo o código HTML anteriormente, podemos remover a importação de RouterOutlet.

app.component.ts:

import { Component } from '@angular/core';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
Copiar código
Ao voltar para a aplicação, o componente de cabeçalho aparece corretamente.

Entendendo o componente de cabeçalho
Vamos retornar ao VS Code para entender como é esse componente. Quando criamos o componente de cabeçalho pela CLI, foram criados quatro arquivos distintos.

O componente é subdividido nessas quatro partes da pasta "cabecalho":

Um arquivo CSS (cabecalho.component.css);
Um arquivo HTML (cabecalho.component.html), chamado de template;
Um arquivo de teste (cabecalho.component.spec.ts);
E um arquivo TypeScript (cabecalho.component.ts).
Por padrão, o Angular disponibiliza o esqueleto de um arquivo spec.ts, onde podemos desenvolver testes unitários do componente. Caso esse arquivo não seja necessário, podemos definir para não gerá-lo durante a criação do componente. No Angular, utilizamos TypeScript, que é um superset da linguagem JavaScript. Ele faz tudo que o JavaScript faz e mais, principalmente na parte de tipagem, além de oferecer recursos como interfaces, decorators, entre outros.

Conhecendo a classe CabecalhoComponent
Agora, vamos entender essa novidade: a classe TypeScript.

cabecalho.component.ts:

import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
Copiar código
Na primeira linha, temos o import de Component do pacote @angular/core. O Angular é um framework bastante completo; uma grande caixa de ferramentas onde tudo que precisamos está disponível, mas para utilizar, é necessário fazer essa importação quando necessário.

Abaixo, encontramos a estrutura com @Component(). O símbolo @ faz parte dos decorators do TypeScript, uma funcionalidade específica dessa linguagem. O decorator @Component(), que faz parte do Angular, marca a classe como uma classe de componente. O Angular utiliza a programação orientada a objetos, portanto, trabalhamos com classes, propriedades e métodos.

O componente é, de fato, uma classe, e o decorator @Component() adiciona informações a ela. As propriedades do decorator são chamadas de metadados.

O primeiro metadado é o selector, que define o nome do componente. Por padrão, o nome possui o prefixo app, mas pode ser configurado e personalizado.

Observação: utilizaremos o selector na forma de tags dentro de outros componentes para realizar a renderização, conforme desejado.

Na sequência, temos o array de imports. Como mencionado, é algo do Angular que precisa ser importado. Se formos utilizar rotas ou formulários, por exemplo, tudo está disponível no Angular, mas é necessário importar o pacote correspondente.

Depois, temos o metadado templateUrl. Como o componente é subdividido em quatro partes, essa classe TypeScript faz uma conexão entre elas. Sendo assim, o templateUrl faz referência ao HTML do componente de cabeçalho. O mesmo ocorre com o styleUrl, que faz referência ao CSS.

Observação: a vantagem de o componente ser subdividido é que o CSS não conflita com o de outros componentes. Sendo assim, não precisamos nos preocupar com o CSS da aplicação inteira, apenas com o CSS específico desse componente.

Ao final, exportamos a classe CabecalhoComponent, de modo que ela fique disponível para outros componentes na aplicação do Organo.

No caso do CabecalhoComponent, não adicionaremos nenhuma lógica no arquivo TypeScript, pois ele é um componente de apresentação, sem lógica de negócios. Sua responsabilidade é ser um componente de apresentação, também chamado de dump components.

Observação: preferimos a denominação de componente de apresentação para evitar conotações negativas, pois ele é responsável por renderizar conteúdo na tela.

Dessa forma, entendemos que um componente no Angular é formado por esses quatro arquivos. Além disso, agora sabemos como criar um componente e renderizá-lo.

Acessando o arquivo app.component.html
O componente app, que vem por padrão no Angular, é o componente principal da aplicação. No nosso caso, ele será a vitrine. Em app.component.html, adicionamos a tag app-cabecalho. Dessa forma, criamos a árvore de componentes, onde montaremos a aplicação.

app.component.html:

<app-cabecalho></app-cabecalho>
Copiar código
Conclusão
Agora que aprendemos o passo a passo para criar componentes, te aguardamos no próximo vídeo, onde daremos continuidade ao processo de componentização. Nos encontramos lá!


# Criando uma experiência de compra personalizada

A Gatito Petshop, uma loja que oferece produtos e serviços para animais de estimação, está desenvolvendo um novo site para melhorar a experiência de compra dos clientes. A equipe de desenvolvimento decidiu usar Angular para criar uma interface interativa e responsiva. Um dos objetivos é permitir que os clientes personalizem suas páginas de perfil com informações sobre seus animais de estimação, como nome, idade e preferências de produtos.

Como a equipe pode utilizar a componentização do Angular para criar uma experiência de compra personalizada e fácil de manter?

Selecione uma alternativa

A equipe pode criar componentes que se concentrem apenas na estética do site, como temas de cores e fontes, deixando a personalização das informações do perfil para serem geridas diretamente no banco de dados, sem a necessidade de componentes específicos. Adicionalmente, esses componentes estéticos podem ser configurados para mudar automaticamente com base em eventos sazonais ou promoções, oferecendo uma experiência visualmente dinâmica.


A equipe pode utilizar componentes genéricos que não são configuráveis, mas que se adaptam automaticamente às informações do cliente através de um sistema de inteligência artificial, eliminando a necessidade de personalização manual. Esses componentes podem ser programados para aprender com o comportamento do usuário ao longo do tempo, ajustando automaticamente as recomendações de produtos e serviços.


A equipe pode criar componentes específicos para cada seção do perfil do cliente, como um componente para informações básicas do animal de estimação, um componente para preferências de produtos e um componente para histórico de compras. Cada componente deve ser projetado para ser reutilizável e configurável, permitindo que os clientes atualizem suas informações facilmente. Além disso, a equipe deve garantir que os componentes possam ser integrados de forma coesa na interface do usuário, proporcionando uma experiência de compra personalizada e fluida. A componentização também facilita a manutenção e atualização do site, permitindo que novas funcionalidades sejam adicionadas sem impactar o restante da aplicação.
```
Correta, pois a criação de componentes reutilizáveis permite uma personalização eficaz e uma manutenção simplificada, alinhando-se aos objetivos de personalização e facilidade de manutenção do site.
```

A equipe pode desenvolver um único componente que contenha todas as informações do perfil do cliente, incluindo dados do animal de estimação, preferências de produtos e histórico de compras, para garantir que todas as informações estejam centralizadas e sejam facilmente acessíveis. Além disso, esse componente pode ser projetado para ser altamente interativo, permitindo que os clientes naveguem entre as diferentes seções sem sair da página principal, o que pode parecer conveniente à primeira vista.

# Adicionando o footer no projeto

Neste vídeo, daremos continuidade ao processo de criação de componentes na aplicação. Observando o protótipo no Figma, abaixo do cabeçalho, temos uma série de seções.

Para reforçar a criação de componentes, vamos criar o rodapé.

Adicionando o rodapé ao projeto
Criando o componente rodape
Com o VS Code, vamos abrir o terminal com "Ctrl + J" e usar o comando "Ctrl + C" para parar a aplicação. Feito isso, criaremos um novo componente com o comando ng generate.

Podemos abreviar o generate para g. Além disso, em vez de utilizar component na sequência, podemos usar apenas c. Assim, o comando fica ng g c.

Por fim, o nome do componente será rodape.

ng g c componentes/rodape
Copiar código
ng generate component componentes/rodape
Copiar código
Após executar, temos as pastas "cabecalho e "rodape" dentro de "componentes".

Criando o código HTML do componente
Para começar, vamos abrir o arquivo CSS (rodape.component.css) e o arquivo HTML (rodape.component.html) desse componente. No código HTML, podemos iniciar a criação do rodapé, que será uma tag footer com a classe banner-rodape. Dentro dessa tag, teremos uma imagem (img), semelhante ao cabeçalho. Essa imagem está disponível na pasta "public", então basta definirmos o caminho (src) como rodape.png, enquanto o alt será "Rodapé da aplicação".

rodape.component.html:

<footer class="banner-rodape">
  <img 
    src="rodape.png" 
    alt="Rodape da aplicação">
</footer>
Copiar código
Quando paramos a aplicação para criar um componente, podemos esquecer de executá-la novamente, resultando em um erro de acesso ao site. Se isso ocorrer, basta verificar no terminal se a aplicação está em execução. No nosso caso, faltou executar ng serve novamente.

Criando o código CSS do componente
Agora, vamos adicionar o código CSS para estilizar o rodapé. No arquivo rodape.component.css, acessaremos a classe .banner-rodape e a imagem img, definindo a largura (width) como 100%, o display da imagem como block, e a margem superior (margin-top) como 120 pixels.

rodape.component.css:

.banner-rodape img {
  width: 100%;
  display: block;
  margin-top: 120px;
}
Copiar código
Entre o rodapé e a lista de cards no Figma, há o espaçamento adicionado com margin-top.

Ajustando o código de app.component.html
De volta ao arquivo app.component.html no VS Code, abaixo da tag app-cabecalho, chamaremos a tag app-rodape para aplicar o estilo que definimos.

app.component.html:

<app-cabecalho></app-cabecalho>
<app-rodape></app-rodape>
Copiar código
Inicialmente, haverá um erro, comum quando utilizamos um componente sem realizar sua importação. O erro indica que app-rodape é um elemento desconhecido.

Ajustando o código de app.component.ts
Agora, vamos ajustar o código do arquivo app.component.ts.

Dica! Quando a lista de imports começa a ficar extensa, é recomendável adicionar quebras de linha, organizando-os um abaixo do outro.

Abaixo de CabecalhoComponent, adicionaremos a importação de RodapeComponent.

app.component.ts:

import { Component } from '@angular/core';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
Copiar código
Inicialmente, o rodapé aparece na metade da página, mas ajustaremos isso conforme criarmos a lista de cards, garantindo que ele fique no local correto.

Outro ponto a observar é a margem ao redor dos componentes. O CSS dos componentes é restrito a cada um deles, portanto, o CSS do rodapé não conflita com o do cabeçalho. Quando precisamos adicionar um CSS global, utilizamos um arquivo específico para isso chamado styles.css. Esse arquivo contém um comentário indicando que é o local para adicionar estilos globais:

styles.css:

/* You can add global styles to this file, and also import other style files */
Copiar código
Abaixo do comentário em styles.css, faremos uma reinicialização CSS simples, aplicando ao body e ao html as propriedades margin: 0 e padding: 0.

/* You can add global styles to this file, and also import other style files */

body, html {
  margin: 0;
  padding: 0;
}
Copiar código
Ao voltar à aplicação, conseguimos eliminar o espaçamento ao redor.

Conclusão
Já temos dois componentes de apresentação simples na aplicação para começarmos a treinar. Na próxima aula, iniciaremos a criação do componente de card, responsável pela renderização da imagem, do livro, do título e da autoria. Entenderemos como adicionar lógica a esse componente e como associar a classe TypeScript ao template do componente!


# Criando uma estrutura de componentes para portfólios digitais

A Dev.Spot, uma plataforma que permite a desenvolvedores criarem portfólios digitais e link trees personalizados, está buscando melhorar a experiência de seus usuários ao navegar pelos portfólios. A equipe de desenvolvimento, da qual você faz parte, decidiu utilizar o Angular para criar uma aplicação mais modular e eficiente. A ideia é que cada seção do portfólio (projetos, habilidades, contatos) seja um componente separado, permitindo fácil manutenção e atualização.

Como você organizaria a estrutura de componentes para garantir que cada seção do portfólio seja independente e facilmente gerenciável?

Alternativa correta
Criar um componente Angular separado para cada seção do portfólio, como "Projetos", "Habilidades" e "Contatos", com seus próprios arquivos HTML, CSS e TypeScript, e um componente principal "AppPortfólio" para organizar esses componentes menores.

```
Correta, pois essa abordagem garante que cada seção seja independente, facilitando a manutenção e permitindo que alterações em uma seção não afetem as outras. O componente principal atua como um contêiner, organizando os componentes menores de forma eficiente.
```
Alternativa correta
Utilizar um componente Angular para cada tipo de dado (texto, imagem, link) e combiná-los para formar as seções do portfólio, como "Projetos" e "Habilidades".


Incorreta, pois essa abordagem fragmenta demais a estrutura, tornando a gestão de cada seção mais complexa e menos intuitiva, ao invés de facilitar a independência e manutenção de cada seção do portfólio.

Alternativa correta
Criar componentes separados para "Projetos" e "Habilidades", mas integrar "Contatos" diretamente no componente principal, para simplificar a estrutura.


Incorreta, pois integrar "Contatos" diretamente no componente principal compromete a independência e modularidade desejadas, dificultando a manutenção e atualização dessa seção específica.

Alternativa correta
Desenvolver um único componente Angular que contenha todas as seções do portfólio, separando visualmente cada seção dentro do mesmo arquivo HTML, e aplicar estilos CSS específicos para cada seção, mantendo um único arquivo TypeScript para lógica.


# Faça como eu fiz: crie a estrutura inicial do projeto no Angular

Nesta aula, aprendemos como criar a estrutura inicial de um projeto Angular de forma automatizada utilizando o Angular CLI. Além disso, vimos como criar componentes reutilizáveis, como o cabeçalho e o rodapé, e renderizá-los na aplicação.

Agora é sua vez de praticar, fazendo o mesmo no seu projeto! Siga o passo a passo:

Instale o Angular CLI no seu computador;
Crie um novo projeto Angular utilizando o CLI;
Gere os componentes de cabeçalho e rodapé;
Codifique o HTML e o CSS para os componentes;
Renderize os componentes na tela.
Abaixo está o passo a passo detalhado de como você pode realizar a atividade!


# O que aprendemos?

Nesta aula, aprendemos:

A importância do Angular como framework robusto para desenvolvimento de grandes aplicações. /
O uso do Node.js e npm para gerenciar pacotes no desenvolvimento com Angular. /
A utilização do Angular CLI para criação e gerenciamento eficiente de projetos Angular. /
Como explorar e modificar a estrutura de pastas e arquivos gerados por um projeto Angular. /
O conceito de componentização no Angular e criação de componentes via CLI. /
A estrutura e função dos arquivos de um componente Angular: HTML, CSS, TypeScript, e spec.ts. /
O papel dos decoradores e metadados, especialmente o @Component para criar componentes. /
Como estilizar a aplicação globalmente.