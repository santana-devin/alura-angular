# 01 **Apresentação**

**Nayanne:** Olá! Boas-vindas ao curso de Angular: Componentização. Eu sou a Nay e serei sua instrutora.

> Nayanne Batista é uma pessoa de pele morena. Tem olhos castanhos escuros e cabelos lisos também castanhos escuros. Usa óculos de grau com armação quadrada e está com uma camiseta laranja. Ao fundo, uma estante com livros e iluminação na cor azul.

**Vinícios:** Olá! Sou o Vini Neves. Nesse curso, vamos explorar e trabalhar todo o universo do Angular.

> Vinicios Neves é um homem de pele clara com rosto oval. Tem olhos castanhos escuros, sobrancelhas grossas, nariz comprido e boca larga. Usa barba cheia, bigode preto e óculos de grau com armação quadrada preta. Está com uma boina preta, camiseta preta e sentado em uma cadeira cinza. Atrás dele, uma parede lisa é iluminada em tons gradientes de azul e roxo.

**Nayanne:** Você já teve dúvidas sobre como componentizar uma aplicação Angular?

**Vinícios:** Isso acontece sempre, não é mesmo? Uma das atividades da pessoa desenvolvedora de front-end é pegar um projeto do figma e transformar em um código que funcione.

Sendo assim, entender o componente, seu tamanho e responsabilidades é muito importante.

**Nayanne:** É exatamente por isso que esse curso é tão relevante!

**Aqui você aprenderá:**

* As etapas para a criação de componentes eficientes no Angular;
* Identificar as partes da aplicação que podem ser componentizadas e como isso pode trazer benefícios ao desenvolvimento;
* Como desenvolver uma aplicação de forma organizada, fácil de ler e escalável. Trabalharemos a proporção entre componentização e reaproveitamento de código;
* Para criar um visual atraente e consistente, conheceremos a biblioteca de componentes **Angular Material** .

**Vinícios:** Essa biblioteca vai nos proporcionar vários componentes visuais prontos para montar nossa página.

Assim, vamos nos preocupar na disposição dos componentes. Porém, não precisaremos nos atentar a detalhes menores, como a criação de um botão ou uma lista select.

**Nayanne:** O Angular Material é uma ótima opção para agilizar o desenvolvimento e auxiliar na criação de interfaces profissionais e elegantes.

Para esse curso, é importante que você tenha familiaridade com Angular, HTML, SASS e o Type Script.

No início do curso focaremos na parte visual da aplicação, sem a adição de funcionalidades.

Assim, você poderá se concentrar na componentização e utilização do Angular Material.

**Vinícios:** Construiremos os alicerces da nossa aplicação para podermos escalá-la para os demais cursos dessa formação.

**Nayanne:** Isso ai! Prepare-se para essa nova jornada com Angular!

# 02 **Preparando o ambiente: versão 17+**

A versão do Angular utilizada neste treinamento é a versão 16. Para evitar incompatibilidades no código e ter o mesmo comportamento visto em vídeo, recomendamos sempre que acompanhe o curso na mesma versão que a pessoa instrutora. Caso você ainda **não** tenha instalado o Angular CLI ou já esteja **utilizando a versão 16** (confira a versão digitando `ng version` no terminal), você pode ignorar os passos a seguir.

**Caso você já tenha instalado o Angular CLI e esteja utilizando a versão 17** , que apresenta algumas diferenças na estrutura dos arquivos criados, pode seguir uma das duas estratégias abaixo para que seus arquivos se mantenham na mesma estrutura do curso:

## 1. Voltando para a versão 16 através do *downgrade* de versão:

Utilize o comando a seguir para desinstalar globalmente o Angular CLI:

```bash
npm uninstall -g @angular/cli
Copiar código
```

Em seguida, visite a atividade a seguir, [Preparando o ambiente](https://cursos.alura.com.br/course/angular-componentizacao-design-angular-material/task/133200) e siga o passo a passo de instalação da versão 16.

## 2. Continuando o curso com a versão 17 do Angular:

Observe que seguir com a versão 17 pode acabar gerando mais quebras no código que você precisará corrigir posteriormente, mas caso queira seguir com essa opção, é possível estabelecer a mesma estrutura de arquivos utilizando o seguinte comando no momento de criação do projeto:

```cpp
ng new jornada-milhas --no-standalone --routing --ssr=false

```

Agora que nos alinhamos quanto a versão, podemos continuar com tranquilidade :)

# 03 **Preparando o ambiente: adicionando elementos**

Olá, dev!

Boas vindas ao curso de Componentização com Angular!

Para começarmos essa jornada, é muito importante que você esteja usando a versão 16 do Angular, que é a mesma utilizada durante o curso, para evitar imprevistos por incompatibilidade. Para verificar a versão que está em uso, você pode digitar no terminal o comando 'ng version'.

Caso você ainda não tenha o angular instalado na sua máquina ou esteja com uma versão diferente, pode abrir o seu terminal e digitar o comando:

```css
 npm install -g @angular/cli@16.0.0

```

Além disso, ao longo dessa formação iremos trabalhar com um design pronto, que vamos transformar em código. Você pode acessar esse layout [clicando aqui](https://www.figma.com/community/file/1416571124509342695). Você também vai precisar da pasta com as imagens que irão compor o design do nosso projeto, que você pode acessar [clicando aqui](https://cdn3.gnarususercontent.com.br/3150-angular-componentizacao-design-angular-material/assets.rar).

> Se você tiver alguma dúvida ao longo deste curso, sinta-se à vontade para criar um tópico no fórum ou interagir conosco por meio do [Discord da Alura](https://discord.gg/QeBdgAjXnn). Lá você pode encontrar a instrutora Nayanne Batista pesquisando pelo perfil Nayanne Batista#6862, o instrutor Vinny Neves no perfil Vinny Neves#2004 e a Scuba responsável pelas atividades Rafa Silvério no perfil Rafa Silvério#5867. E mesmo que você não tenha dúvidas, sua contribuição é valiosa! Compartilhe seus conhecimentos e projetos, pois vai ser incrível acompanhar o seu progresso.

Vamos mergulhar nesse conhecimento? =)

# 04 **Abordagem de componentes no Angular**

**Nayanne:** Que bom ter a sua companhia nessa nova jornada de aprendizado!

Estamos muito animados para te apresentar tudo o que desenvolveremos ao longo desse primeiro curso da formação.

**Vinícios:** Também estou muito animado, Nay! Teremos muitos componentes para serem criados e muito código para desenvolver. Mas, por onde vamos começar?

**Nayanne:** Considere que você estava em busca de uma nova oportunidade profissional e conseguiu o emprego desejado. Você irá trabalhar em uma startup como pessoa **desenvolvedora front-end** .

Essa empresa está criando uma nova aplicação web chamada **Jornada Milhas** , uma plataforma de venda de passagens aéreas.

Nesse projeto, sua responsabilidade será **desenvolver** essa aplicação utilizando o **Angular** .

Porém, para isso existem alguns pré-requisitos. Essa aplicação precisa ser pensada desde o início com escalabilidade em Menti, assim será possível adicionar novos recursos, além do cadastro de pessoas ao longo do tempo.

**Vinícios:** Nesse cenário, precisamos analisar melhor quais são os próximos passos. A partir disso podemos planejar o que deve ser feito e só depois criar o código.

**Nayanne:** Exatamente isso, Vini! A equipe de design forneceu todos os protótipos no Figma, começamos abrindo essa aplicação para fazermos uma análise.

Repare que existem diversas telas a serem criadas, como a inicial, de pesquisa, login e cadastro. Porém, nesse primeiro momento foi solicitado o desenvolvimento da home page.

Nessa etapa, não implementaremos funcionalidades. Começaremos criando a estrutura da página inicial, pois o back-end está sendo desenvolvido paralelamente por outra equipe.

**Vinícios:** Primeiro montaremos toda a estrutura visual e os componentes. Depois podemos plugar esses dados no back-end, transformando-os de estáticos em dinâmicos.

**Nayanne:** Sim, Vini! Para esse desafio, começaremos criando uma aplicação Angular.

# Criando uma aplicação Angular

**Nayanne:** Abrimos o terminal e digitamos o comando `cd Desktop` seguido de "Enter" para abrir essa pasta.

```bash
cd Desktop

```

Para criar a nova aplicação usaremos o comando `ng new` seguido do nome do projeto `jornada-milhas`.

```cpp
ng new jornada-milhas

```

Ao apertar "Enter" temos como retorno uma pergunta se queremos ou não adicionar rotas. Isso é interessante, já que vamos lidar com várias páginas diferentes nessa aplicação. Então, digitamos "y" seguido de "Enter" para confirmar.

A segunda pergunta se refere ao formato de estilo que usaremos. Qual será, Vini?

**Vinícios:** Podemos usar o scss que é uma extensão do css. Que tal?

**Nayanne:** Ótimo! Selecionamos essa opção e apertamos "Enter". Feito isso a aplicação é criada.

Quando essa etapa for concluída, escrevemos o comando `cd jornada-milhas` seguido de "Enter".

```bash
cd jornada-milhas

```

Depois passamos `code .` para abrir no VS Code.

`code .`

Feito isso, o VS Code abre. Na lateral esquerda, no Explorer, encontramos a estrutura de pasta de uma aplicação Angular.

Apertamos "Ctrl + J" para abrir o terminal. Escrevemos `ng serve --open` e apertamos "Enter".

```css
ng serve --open

```

Feito isso, abre uma tela do navegador com a aplicação Angular ainda sem modificações.

A aplicação foi criada, mas como criaremos o projeto do Figma utilizando código, Vini?

**Vinícios:** Podemos começar analisando quais são os componentes que serão reutilizados. Assim, podemos criá-los em uma camada compartilhável. Já os específicos podemos tratar dentro da página. O que você acha?

**Nayanne:** Acho um ótimo critério para identificar quando devemos ou não transformar uma parte do Figma em componente.

Analisando o Figma, percebemos que o header, o footer e alguns outros elementos se repetem nas telas.

Sendo assim, na lateral esquerda clicamos em "src > app". Clicamos com o botão direito em "app" e depois em "New folder". Nomeamos a pasta de "shared".

Dentro dela podemos criar nossos componentes. Então, abrimos o terminal novamente e para parar a aplicação passamos o comando `Ctrl + C`.

**Vinícios:** Podemos começar criando o header. Que tal?

**Nayanne:** Para isso, no terminal, passamos o comando `ng g c` seguido de `shared`, para ficar salvo nessa pasta. Adicionamos barra e o nome do componente `header`.

```bash
ng g c shared/header

```

Após apertar "Enter" os quatro arquivos são criados e notamos uma modificação no `app.module.ts`.

**Vinícios:** Agora podemos analisar o Figma novamente para verificarmos quais são os outros componentes que criaremos.

**Nayanne:** Como tem imagens que se repetem em várias telas, podemos criar um componente de banner. Também temos um formulário, cards de promoções e depoimentos, além de um rodapé.

**Vinícios:** Podemos criar o componente banner e do footer que temos certeza que poderemos compartilhá-los e depois testá-los.

**Nayanne:** Abrimos novamente o VS Code. No terminal, ao apertamos a tecla "Seta para cima", a ferramenta autopreenche o último comando. Apagamos o `header` e passamos `footer`, seguido de "Enter".

```bash
ng g c shared/footer

```

Assim o componente de rodapé é criado. Para criar o componente de banner fazemos o mesmo, substituindo o `footer` por `banner`.

```bash
ng g c shared/banner

```

Por fim, criamos o componente card passando a mesma estrutura de comando, seguido de "Enter".

```bash
ng g c shared/card

```

Essa etapa de pensarmos como encaixar esses componentes para formar a tela inicial me lembra a construção de um quebra-cabeça.

**Vinícios:** Nay, explique melhor essa comparação.

**Nayanne:** Cada componente pode ser comparado como uma peça de um quebra-cabeça que vamos encaixando até formar a tela inicial. Além disso, existem quebra-cabeças com peças maiores e menores.

Essa reflexão é valida para começarmos a pensar no nível de granularidade da componentização. Devemos decidir se criaremos componentes com escopo mais limitado e funções específicas ou mais abrangentes e funções amplas.

**Vinícios:** Esse é um dos nossos maiores desafios como pessoas desenvolvedoras de front-end.

Precisamos ter um equilíbrio, afinal, se quisermos reaproveitar tudo teremos uma base de código extensa. Já se não aproveitarmos nada o mesmo acontece.

**Nayanne:** Um dos critérios mais importantes é identificar se um componente será reutilizado em outras partes da aplicação, isso já nos orienta a extrairmos o código e transformá-lo em componente.

Mas, isso significa que se não formos reutilizar não podemos transformar um trecho de código em componente?

Na verdade, não. É possível que componentes menores estejam dentro de outros componentes. Nosso formulário de busca, por exemplo, é formado por diferentes estruturas.

Quando pensamos em manutenção de código, dependendo da lógica utilizada, pode ser interessante transformar trechos de código em componentes.

Isso significa que cada caso deve ser analisado e fazer um balanço para haver equilíbrio.

**Vinícios:** Isso significa separar as responsabilidades, né, Nay?

**Nayanne:** Exatamente!

**Vinícios:** Qual nosso próximo passo agora?

Criamos a aplicação e alguns componentes iniciais. Em seguida começaremos a montar esse quebra-cabeça.

**Te esperamos no próximo vídeo!**

# 05 **Para saber mais: explorando o projeto no Figma**

Figma no desenvolvimento de um projeto

O Figma é uma ferramenta de design colaborativo amplamente utilizada por profissionais da área. No contexto do desenvolvimento front-end, o Figma desempenha um papel crucial ao permitir que as pessoas desenvolvedoras visualizem o projeto de design de um site de forma interativa.

Ao ter acesso ao layout, cores, tipografia e elementos visuais definidos no Figma, as pessoas desenvolvedoras podem entender a visão do designer e implementar a interface de forma fiel ao que foi concebido. Além disso, o Figma facilita a comunicação entre designers e *devs*, permitindo que ambos trabalhem em conjunto para garantir a consistência visual e a qualidade da experiência do usuário.

## Como o Front-End utiliza o Figma?

Se você busca saber mais sobre como uma pessoa *dev* utiliza o Figma, recomendamos o vídeo "Como o Front-End Utiliza o Figma", que você pode assistir [clicando aqui](https://cursos.alura.com.br/extra/alura-mais/como-front-end-utiliza-o-figma-c858). Este vídeo aborda os conceitos básicos e práticos do uso do Figma, fornecendo uma introdução valiosa para quem deseja explorar essa poderosa ferramenta de design.

# 06 **Componentização com Angular**

A componentização é uma abordagem fundamental no desenvolvimento com Angular. Ao dividir uma aplicação em componentes reutilizáveis e independentes, é possível obter benefícios significativos.

Agora que você conheceu a componentização e a aplicou no desenvolvimento da interface da aplicação "Jornada Milhas" através do Angular, assinale a alternativa correta sobre essa técnica:

[ ] A componentização é uma prática frequente no desenvolvimento com Angular, mas costuma ser pouco adotada a outras estruturas de desenvolvimento front-end.

[X] A componentização permite reutilizar código e agilizar o desenvolvimento, facilitando a adição de novas funcionalidades e melhorando a manutenção.

A componentização permite a reutilização de código, o que agiliza o desenvolvimento, melhora a manutenção e facilita a adição de novas funcionalidades.

[ ] A componentização é recomendada para projetos de pequeno porte, pois é menos eficiente para projetos maiores.

[X] A componentização facilita a colaboração em equipe, permitindo que diferentes pessoas desenvolvedoras trabalhem em paralelo em componentes diferentes sem interferências.

Com a componentização, as pessoas devs podem trabalhar em componentes diferentes de forma independente, o que facilita a colaboração e o desenvolvimento paralelo, aumentando a eficiência e minimizando conflitos no código.

# 07 **Conhecendo o Angular Material**

**Nayanne:** No vídeo anterior conversamos sobre o processo de componentização e criamos uma estrutura inicial de componentes.

Agora, vamos codar esses componentes. Para isso, abrimos o Figma nas especificações.

**Vinícios:** Nay, nós construiremos esses componentes do zero ou utilizaremos alguma biblioteca para auxiliar nesse processo mais visual?

**Nayanne:** Vamos conferir isso, Vini. Analisando o Figma, encontramos um link para documentação. Ao clicar nele, somos encaminhados para o site do Material Design.

Isso significa que foi especificado nessa aplicação que devemos utilizar uma biblioteca de componentes. Então, não criaremos tudo do zero.

# Conhecendo o Material Design

**Vinícios:** Nay, você pode explicar um pouco mais sobre o Material Design?

**Nayanne:** Claro, mas farei isso usando uma analogia. Suponha que você dará uma festa com o tema futurismo. Você pode fazer manualmente cada item de decoração ou então comprar um kit de festa completo e pronto.

Trazendo esse exemplo para o projeto, o Material Design é como se fosse o kit completo. A biblioteca fornece vários componentes e diretivas que podem ser utilizados no projeto para criar um visual consistente.

O Material Design é tão recomendado que o Angular criou uma implementação própria do Material Design chamada **Angular Material**.

Se acessarmos a aplicação no navegador e clicarmos no link "Angular Material", no centro direito da tela, somos encaminhados para a [documentação](https://material.angular.io/).

Na barra de menu superior, clicamos no botão "Components". Feito isso, abre uma aba com todos os componentes que podem ser personalizados e utilizados na aplicação. Para isso, bastar importar o módulo.

Como essa ferramenta já está integrada no Angular, conseguimos utilizar os componentes e otimizar tempo.

**Vinícios:** Isso vai nos ajudar muito na utilização de componentes menores! Vamos começar, Nay?

**Nayanne:** Primeiro, precisamos instalar o Angular Material. Na tela inicial da aplicação, na seção "Next Steps", clicamos em "Angular Material".

Feito isso, é disponibilizado o comando de instalação da biblioteca. Copiamos e abrimos o terminal do VS Code.

A instalação pode ser feita via `npm install`, porém, como essa é uma biblioteca integrada podemos utilizar a própria CLI do angular.

Sendo assim, colamos o comando `ng add @angular/material` e rodamos.

Enquanto a instalação é feita aparece uma pergunta se desejamos prosseguir. Digitamos "y" seguido de "Enter" para confirmar.

Depois, aparece outra pergunta na qual devemos escolher um tema. Para entendermos melhor, abrimos a documentação do Angular Material.

No lado superior direito, clicamos no ícone identificado por uma lada de tinta. Abre opções de temas pré-definidos oferecidos pela biblioteca, sendo:

* Deep purple & Amber / Roxo escuro e âmbar;
* Indigo & Pink / Indigo e rosa;
* Pink & Blue-grey / Rosa e azul acizentado;
* Purple & Gren / Roxo e verde.

Se abrirmos nosso projeto no Figma, percebemos que ele está na cor roxo e vermelho. Sendo assim, selecionamos a primeira opção.

Agora, voltamos ao VS Code. No terminal a opção "Deep purple & Amber" é a segunda, então, a selecionamos e apertamos "Enter".

**Vinícios:** Nay, esse tema é como se fosse um preset das cores que o Material fornecerá nos componentes?

**Nayanne:** Exatamente! A biblioteca sugere essas cores para serem aplicadas em botões e outros elementos.

Se voltarmos ao terminal, nos deparamos com outra pergunta referente a tipografia. Como queremos adicioná-la, digitamos "y" seguido de "Enter".

Por fim, uma pergunta se queremos incluir as animações do Angular. Novamente digitamos "y" seguido de "Enter". Feito isso instalamos tudo o que a biblioteca pode oferecer.

Na lateral superior direita, clicamos no Explorer e acessamos o arquivo `package.json`. Na linha 19 encontramos o Angular Material adicionado.

**Vinícios:** Agora sim. Pronto para ser utilizado! Estou muito animado e curioso para descobrir se o Angular não quebrou com essa adição.

**Nayanne:** No próximo vídeo faremos o teste codando o header. **Até lá!**

# 08 **Para saber mais: vantagens do uso do Angular Material**

Angular Material para interfaces no Angular

O Angular Material é uma biblioteca de componentes de interface do usuário projetada especificamente para ser usada com o Angular. Isso significa que ela foi desenvolvida com algumas especificidades para o Angular em mente:

* A biblioteca é compatível com a estrutura de módulos do Angular, o que significa que os componentes podem ser importados em módulos específicos e usados apenas onde necessário.
* Todos os componentes foram projetados para trabalhar com o gerenciamento de estado do Angular, permitindo que as pessoas desenvolvedoras controlem o estado do componente de forma eficiente.
* Os componentes fornecidos pelo Angular Material são altamente personalizáveis, permitindo ajustes de cores, tamanhos e outros atributos dos componentes de acordo com as necessidades do projeto.

## Por que usar o Angular Material?

O Angular Material oferece uma grande variedade de componentes pré-construídos que implementam o Material Design, facilitando a criação de interfaces consistentes e intuitivas em aplicativos Angular. O uso de componentes padrão também pode acelerar o desenvolvimento e diminuir a complexidade do projeto, além de melhorar a manutenção e escalabilidade do código. Você pode acessar a documentação (em Inglês) do Material Design [clicando aqui](https://m3.material.io/).

## Exemplos de projetos que usam Angular Material

Vários projetos renomados utilizam o Angular Material, como o Google Analytics, o Google Drive e o Google Docs, além de projetos open source como o Material Dashboard e o Material Design Lite.

Para entender com mais profundidade os componentes do Angular Material, você pode acessar sua documentação (em Inglês) [clicando aqui](https://material.angular.io/).

# 09 **Primeiro componente**

**Nayanne:** Já instalamos o Angular Material, agora temos um kit de ferramentas completo para começar a codar.

**Vinícios:** Vamos começar a utilizar essas ferramentas?

**Nayanne:** Bora lá!

# Criando o componente Toolbar

**Nayanne:** Analisando o Figma, percebemos que o *header* é uma barra de ferramentas, também chamada de toolbar.

O que precisamos fazer é acessar a [documentação do Angular Material](https://material.angular.io/) e procurar um componente desse tipo.

Para isso, no menu superior, clicamos em "Components" e abre uma lista de componentes na lateral esquerda. Procuramos por "toolbar" e clicamos.

Feito isso, no centro da tela encontramos informações sobre esse componente, como a tag e exemplos visuais. Na parte superior também encontramos outras abas.

Se clicarmos em "API", encontramos o módulo que vamos precisar importar para utilizar o componente. Na aba "Examples" encontramos outros modelos do toolbar.

**Vinícios:** Embora pareça um pouco repetitivo lembrarmos de importar o módulo quando utilizarmos o componente é algo essencial e que proporciona ganho de performance.

Isso porque quando o Angular constrói a aplicação, quando fazemos o build, os únicos componentes do Material que entram nesse pacote são os que foram importados. Precisamos lembrar disso para evitar erros no código.

**Nayanne:** Isso mesmo, Vini! Então, para não termos esses erros, na aba "API", copiamos o código de `import`.

Em seguida abrimos o VS Code e acessamos o arquivo `app.module.ts`. No fim do código de `import`, na linha 11, colamos e adicionamos um espaço entre as chaves.

```javascript
import { MatToolbarModule } from '@angular/material/toolbar';
Copiar código
```

Em seguida, copiamos o nome do módulo e colamos dentro do array de `imports`, na linha 25 e salvamos. Da seguinte forma:

```cpp
//Trecho omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],

//Trecho omitido
Copiar código
```

Feito isso, já podemos utilizar o componente.

Agora, voltamos na documentação para analisar quais são as opções de toolbar. Há modelos com uma linha, outros com múltiplas linhas e cores diferentes.

Conforme analisamos no Figma, nossa toolbar possui uma linha única. Sendo assim, a que mais parece se encaixar é a "Basic toolbar", que está na aba "Examples".

Na lateral direita, clicamos no botão indicado pelo símbolo "<>" para termos acesso ao código em HTML, TS e CSS.

Copiamos o código de HTML. Depois, no VS Code, acessamos a pasta "shared > header" e abrimos os componentes `header.component.html` e `header.component.scss`.

> `header.component.html`

Apagamos o parágrafo do componente HTMLl e colamos o código.

```xml
<mat-toolbar>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
Copiar código
```

Feito isso, voltamos na documentação, acessamos a aba "CSS" e copiamos o código.

> `header.component.scss`

Abrimos o componente `header.component.scss` e colamos.

```css
.example-spacer {
  flex: 1 1 auto;
}
Copiar código
```

**Vinícios:** Agora, faremos esse código se moldar a forma do Jornada Milhas fazendo as configurações necessárias. Certo, Nay?

**Nayanne:** Exatamente! No componente `header.component.html` apagaremos algumas coisas que não temos na nossa aplicação.

Como não temos botões com ícones, apagamos todo o trecho da linha 2 até a 4 e da linha 5 até a linha 10.

Também apagamos o `My App`, pois o que temos é o logo da aplicação. Feito isso, o código fica da seguinte forma:

```xml
<mat-toolbar>
<span class="example-spacer"></span>

</mat-toolbar>
Copiar código
```

Se acessarmos o Figma, notamos que na *header* temos um logo e quatro botões. Criaremos essa configuração, começando pela imagem.

# Criando a imagem

Para isso, na lateral esquerda do VS Code, acessamos a pasta "assets". Nela vamos inserir a pasta de imagens que usaremos na aplicação e que está no nosso computador. Para fazer isso arrastamos uma para dentro a outra.

Feito isso, na linha abaixo de `<mat-toolbar>` escrevemos `<img src="">` e dentro das aspas simples passamos o caminho da imagem `assets/imagens/logo.png`. Após passamos o `alt="Logo da aplicação Jornada"`.

Agora, precisamos inserir os quatro botões, para isso utilizaremos outro componente do Angular Material.

# Criando os Botões

**Nayanne:** Acessamos a documentação do Material Angular e clicamos em "Components". Na lateral esquerda, procuramos por ["Button"](https://material.angular.io/components/button/overview) e clicamos nele.

Feito isso, temos informações e exemplos referentes a esse componente. Descendo a tela, encontramos uma tabela com classes que podem ser utilizadas com o elemento nativo `button`.

Existem vários tipos de botões, como com e sem elevação, botões com ícone, entre outros.

> Para que você possa conhecer um pouco mais sobre todas essas opções, disponibilizamos um material complementar que você pode acessar na aba "Para Saber Mais" na lateral esquerda da plataforma.

Os botões que utilizaremos são simples e sem destaque. Sendo assim, utilizaremos o atributo `mat-button` que é um botão retangular sem elevação.

Para isso, no centro da tela, acessamos a aba "API". Para importar o módulo, copiamos o código. Depois, abrimos o arquivo `app.module.ts` e colamos na linha 12, adicionando espaço entre as chaves.

```javascript
import { MatButtonModule } from '@angular/material/button';

```

Copiamos o nome do módulo e colamos no array de `imports` na linha 27.

```cpp
//Trecho omitido

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  
//Trecho omitido

```

Salvamos e fechamos o arquivo.

Agora, na documentação, acessamos a aba "Examples". Na seção "Basic buttons", clicamos no ícone identificado pelo símbolo "<>" para acessarmos o código HTML, TS e CSS.

No HTML notamos que é utilizado o `<button mat-button>Basic</button>`, então, copiamos esse trecho.

**Vinícios:** Dessa vez não usaremos o componente e sim uma diretiva do botão que aplica todos os estilos na nossa aplicação. Certo?

**Nayanne:** Sim, Vini! Usaremos o elemento nativo do HTML button. Então, abrimos o `header.component.html` e colamos na linha abaixo de `<span class>`.

Apagamos o `Basic` e escrevemos `Vender milhas`, o nome do botão. Com o cursor no fim dessa linha de código, apertamos "Alt + Shift + Seta para baixo" para duplicar a linha.

Nessa nova linha, mudamos o texto para `Sobre`.

```xml
  <mat-toolbar>
    <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
    <span class="example-spacer"></span>
    <button mat-button>Vender milhas</button>
    <button mat-button>Sobre</button>

  </mat-toolbar>

```

> `app.component.html`

Feito isso, acessamos o `app.component.html`. Apertamos "Ctrl + A" para selecionar tudo seguido de "Delete".

Para renderizar o componente escrevemos `<app-header></app-header>`.

`<app-header></app-header>`
Copiar código

Apertamos "Ctrl + J" para abrir o terminal e passamos o comando `ng serve`.

```undefined
ng serve

```

Foi compilado. Em seguida, no navegador, recarregamos a página do "localhost:4200". Feito isso, o logo e os dois botões aparecem.

Agora, precisamos configurar a estilização para que a toolbar fique com o background preto e as letras brancas.

> `header.component.scss`

Para isso, acessamos o `header.component.scss`. No fim do código, escrevemos `.mat-toolbar` adicionamos chaves e dentro delas passamos `backgroung-color:black` seguido de `color: white`.

```css
//Trecho omitido

.mat-toolbar {
    background-color: black;
    color: white;
  }

```

Salvamos e abrimo o navegador. Repare que aos poucos a configuração de cores vai ficando como queremos.

Agora, precisamos adicionar os outros dois botões que são um pouco diferentes. Um tem uma cor em destaque e o outro um outlined.

Na documentação, na seção "Button", clicamos na aba "Overview" e descemos a tela até a tabela de botões.

Utilizaremos o `mat-raised-button` que tem uma elevação, então copiamos esse nome. Depois, abrimos o arquivo `header.component.html`.

Com o cursor na última linha `button`, apertamos "Alt + Shift + Seta para baixo" para duplicá-la. Feito isso, apagamos o `mat-button` e colamos o trecho de código. Em seguida, mudamos o nome para `CADASTRE-SE`.

```css
//Trecho omitido

<button mat-raised-button>CADASTRE-SE</button>
Copiar código
```

Atualizamos o navegador e notamos que deu certo. Porém, o botão está na cor branca e queremos roxo. Para isso, acessamos a documentação novamente.

Na seção "Basic buttons", encontramos uma explicação sobre o que deve ser feito para definir cores diferentes. Para analisarmos o código, no lado direito da tela, clicamos no ícone identificado pelo símbolo de "<>".

Copiamos o trecho de código `color="primary"` e colamos loco após o `mat-raised-button`.

```swift
//Trecho omitido

<button mat-raised-button color="primary">CADASTRE-SE</button>
Copiar código
```

**Vinícios:** Isso significa que para adicionar a cor usamos algo semelhante a um atributo.

**Nayanne:** Isso mesmo! Ao atualizarmos a página o botão fica roxo, deu certo!

Agora, criaremos o último botão outlined. Acessamos a documentação para analisar as opções. Nesse caso, utilizaremos o `mat-stroked-button`, então o copiamos.

No componente, duplicamos a última linha de código. Apagamos o `mat-raised-button` e colamos o código. Também apagamos o color="primary" e depois, mudamos o nome do botão para `LOGIN`.

```css
//Trecho omitido

    <button mat-stroked-button>LOGIN</button>
Copiar código
```

Ao atualizarmos o navegador temos o botão, porém ele não está com a borda branca.

**Vinícios:** Precisamos fazer esse ajuste. O bacana é que o Angular Material permite essa customização.

**Nayanne:** Sim, Vini! Faremos essa alteração no próximo vídeo.

**Vinícios:** Estaremos te esperando lá!

# 10 **Para saber mais: tipos de botão do Angular Material**

[ Os botões são elementos essenciais para fornecer interatividade e aprimorar a experiência do usuário em uma aplicação. O Angular Material oferece uma variedade de estilos de botões, cada um com suas características específicas.

A tabela a seguir apresenta os atributos e descrições dos diversos tipos de botões do Angular Material:


| Atributo           | Descrição                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| mat-button         | Botão de texto retangular sem elevação                               |
| mat-raised-button  | Botão contido retangular com elevação                                |
| mat-flat-button    | Botão contido retangular sem elevação                                |
| mat-stroked-button | Botão delineado retangular sem elevação                              |
| mat-icon-button    | Botão circular com um fundo transparente, destinado a conter um ícone |
| mat-fab            | Botão circular com elevação, padrão para a cor “accent” do tema   |
| mat-mini-fab       | O mesmo que o mat-fab, mas menor                                        |

No *gif* abaixo, você pode observar o comportamento de cada um dos botões descritos acima:

![Gif animado da tabela “basic buttons” da documentação de botões do Angular Material, que mostra o exemplo de aparência de cada um dos botões disponíveis no Angular Material, apresentando no cabeçalho esquerdo vertical da tabela as opções de botões que são Basic, Raised, Stroked, Flat, Icon, FAB e Mini FAB e mostrando suas variações Basic, Primary, Accent, Warn, Disabled e Link, em que o cursor do mouse percorre todos os botões da primeira coluna](https://cdn3.gnarususercontent.com.br/3150-angular-componentizacao-design-angular-material/Aula1-img1.gif)

Ao utilizar os botões do Angular Material, você pode criar interfaces consistentes e intuitivas em suas aplicações. Essa diversidade de estilos permite escolher a melhor opção para atender às necessidades de design e interação de seu projeto.

Caso você queira obter mais informações sobre os botões no Angular Material ou explorar outros componentes e recursos disponíveis, recomendamos consultar a documentação oficial aqui: [link da documentação](https://material.angular.io/components/button/overview).

Divirta-se explorando e experimentando os diferentes tipos de botões do Angular Material em suas aplicações!

# 11 **Entendendo o SCSS**

**Nayanne:** No vídeo passado criamos o logo e os botões do *header*. Porém, o último botão não ficou com a borda que precisamos.

**Vinícios:** Nay, para entender o que está acontecendo, podemos inspecionar a página.

# Entendendo o SCSS

**Nayanne:** Para isso, clicamos com o botão direito na tela e depois em "Inspecionar". Abre uma aba com o código do site. Procuramos pelo botão e clicamos nele.

Encontramos uma classe do Material que está aplicando a propriedade `border-color`. Clicamos na caixa, localizada na lateral esquerda, para desselecionar. Feito isso, repare que aparece uma borda no botão.

**Vinícios:** Então, podemos dizer que a cor da borda será sempre branca. Pode ser uma boa estratégia.

**Nayanne:** Vamos testar. Para isso, selecionamos a caixa e escrevemos `white`. Realmente funcionou.

Então, copiamos esse trecho de código e colamos no fim do código do `header.component.scss`.

```css
.mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
}
Copiar código
```

**Vinícios:** Agora, vamos fazer uma análise desse trecho de código. Temos uma classe chamada `.mat-mdc-outlined-button`, ou seja, é feito uma seleção dos botões que possuem essa classe.

Assim temos os pseudo seletores. Então, além do elemento HTML ter essa classe não pode estar desabilitado para botões que tenham essa classe.

Então, para botões que possuem essa classe e não estão desabilitados alteramos a cor da borda para branco.

**Nayanne:** Isso mesmo, Vini! Agora, voltamos ao navegador e recarregamos a página. Feito isso, deu certo! Só precisamos agora mudar a estilização.

Mas, antes disso, no `header.component.html`, vamos envolver a `toolbar` em uma tag `header`. Para isso, na primeira linha do código escrevemos `<header>` e no fim `</header>`.

Em seguida, na primeira linha, passamos uma classe chamada `app-header`. Depois, na linha 4, mudamos o nome da classe do `span` para `"spacer"` e salvamos.

```javascript
<header class="app-header">
  <mat-toolbar>
    <img src="assets/imagens/logo.png" alt="Logo da aplicação Jornada">
    <span class="spacer"></span>
    <button mat-button>Vender milhas</button>
    <button mat-button>Sobre</button>
    <button mat-raised-button color="primary">CADASTRE-SE</button>
    <button mat-stroked-button>LOGIN</button>
  </mat-toolbar>
</header>
Copiar código
```

Agora, vamos fazer as alterações necessárias no SCSS. Começaremos criando um espaçamento entre os botões. Para isso, no `header.component.scss`, na primeira linha, escrevemos `button {}`.

Nas chaves adicionaremos uma margem, então passamos `margin: 0 16px`. Abrimos o navegador para chegar e notamos que deu certo.

**Vinícios:** Ajustamos o espaço. Mas, pelo que estou vendo o seletor será aplicado em qualquer botão dentro do HTML. Mas, o que precisamos fazer é aplicar essa classe para os botões da classe *header*.

Isso significa que queremos aumentar a especificidade desse seletor, ou seja, ser mais específicos.

Ao invés de fazermos o seletor SCSS da forma convencional, podemos utilizar a **sintaxe do SCSS** que permite a criação de seletores e aplicar estilos a eles de forma alinhada.

Podemos então, passar o `.app-header`, para selecionar os elementos que tem essa classe, e dentro de chaves colocamos o restante do código SCSS.

```css
.app-header {

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

Ao fazer isso, dizemos que todos os seletores estão relacionados. Assim, não precisamos utilizar o `.app-header` antes de cada seletor.

O SCSS é um **pré-processador** de CSS, inclusive, muitas novidades foram inspiradas dele. A partir dele é possível expandir as funcionalidades do CSS, assim como os seletores alinhados.

> Se isso for novidade pra você, não se preocupe. Sempre que formos utilizá-lo, vamos mencionar o que está sendo feito.
>
> Além disso, também deixaremos uma atividade na qual recomendamos um curso que explica tudo sobre esses pré-processadores de CSS.

**Nayanne:** Isso facilita muito, Vini! Agora, nossa aplicação está quase pronta. Analisando o Figma, percebemos que a logo e os botões estão organizados próximos ao centro da tela.

**Vinícios:** Isso é muito importante para não deixar os elementos colados e deixar visualmente mais confortável.

**Nayanne:** Para fazermos isso, no fim do `.mat-toolbar`, escrevemos `padding: 0 64px`.

```css
  .mat-toolbar {
    background-color: black;
    color: white;
    padding: 0 64px;
  }
Copiar código
```

Abrimos o navegador para checar e percebemos que ainda não está com o espaçamento do Figma. Para definirmos um espaço maior, mudamos o valor para `256px`.

```css
.app-header {

  button {
    margin: 0 16px;
  }

  .spacer {
    flex: 1 1 auto;
  }

  .mat-toolbar {
    background-color: black;
    color: white;
    padding: 0 256px;
  }

  .mat-mdc-outlined-button:not(:disabled) {
    border-color: white;
  }
}

```

**Vinícios:** Agora sim temos os espaçamentos ideais nas laterais da tela, seguido pela logo e os botões. Visualmente está tudo mais organizado na tela.

**Nayanne:** Então, podemos considerar o *header* pronto!

**Vinícios:** Na aula seguinte vamos incluir o componente banner. Até lá!


# 12 **Incorporando o SCSS ao projeto**

Imagine que você é uma pessoa desenvolvedora Angular e precisa convencer sua liderança a utilizar o SCSS (Sassy CSS) para estilizar os elementos HTML em um novo projeto. Seu objetivo é apresentar o argumento mais forte para o uso dessa ferramenta.

Qual é o principal benefício ao utilizar o SCSS na estilização de um projeto Angular?


[ ] O SCSS permite escrever estilos de forma mais organizada e flexível, facilitando a manutenção e reutilização de código.

O argumento mais forte para utilizar o SCSS na estilização de um projeto Angular é a sua capacidade de escrever estilos de forma organizada e flexível. O SCSS oferece recursos como variáveis, mixins e aninhamento de seletores, que facilitam a manutenção do código e a reutilização de estilos em diferentes partes do projeto.


[ ] O SCSS oferece recursos avançados de design gráfico, permitindo criar elementos visuais sofisticados e atraentes para a aplicação Angular.

O SCSS não é uma ferramenta de design gráfico, mas sim uma extensão do CSS utilizada para estilizar elementos HTML em projetos Angular. Seu foco está na estilização e não na criação de elementos visuais complexos.


[ ] O SCSS ajuda a melhorar o desempenho da aplicação Angular, reduzindo o tempo de carregamento dos estilos e tornando-a mais rápida.


[ ] O SCSS fornece uma ampla biblioteca de componentes do Angular com estilos pré-definidos, agilizando o desenvolvimento da interface do usuário.


# 13 **Para saber mais: quais são as diferenças entre SASS e SCSS?**

## O que é SASS?

O SASS (Syntactically Awesome Style Sheets ou Folhas de Estilo Sintaticamente Espetaculares) é um pré-processador de CSS, o que significa que ele é processado antes de ser convertido em CSS puro. Ele oferece recursos adicionais para facilitar a escrita de estilos em projetos web e uma sintaxe mais avançada em relação ao CSS tradicional, como variáveis, aninhamento de seletores, mixins e funções.

Ao ser compilado para CSS, o SASS produz um código otimizado e compatível com todos os navegadores. Assim, é amplamente utilizado para aumentar a produtividade e a flexibilidade no desenvolvimento front-end.

## Mas e onde entra o SCSS nessa história?

O SASS tem duas sintaxes e uma delas é o SCSS! A sintaxe SCSS usada no curso, na qual adicionamos ao arquivo a extensão `.scss`, é usada com mais frequência. É um superconjunto de CSS, o que significa que todo CSS válido também é válido em SCSS.

Já a sintaxe SASS, na qual adicionamos ao arquivo a extensão `.sass`, é mais incomum: ela usa recuo em vez de chaves para aninhar instruções e novas linhas em vez de ponto e vírgula para separá-las. Você consegue observar essa diferença de sintaxes na documentação (em inglês) do SASS, [clicando aqui](https://sass-lang.com/guide#:~:text=With%20that%20in%20mind%2C%20here%27s%20an%20example%20of%20some%20typical%20styles%20for%20a%C2%A0site%27s%20navigation%3A).

## Para aprender sobre SASS

Caso você tenha sentido curiosidade em saber mais sobre como o SASS funciona e como utilizar a sintaxe SCSS em seus projetos para otimizar a estilização, recomendamos o curso [SASS: CSS sintaticamente espetacular](https://cursos.alura.com.br/course/sass-css-sintaticamente-espetacular), do instrutor Guilherme Lima, que aborda o uso do SASS desde os primeiros passos.


# 14 **O que aprendemos?**

## Nessa aula, você aprendeu como:

* Organizar a componentização do projeto;
* Instalar e importar o **Angular Material**;
* Criar o `header` da aplicação;
* Utilizar **SCSS** na estilização do `header`.
