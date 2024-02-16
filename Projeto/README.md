# **CSI606-2021-02 - Remoto - Trabalho Final**

### Resumo
  "How should i do?" é um fórum focado em linguagens de programação e o toolkit que as envolve. Neste sistema, usuários podem trocar conhecimento das mais diversas profundidades a respeito de seus tópicos de interesse através de posts, comentários e reações baseadas no humor :)

### 1. Tema
  O trabalho final tem como tema o desenvolvimento de um fórum sobre linguagens de programação e suas ferramentas.
<!-- Descrever e limitar o escopo da aplicação. -->
### 2. Escopo

  Este projeto terá as seguintes funcionalidades:
  
  * Usuários podem realizar e reagir à postagens
  * Usuários podem assinalar tags à postagens
  * Postagens podem conter texto, imagens e vídeos
  * Usuários podem favoritar discussões

<!-- Apresentar restrições de funcionalidades e de escopo. -->
### 3. Restrições

  Neste trabalho não serão considerados usuários simultâneos e qualquer atividade em tempo real. Outras funcionalidades extras podem ser adicionadas, tais quais uma aba de workspace para criação de fluxos de código.

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->
### 4. Protótipo

  Foram elaborados protótipos para as páginas de "Feed", "Criação de um novo post" e "Visualização detalhada de um post". Elas podem ser encontradas em:

  - [Feed](./sketches/feed.png)
  - [Criação de um novo post](./sketches/new_post.png)
  - [Visualização detalhada de um post](./sketches/detailed_post.png)

### 1. Funcionalidades implementadas
No que se diz ao que foi proposto, as seguintes funcionalidades foram implementadas:

  * Usuários podem realizar e reagir à postagens
  * Postagens podem são baseadas em texto
  * Usuários podem assinalar tags à postagens
  * Usuários podem favoritar discussões
  

### 2. Funcionalidades previstas e não implementadas
A unica funcionalidade proposta não implementada foi a anexação de vídeos e imagens em postagens, devido a dois principais motivos:

* Alto custo de implementação, que caiu de prioridade devido às outras necessidades
* Alinhamento de acordo com o objetivo da ferramenta: Por se tratar de um fórum de dúvidas e compartilhamento de conhecimento, talvez o uso de imagens e principalmente vídeos não esteja de acordo com o objetivo da plataforma. O único cenário pensado que seria interessante o uso de imagens estaria nos posts de compartilhamento de conteúdo visual, como gráficos e grafos.

### 3. Outras funcionalidades implementadas

* Criação de perfil de usuários, que permite a alteração de username e foto
* Autenticação via JWT

### 4. Principais desafios e dificuldades
O principal desafio/dificuldade foi a criação de uma interface elegante para a aplicação. Alguns pontos talvez não tenham a melhor estilização possível, mas acredito que isso foi compensado em outros componentes.

### 5. Instruções para instalação e execução
 - **Backend**: É necessário ter o Node instalado e digitar o comando ```npm install``` dentro do diretório do [backend](https://github.com/UFOP-CSI477/csi606-2023-02-atividades-Filipey/tree/master/Projeto/forum_backend). A segunda etapa é a inclusão de um arquivo ```.env``` com as variáveis conforme sugerido abaixo:
```env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/programming_forum_db?schema=public"
JWT_SECRET="WEB1"
JWT_EXPIRATION=
```
O servidor irá executar na porta **3000**

- **Frontend**: É necessário ter o Node instalado e digitar o comando ```npm install``` dentro do diretório do [frontend](https://github.com/UFOP-CSI477/csi606-2023-02-atividades-Filipey/tree/master/Projeto/forum_frontend). Não será necessário nenhuma configuração de ambiente, **pois a chamada à API está hard-coded na porta 3000**. Portanto, a aplicação irá iniciar na primeira porta disponível (Geralmente 3001). É possível iniciá-la de duas maneiras: ```npm run dev``` ou ```npm run build``` e ```npm run start```. A segunda maneira é mais aconselhável, tendo em vista que é a versão que rodaria em produção.

### 5. Referências

  1. [Reddit](https://www.reddit.com/)
  2. [ShadCN](https://ui.shadcn.com)
  3. [TailwindCSS](https://tailwindcss.com)
  4. [ReactQuery](https://tanstack.com/query/v3/)
  5. [NestJS](https://docs.nestjs.com)
  6. [Prisma](https://www.prisma.io)
