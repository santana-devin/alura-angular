# 01 Projeto da aula anterior

Caso queira revisar o código até aqui ou começar a partir desse ponto, faça o donwload ou veja nosso repositório do Github.

# 02 Trabalhando com interpolação no Angular

Na aula passada, começamos o desenvolvimento do projeto Organo e já criamos dois componentes: o cabeçalho e o rodapé. Agora, vamos continuar.

No Figma, vamos pensar juntos qual pode ser o nosso próximo passo. Criamos dois componentes de apresentação bem simples e não modificamos o arquivo TypeScript, pois não foi necessário.

Criando o componente do livro
Agora, acessando o Figma, temos a lista de livros. Essa estrutura de card contém a imagem, o título, a autoria e também o ícone de coração referente ao like. Ao invés de criarmos essa estrutura repetidas vezes, podemos criar um componente com a estrutura padrão para reutilizá-la. Este componente será diferente porque precisaremos acessar as informações do livro de forma dinâmica. Vamos começar a modificar a lógica e mexer no arquivo TypeScript.

Para isso, acessamos o VS Code para iniciar o desenvolvimento. Abrimos o terminal com o comando "Ctrl + J", interrompemos a aplicação com "Ctrl + C" e criamos o componente com o seguinte comando:

$ ng g c componentes/livro
Copiar código
Assim, o componente é criado. Depois, executamos a aplicação novamente com o comando abaixo e fechamos o terminal.

$ ng serve
Copiar código
Estruturando o HTML do componente
Dentro da pasta "componentes", temos, além do cabeçalho e do rodapé, o componente livro. Vamos acessar livro.component.html e o livro.component.ts. Podemos começar pelo HTML para ver logo renderizado e funcionando. Depois, podemos estilizar esse componente.

Apagamos a linha 1 de código que vem por padrão no arquivo. Depois, começamos a criar a estrutura escrevendo <section> </section>. Dentro dessa section, criamos uma div com a classe info-livro, que conterá as informações sobre o livro.

Neste primeiro momento, criamos um h2 com a classe texto-h2 que conterá o título do livro e um h3 com a classe texto-h3. Lembrando que essas classes serão adicionadas depois no CSS. A ideia do h3 é conter a autoria:

livro.component.html

<section>
    <div class="info-livro">
        <h2 class="texto-h2">Título</h2>
        <h3 class="texto-h3">Autoria</h3>
    </div>
</section>
Copiar código
Não podemos deixar essa informação fixa de título e autoria, nem queremos deixar esses nomes no h2 e no h3. Precisamos de informações para mostrar.

Então, na classe TypeScript, vamos criar uma propriedade chamada livro, que terá algumas informações para entendermos como pegar essas informações da classe e mostrá-las no template.

livro.component.ts

Essa propriedade livro será um objeto que conterá a propriedade título. Vamos passar, entre aspas, o título de um livro, As Ondas, e também a propriedade autoria, seguido de aspas e Virginia Woolf.

livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf"
}
Copiar código
Agora, queremos pegar essas informações e adicionar o título no h2 do nosso template e a autoria no h3. Para fazermos isso, voltamos ao template HTML e tentaremos algumas abordagens. Podemos, por exemplo, no h2, acessar o objeto da classe digitando livro.titulo. No elemento h3, podemos colocar livro.autoria.

livro.component.html

<section>
  <div class="info-livro">
    <h2 class="texto-h2">livro.titulo</h2>
    <h3 class="texto-h3">livro.autoria</h3>
  </div>
</section>
Copiar código
Para verificar se está aparecendo alguma coisa, precisamos adicionar esse novo componente na nossa vitrine, no arquivo app.component.html. Vamos abrir o arquivo e, entre o cabeçalho e o rodapé, próximo à linha 2, adicionar a tag do novo componente:

app.component.html

<app-livro></app-livro>
Copiar código
Também é necessário importar esse componente no arquivo app.component.ts. Na lista de importações, adicionamos o LivroComponent:

//Código omitido

@Component({
    selector: 'app-root',
    imports: [
            CabecalhoComponent,
            RodapeComponent,
            LivroComponent
    ],
})

//Código omitido
Copiar código
Feito isso, acessamos a aplicação Organa no navegador e recarregamos a tela. Nisso percebemos que a estrutura do card está aparecendo, ainda sem estilização, mas com as informações. No entanto, está aparecendo a string literal livro.titulo e livro.autoria, e não a informação que queremos buscar na classe.

Como acessar o objeto dessa forma não funciona, faremos essa ligação de outra forma. O Angular possui uma sintaxe própria para realizar esse bind, ou seja, associação da classe com o template. Para que a informação da classe apareça no template, podemos utilizar a sintaxe das chaves duplas. Assim, antes de livro.titulo, abrimos duas chaves e, após, fechamos duas chaves. Faremos o mesmo com livro.autoria, abrindo e fechando duas chaves e deixando essa informação dentro delas.

livro.component.html

<section>
  <div class="info-livro">
    <h2 class="texto-h2">{{ livro.titulo }}</h2>
    <h3 class="texto-h3">{{ livro.autoria }}</h3>
  </div>
</section>
Copiar código
Compreendendo a interpolação no Angular
Salvamos e voltamos à aplicação. Assim, percebemos que agora a informação contida no objeto da classe, como "As Ondas" e "Virginia Woolf", aparece corretamente.

Vamos entender um pouco da teoria por trás disso. Descobrimos que um componente no Angular é subdividido em algumas partes, sendo duas delas o HTML, também chamado de template, e a classe TypeScript, o component. Precisamos fazer uma interligação entre essas partes.

Para mostrar um valor que está na classe no template, podemos utilizar a chamada interpolação, passando esse valor entre chaves duplas no template. Dessa forma, o Angular interpreta tudo o que está dentro dessas chaves duplas, não como uma string literal, mas sim procurando um objeto ou uma propriedade na classe para fazer essa associação.

Esse é um fluxo unidirecional que parte da classe TypeScript para o template. Chamamos esse fluxo unidirecional de one-way data binding. Binding significa essa associação, data binding refere-se à associação de dados, e one-way indica esse fluxo em uma via única. Podemos imaginar uma via de mão única, onde a informação sai da classe TypeScript e conseguimos vê-la renderizada no template.

Testando a interpolação com expressões
Voltando ao VS Code, essa interpolação serve para mostrar valores e também expressões. Podemos, por exemplo, no livro.title, passar uma expressão como toUpperCase(), utilizando esse método para converter as letras em maiúsculas:

//Código omitido

<h2 class="texto-h2">{{ livro.titulo.toUpperCase() }}</h2>
Copiar código
Podemos visualizar na aplicação que o título ficou em maiúsculas. Com a interpolação, conseguimos passar valores, expressões matemáticas e também chamadas de métodos.

Agora que descobrimos como pegar essas informações da classe e mostrá-las no template, no próximo vídeo começaremos a estilizar esse componente. Até lá!

# 03 Preparando o ambiente: código CSS do card do livro

Para ganhar tempo e focarmos no aprendizado do Angular, daqui em diante vamos fornecer o código CSS para você copiar e colar no seu projeto. É indispensável que você domine o CSS – se esse não for o caso, volte alguns passos e pratique mais nos cursos de CSS aqui na Alura.

No vídeo 2.2, vamos estilizar o card do livro. Para isso, vamos alterar o arquivo css do componente livro.component.css e o arquivo de estilos globais styles.css, adicionando o código a seguir:

livro.component.css

section {
  width: 262px;
  min-height: 382px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding-top: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-left: 64px;
}

section .info-livro {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

section .info-livro > * {
  margin: 8px;
}

.texto-h2 {
  font-family: var(--font-montserrat);
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  line-height: 26px;
  text-align: center;
  max-width: 90%;
}

.texto-h3 {
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: var(--font-weight-normal);
  line-height: 20px;
  text-align: center;
  color: var(--color-secundaria);
}
Copiar código
styles.css

:root {
  --font-montserrat: 'Montserrat', sans-serif;
  --font-prata: 'Prata', serif;
  --color-primaria: #6278F7;
  --color-secundaria: #2E2E2E;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
}  
Copiar código
Fique à vontade para copiar os estilos e adicioná-los ao seu projeto :)


# 04 Estilizando o componente card


Agora, vamos estilizar o componente de livro. Se preferir pular esta parte, o código CSS estará disponível para consulta. Faremos ajustes tanto no CSS do próprio componente quanto no CSS global. No entanto, se quiser acompanhar as mudanças no card em tempo real, fique conosco. Este vídeo será totalmente focado na estilização do componente.

Você também tem acesso ao Figma, caso prefira se desafiar e codificar o CSS por conta própria antes de comparar, essa também é uma boa ideia.

Estilizando o componente de livro
Vamos começar com o arquivo livro.component.css, que é o CSS do componente, e também com o arquivo de estilos globais, styles.css. No arquivo de estilo global, adicionaremos algumas variáveis que serão reutilizadas na aplicação, como variáveis de fonte e outras.

Começaremos pelo arquivo de estilo global, pois no CSS do livro já poderemos utilizar essas variáveis. Utilizaremos o pseudo-seletor :root, que representa a raiz do documento, o elemento HTML. Vamos criar uma variável para a fonte principal, chamada --fonte-montserrat, cujo valor será 'Montserrat', sans-serif. A próxima variável será para outra fonte utilizada no projeto, chamada --fonte-prata, com o valor 'Prata', serif.

Agora, criaremos duas variáveis para as cores da aplicação. Uma variável será --color-primaria, com o valor #6278F7, que é a cor utilizada no rodapé e no cabeçalho. A outra variável será --color-secundaria, com o valor #2E2E2E.

Também criaremos duas variáveis para o peso da fonte. Na linha 15, digitamos --fonte-weight-normal, com o peso 400. Para duplicar essa linha, podemos usar "Alt + Shift + seta para baixo", otimizando tempo. A próxima variável será --fonte-weight-bold, com o peso 700, que representa um negrito. Após, fechamos as chaves.

styles.css

//Código omitido

:root {
  --font-montserrat: 'Montserrat', sans-serif;
  --font-prata: 'Prata', serif;

  --color-primaria: #6278F7;
  --color-secundaria: #2E2E2E;

  --font-weight-normal: 400;
  --font-weight-bold: 700;
}  
Copiar código
Estilizando a seção do card do livro
Com essas variáveis criadas, vamos agora para o livro.component.css do componente livro, onde poderemos acompanhar as mudanças em tempo real na aplicação. Começaremos estilizando a section que criamos no HTML e no template do componente. Adicionaremos uma largura width: 262 px, uma altura mínima min-height: 382 px e uma margem margin: 8 px.

Utilizaremos o display: flex para direcionar os elementos dentro do card, que são a imagem, o título e a autoria. O flex-direction será column, pois essas informações estão dispostas uma abaixo da outra. Alinharemos com align-items: center e definiremos um background-color branco, com o valor #FFFFFF.

Lembre-se de que no Figma observamos que o background dos gêneros literários possui uma coloração. Por isso, o background do card será branco, para que ele possa aparecer, já que ainda não temos esse background colorido dos gêneros.

Vamos adicionar um border-radius de 8 px para arredondar as bordas. A propriedade position será definida como relativa. O overflow será configurado como hidden para não aparecer. Vamos adicionar um padding-top de 16px para descolar da parte superior.

Para visualizar o contorno desse card, como ainda não temos o background colorido, vamos aplicar um box-shadow temporariamente. Posteriormente, quando finalizarmos e tivermos o background colorido, retiraremos essa propriedade, pois não será mais necessária. Se desejarmos, podemos criar um box-shadow com o background colorido e, em seguida, remover essa propriedade. O box-shadow será configurado como 0, 0, 10 pixels e o RGBA como 0, 0, 0, 0.2.

Além disso, para descolar, aplicaremos uma margin-left de 64 pixels. Posteriormente, quando tivermos outros cards, removeremos essa margem, pois não será necessária.

livro.component.css

section {
  width: 262px;
  min-height: 382px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding-top: 16px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-left: 64px;
}
Copiar código
Nosso card já está ficando bem melhor, e conseguimos visualizar melhor sua estrutura. Agora, vamos estilizar a classe infolivro. Adicionaremos section.info-livro e utilizaremos o display: flex novamente, com flex-direction: column e align-items: center. A altura será de 100% e o overflow será hidden também.

section .info-livro {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
}
Copiar código
Em seguida, vamos estilizar os filhos diretos dessa classe infolivro. Utilizaremos GTsection.infotraçolivro > * para estilizar quaisquer elementos que sejam filhos diretos dessa classe, adicionando uma margem de 8 pixels.

section .info-livro > * {
  margin: 8px;
}
Copiar código
Estilizando os títulos do card
Também adicionamos duas classes, uma para o H2 e outra para o H3. Vamos estilizar a classe .texto-h2, definindo a font-family. Podemos utilizar a variável que criamos anteriormente no CSS Global, com var e o nome da variável entre parênteses. O VS Code nos auxilia com isso. A fonte será Montserrat. O tamanho da fonte, com font-size, será de 20 pixels. O peso da fonte, com font-weight, utilizará a variável --font-weight-bold.

Para a altura da linha usamos line-height, será de 26 pixels. O text-align será center, para centralizar o texto, e a largura máxima, max-width, será de 90%.

//Código omitido

.texto-h2 {
  font-family: var(--font-montserrat);
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  line-height: 26px;
  text-align: center;
  max-width: 90%;
}
Copiar código
Agora, vamos estilizar a classe do H3. Para agilizar, copiaremos as linhas 30 a 37 e colaremos abaixo. Feito isso, mudamos de texto-h2 para texto-h3 e modificamos os valores das propriedades. A font-family continuará sendo Montserrat, mas o font-size será um pouco menor, com altura de 16 pixels. O font-weight será normal em vez de bold. A altura da linha será de 20 pixels. O text-align será center. Não teremos a propriedade max-width, então a excluiremos. Adicionaremos a propriedade color, utilizando a variável --color-secundário.

section {
  width: 262px;
  min-height: 382px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding-top: 16px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-left: 64px;
}

section .info-livro {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

section .info-livro > * {
  margin: 8px;
}

.texto-h2 {
  font-family: var(--font-montserrat);
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  line-height: 26px;
  text-align: center;
  max-width: 90%;
}

.texto-h3 {
  font-family: var(--font-montserrat);
  font-size: 16px;
  font-weight: var(--font-weight-normal);
  line-height: 20px;
  text-align: center;
  color: var(--color-secundaria);
}

//Código omitido
Copiar código
Agora, finalizamos, por enquanto, a estilização do card do livro. No próximo vídeo, continuaremos implementando essa estrutura, agora colocando a imagem nesse card.

# 05 Aplicando o property binding

Após a estilização, nosso card está muito mais parecido com a estrutura do Figma, mas ainda faltam algumas partes. Uma parte principal que precisamos renderizar é a imagem. Vamos adicionar essa imagem agora no card.

Adicionando a imagem ao card
No VS Code, podemos fechar o arquivo de CSS. Estamos com o livro.component.hml e o livro.component.ts do componente livro abertos. Na seção do template, vamos adicionar uma nova div acima da div de informações para representar a imagem. Essa div terá a classe imagem e, dentro dela, adicionaremos uma tag img. Precisamos passar o caminho e o alt dessa imagem.

livro.component.hml

<section>
  <div class="imagem">
    <img src="" alt="">
  </div>
</section>

//Código omitido
Copiar código
Voltando ao livro.component.ts, onde estamos guardando essas informações por enquanto, vamos adicionar mais uma propriedade ao objeto. Ao final da linha 13, digitamos uma vírgula e, na linha 14, adicionamos imagem, dois pontos, e entre aspas duplas, buscamos a imagem desse livro. Podemos fazer esse exemplo com um filme ou uma série de sua preferência. No Google, digitamos o título do livro e a autoria. Na primeira imagem, que é a capa do livro, clicamos com o botão direito e selecionamos "copiar endereço da imagem". Voltamos ao VSCode e colamos a URL, que é um endereço bem grande.

livro.component.ts

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    imagem: "[link da imagem]"
  }
}
Copiar código
Acabamos de aprender que podemos passar a imagem para o componente utilizando a interpolação. Essa associação é feita através da interpolação, mas utilizamos essa interpolação para adicionar um texto na tag h2 e na tag h3. Também podemos adicionar em tags como um parágrafo e outras tags de texto, pois podemos interpolar esses valores entre a abertura e o fechamento da tag.

Aplicando o binding na imagem
No entanto, a imagem é uma tag HTML diferente. Agora, queremos fazer esse binding (associação) de um valor da nossa classe para um atributo de uma tag HTML. A estrutura é um pouco diferente, e por isso a sintaxe dessa associação também será um pouco diferente.

Vamos começar adicionando da mesma forma como fizemos o teste para o título e para a autoria. Para o src, podemos passar livro.imagem. E para o alt, podemos passar, por exemplo, o título do livro, adicionando livro.título.

<section>
  <div class="imagem">
    <img src="livro.imagem" alt="livro.titulo">
  </div>

  <div class="info-livro">
    <h2 class="texto-h2">{{ livro.titulo }}</h2>
    <h3 class="texto-h3">{{ livro.autoria }}</h3>
  </div>
</section>
Copiar código
Voltamos à aplicação e percebemos que a imagem não foi renderizada e, para o alt, temos a string literal livro.título. Definitivamente, não funcionou.

Nesse caso, quando precisamos pegar um valor de uma classe e adicionar a um atributo de uma tag HTML, utilizamos outras sintaxes. Envolvemos o atributo da tag HTML em colchetes. Por exemplo, ao redor de src, passamos colchetes e fazemos o mesmo para alt, mantendo entre aspas duplas como já estava: livro.imagem e livro.título. Adicionamos apenas esse detalhe dos colchetes.

<section>
  <div class="imagem">
    <img [src]="livro.imagem" [alt]="livro.titulo">
  </div>

  <div class="info-livro">
    <h2 class="texto-h2">{{ livro.titulo }}</h2>
    <h3 class="texto-h3">{{ livro.autoria }}</h3>
  </div>
</section>
Copiar código
Ao voltar na aplicação, percebemos que a imagem já foi renderizada. Conseguimos fazer essa associação de dados entre a classe e o template utilizando essa forma, conhecida como Proper Binding, que é uma associação de propriedades com uma sintaxe diferente.

Agora, vamos explorar nos slides uma analogia e um pouco da teoria por trás desse Proper Binding. Descobrimos que, para fazer a comunicação entre a classe TypeScript e o template, podemos usar a interpolação com a sintaxe das chaves duplas. Além disso, para associar um valor que está na classe a um atributo ou propriedade de uma tag HTML, utilizamos os colchetes. Esse Proper Binding possui a mesma direção da interpolação, da classe TypeScript para o template, e também é um fluxo unidirecional.

Fixando o conceito
Para tornar mais claro e ajudar a fixar essa sintaxe do Angular, que pode ser um pouco diferente, vamos usar uma analogia. Imagine um desfile de moda composto por algumas partes. Nos bastidores do desfile, onde ocorrem várias ações que não vemos, podemos associar essa parte à classe TypeScript, onde temos as propriedades, métodos e ações da classe.

Já a passarela do desfile, onde vemos os modelos desfilando, pode ser associada ao HTML, ao template do componente. Os looks dos modelos representam nossas propriedades, nossos Proper Binds. São aquilo que queremos pegar da classe e mostrar no template.

Para fixar a sintaxe do Property Binding, imagine que você está segurando sua câmera enquanto espera por alguém de quem gosta. Faça o gesto de segurar a câmera com as duas mãos, formando um par de colchetes. Esse movimento lembra a estrutura dos colchetes, ajudando a associar visualmente o conceito. Sempre que precisar acessar um valor de um objeto dentro de uma classe e exibi-lo no template do componente, será necessário envolver esse atributo entre colchetes. Caso contrário, o Angular interpretará o valor como uma string literal.

Esperamos que essa associação facilite a memorização. Agora que entendemos como vincular propriedades, no próximo vídeo exploraremos o Binding de eventos. Te esperamos lá!

# 06 Personalização de produtos para pets

A Petpark, uma plataforma de e-commerce e serviços personalizados para animais de estimação, está desenvolvendo uma nova funcionalidade para permitir que tutores de pets personalizem produtos, como coleiras e caminhas, com imagens dos seus animais. A equipe de desenvolvimento está utilizando Angular para criar a interface dessa funcionalidade e precisa garantir que as imagens dos pets sejam corretamente exibidas nos produtos personalizados. No entanto, as imagens não estão sendo renderizadas corretamente. Como a equipe pode resolver esse problema?

Alternativa correta
A equipe deve utilizar o conceito de Property Binding no Angular, envolvendo o atributo src da tag img com colchetes, como [src], e atribuir a ele a propriedade que contém a URL da imagem na classe TypeScript.


Correta, pois ao usar Property Binding com colchetes, o Angular interpreta o valor como uma referência à propriedade da classe TypeScript, garantindo que as imagens sejam renderizadas corretamente.

Alternativa correta
A equipe deve utilizar Event Binding para associar as URLs das imagens aos atributos src das tags img, garantindo que as imagens sejam atualizadas em resposta a eventos do usuário, como cliques ou movimentos do mouse, que possam alterar a exibição das imagens.


Alternativa correta
A equipe deve criar uma função JavaScript externa para atualizar manualmente os atributos src das tags img sempre que a URL da imagem mudar na classe TypeScript, permitindo um controle mais direto sobre o processo de atualização das imagens.


Alternativa correta
A equipe deve definir as URLs das imagens diretamente no template HTML, para garantir que o Angular interprete as URLs como strings literais, mantendo a simplicidade do código e evitando a complexidade adicional de vinculação de propriedades.


Parabéns, você acertou!

#  07 Preparando o ambiente: código CSS do arquivo ''livro.component''

No vídeo 2.4, vamos estilizar a imagem e o botão de favoritar no card de livro. Para isso, vamos alterar o arquivo livro.component.css adicionando o código a seguir:

section .imagem {
  margin-top: 32px;
}
section img {
  width: 128px;
  height: 184px;
  margin-bottom: 20px;
}
.favorito-btn {
  position: absolute;
  top: 32px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #ff5252;
  padding: 0;
  outline: none;
}
.favorito-btn:hover {
  opacity: 0.8;
  transform: scale(1.1);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
Copiar código
Quando esse código for citado em aula, fique à vontade para copiá-lo daqui e adicioná-lo ao seu projeto :)

# 08 Ouvindo eventos com o event binding

Avançamos na estrutura do card e já conseguimos renderizar a imagem. Comparando com o design no Figma, percebemos que ainda faltam os estilos de borda e o ícone de coração. Podemos aproveitar este momento para adicionar o ícone e também implementar a funcionalidade de favoritar um card, representando um livro.

Inserindo o botão de favorito no HTML
No VS Code, acessamos a estrutura do nosso componente HTML. Adicionaremos um botão para o ícone de coração. Esse botão terá a classe favorito-btn e dentro dele incluiremos um span. Para renderizar esse ícone, utilizaremos um unicode, que é uma string interpretada como ícone. Entre aspas simples, digitaremos o código \u2661.

livro.component.html

<section>
    <button class="favorito-btn">
        <span>'\u2661'</span>
    </button>
</section>

//Código omitido
Copiar código
Se voltarmos à aplicação, perceberemos que a string está aparecendo de forma literal, pois precisa ser convertida para o ícone. Podemos utilizar a interpolação, que já aprendemos em vídeos anteriores, para fazer essa conversão. A interpolação permite passar valores e expressões. Vamos testar colocando o ícone dentro das chaves duplas. Ao voltar, o ícone já aparece acima da imagem.

<section>
    <button class="favorito-btn">
        <span>{{ '\u2661' }}</span>
    </button>
</section>

//Código omitido
Copiar código
Precisamos estilizar tanto o ícone quanto a imagem. Para agilizar, já deixamos o código CSS preparado. No arquivo livro.component.css, abaixo da classe que fizemos juntos, colaremos o CSS disponibilizado no ambiente de preparação desta aula.

livro.component.css

section img {
  width: 128px;
  height: 184px;
  margin-bottom: 20px;
}

.favorito-btn {
  position: absolute;
  top: 32px;
  right: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #ff5252;
  padding: 0;
  outline: none;
}

.favorito-btn:hover {
  opacity: 0.8;
  transform: scale(1.1);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
Copiar código
Estamos estilizando a imagem adicionada no vídeo anterior e também a classe favorito-btn que acabamos de criar. Definimos tamanho, posição, cor do coração e uma animação ao passar o mouse sobre ele.

Fechamos o CSS e voltamos à aplicação. O coração já está no local correto, ao lado direito do livro, e possui uma animação ao passar o mouse. No entanto, ao clicar, nada acontece. O visual está pronto, mas precisamos implementar a funcionalidade.

Vamos pensar no que fazer. Queremos que, ao interagir com a interface, algo aconteça, uma lógica seja executada. Desta vez, estamos indo do template, ou seja, da interface HTML, para o TypeScript. É o caminho inverso do que fazíamos com a interpolação e o Property Binding, que iam da classe para o template. Agora, queremos que, a partir do clique no template, uma ação seja executada. Vamos ver como o Angular faz isso.

Voltaremos ao VS Code. Para que alguma lógica aconteça, precisamos primeiro definir qual será essa lógica. No arquivo livro.component.ts, adicionaremos mais uma propriedade ao livro, que já possui título, autoria e imagem. O livro pode ou não ser um favorito, então adicionaremos essa propriedade chamada favorito. Essa propriedade é um boolean, podendo ser false ou true. Inicialmente, definiremos como false inicialmente.

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    imagem: "data: link imagem"
  }
Copiar código
Com essas informações, precisamos de uma ação. Criaremos um método na classe que será chamado quando o botão ou ícone for clicado. Chamaremos esse método de alternarFavorito. Abriremos e fecharemos parênteses e o bloco com chaves.

Queremos que, se o livro não estiver favoritado, ou seja, se a propriedade for false, que mude para true. Se clicarmos novamente, queremos que vá de true para false. Desejamos esse comportamento tanto na lógica quanto visualmente.

Podemos acessar o objeto this.livro e a propriedade favorito. Quando o método for chamado, essa propriedade receberá ela mesma, mas negada. Adicionaremos o operador de negação ! a this.livro.favorito.

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito
  }
Copiar código
Associando o clique ao método
Já temos a lógica definida. Agora, precisamos fazer a associação desse método no nosso template. Então, voltamos ao template. No botão, onde ocorrerá o clique, precisamos chamar essa função. Para isso, utilizaremos uma sintaxe do Angular. Agora, ao invés de associação de propriedades, faremos a associação de eventos.

Podemos escutar uma grande variedade de eventos na interface. Ao abrir e fechar parênteses, aparecerão todos os eventos que podemos escutar, como clique do botão, mouse over, e podemos até capturar as informações que o usuário digitar na tela. É uma infinidade de opções.

Escolheremos o clique, pois é a ação que a pessoa fará no ícone de coração. Entre parênteses, digitamos click. E entre aspas duplas, chamamos o método que criamos na classe. Digitamos exatamente o nome do método que criamos, incluindo também os parênteses. Isso indicará ao Angular que, quando houver um clique nesse botão, esse método deve ser chamado.

<section>
  <button class="favorito-btn" (click)="alternarFavorito()">
    <span>{{ '\2661' }}</span>
  </button>
  <div class="imagem">
    <img [src]="livro.imagem" [alt]="livro.titulo">
  </div>
  <div class="info-livro">
    <h2 class="texto-h2">{{ livro.titulo }}</h2>
    <h3 class="texto-h3">{{ livro.autoria }}</h3>
  </div>
</section>
Copiar código
Vamos verificar se está funcionando. Ao voltar para a aplicação e clicar no botão, nada acontece. Isso, pois alteramos a lógica, mas na interface ainda está fixo o unicode de coração vazio. Precisamos adicionar uma lógica para que, ao clicar, o ícone mude.

Podemos usar um operador ternário para verificar se o livro é favorito ou não e, dependendo da resposta, renderizar um ícone ou outro. Para isso, acessamos livro.favorito, utilizamos a interrogação do ternário e, se for favorito, pegamos o código unicode do coração preenchido. Entre aspas simples, digitamos \u2764. Se for favorito, renderizamos esse primeiro unicode, que é o coração preenchido. Caso contrário, usamos os dois pontos do ternário para renderizar o unicode seguinte, que é o ícone de coração vazio.

<section>
  <button class="favorito-btn" (click)="alternarFavorito()">
    <span>{{ livro.favorito ? '\u2764' : '\u2661' }}</span>
  </button>
  <div class="imagem">
    <img [src]="livro.imagem" [alt]="livro.titulo">
  </div>
  <div class="info-livro">
    <h2 class="texto-h2">{{ livro.titulo }}</h2>
    <h3 class="texto-h3">{{ livro.autoria }}</h3>
  </div>
</section>
Copiar código
Ao voltar para a aplicação, ao clicar, percebemos que o coração fica preenchido, indicando que a propriedade está verdadeira. Ao clicar novamente, o ícone fica vazio, pois a propriedade favorito se torna falsa. Conseguimos implementar a funcionalidade.

Entendendo o event binding
Vamos voltar à nossa analogia para entender como funciona por trás dessa teoria. Voltando ao nosso desfile, lembremos que os bastidores são nossa classe TypeScript e a passarela é nosso template, o HTML. Queremos que, quando uma ação ocorrer no template, chamemos o método da classe. Podemos imaginar que, durante o desfile, a pessoa que está desfilando ouvirá vários cliques, pois as pessoas estão tirando fotos.

Ao ouvir o clique, ela se direcionará para os bastidores para realizar alguma ação. Suponhamos que ela se empolgou desfilando e, ao ouvir os cliques, percebeu que deveria voltar aos bastidores para trocar de roupa ou realizar alguma ação necessária. Podemos fazer essa associação com o ato de ouvir o clique.

Para ouvir melhor, geralmente colocamos as mãos ao redor das orelhas. Fazendo esse gesto, lembramos dos parênteses que precisamos inserir ao redor do evento que queremos escutar, seja ele um clique ou qualquer outro evento na interface. Essa associação é chamada de event binding, ou seja, associação de eventos.

Nessa associação de eventos, temos também um fluxo unidirecional. Desta vez, não estamos saindo da classe para o template, mas fazendo o caminho inverso, do template para a classe TypeScript. Já tivemos interpolação, property binding e agora o event binding, onde ouvimos um evento no template, na interface, e chamamos um método na classe TypeScript.

Imagem ilustrando a comunicação entre '<TEMPLATE>' e '{COMPONENTE}'. No centro, há três linhas explicativas: '{​{valor}}' aponta para o lado esquerdo, '[propriedade] = valor' aponta para o lado esquerdo, e '(evento)=método()' aponta para o lado direito. 

Com isso, conseguimos finalizar a estrutura inicial do nosso card. Na próxima aula, continuaremos evoluindo o projeto Organo. Até lá!

#  09 Gerenciando favoritos no SwiftBank

O SwiftBank, um aplicativo de banco digital, está desenvolvendo uma funcionalidade que permite às pessoas usuárias favoritar suas contas mais utilizadas para facilitar o acesso. A equipe de desenvolvimento já implementou a interface com um ícone de estrela ao lado de cada conta, mas precisa garantir que a lógica de favoritar e desfavoritar funcione corretamente.

Qual abordagem a equipe deve adotar para implementar essa lógica, assegurando que a interface seja atualizada de acordo com o estado de favorito de cada conta?

Alternativa correta
Criar uma lista global de contas favoritas e atualizar essa lista diretamente no banco de dados sempre que o ícone de estrela for clicado, sem alterar a interface, mas garantindo que a lista seja sincronizada com o servidor periodicamente para manter a consistência dos dados.


Alternativa correta
Utilizar um arquivo de configuração externo para armazenar o estado de favorito de cada conta e atualizar a interface apenas ao reiniciar o aplicativo, garantindo que o arquivo seja criptografado para proteger a privacidade dos dados do usuário.


Alternativa correta
Implementar um contador de cliques no ícone de estrela e usar esse contador para determinar se a conta é favorita, sem modificar a classe da conta.


Alternativa correta
Adicionar uma propriedade booleana à classe que representa a conta, indicando se ela é favorita ou não, e criar um método para alternar essa propriedade ao clicar no ícone de estrela, atualizando a interface com uma expressão condicional.


Correta, pois essa abordagem garante que o estado de favorito seja armazenado e alternado corretamente, além de assegurar que a interface seja atualizada visualmente para refletir o estado atual da conta.


# 10 Faça como eu fiz: exiba dados e interaja com eventos no Angular

Nesta aula, aprendemos como exibir informações dinâmicas usando interpolação, como vincular atributos HTML de forma dinâmica com property binding e como capturar eventos utilizando event binding.

Agora é sua vez de praticar, fazendo o mesmo no seu projeto! Siga o passo a passo:

Crie um novo componente chamado “Livro”;
Utilize interpolação para exibir o título e a autoria do livro;
Utilize property binding para exibir a imagem do livro dinamicamente;
Utilize event binding para alternar o estado de "favorito" ao clicar no botão.
Abaixo está o passo a passo detalhado de como você pode realizar a atividade!

# 11 O que aprendemos?

Nesta aula, aprendemos:

A criar componentes Angular reutilizáveis usando Angular CLI. /
A acessar e interpolar dados dinamicamente entre TypeScript e HTML. /
A utilizar variáveis CSS globais para padrão de estilo e aplicá-las via :root. /
A estilizar componentes Angular com CSS, incluindo flexbox e efeitos visuais. /
A associar imagens a componentes Angular através de Property Binding. /
A aplicar unicode para ícones e utilizar event binding para interação. /
A alternar estados e elementos com operadores de negação e ternários.