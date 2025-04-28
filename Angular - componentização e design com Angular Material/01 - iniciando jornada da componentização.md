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
