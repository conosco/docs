# Documento de Visão
| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|25/03/2019 | 0.1 | Iniciação do Documento | Gustavo Braz |
|31/03/2019 | 0.2 | Criação dos tópicos 3 e 4 | Djorkaeff Alexandre |
|31/03/2019 | 0.3 | Criação dos tópicos 3.7 e ajustes no sumário | Gustavo Braz|
|10/04/2019 | 0.4 | Criação dos tópicos 3.1 e 3.2 e ajustes no sumário | Gustavo Braz e Augusto Vilarins|

## Sumário
[1. Introdução](#_1introdução)
&nbsp;&nbsp;[1.1. Propósito](#_11-propósito)
&nbsp;&nbsp;[1.2. Escopo](#12-escopo)
&nbsp;&nbsp;[1.3. Visão Geral](#15-visão-geral)
[2. Posicionamento](#2-posicionamento)
&nbsp;&nbsp;[2.1. Oportunidade de Negócios](#21-oportunidade-de-negócios)
&nbsp;&nbsp;[2.2. Descrição do problema](#22-descrição-do-problema)
&nbsp;&nbsp;[2.3. Instrução de Posição do Produto](#23-instrução-de-posição-do-produto)
[3. Descrições da parte interessada e do usuário](#3-descrições-da-parte-interessada-e-do-usuário)
&nbsp;&nbsp;[3.1. Resumo da Parte Interessada](#31-resumo-da-parte-interessada)
&nbsp;&nbsp;[3.2. Resumo do Usuário](#32-resumo-do-usuário)
&nbsp;&nbsp;[3.3. Ambiente de usuário](#33-ambiente-de-usuário)
&nbsp;&nbsp;[3.4. Perfis das Partes Interessadas](#34-perfis-das-partes-interessadas)
&nbsp;&nbsp;[3.5. Perfis dos usuários](#35-perfis-dos-usuários)
&nbsp;&nbsp;[3.7. Alternativas e Concorrência](#37-alternativas-e-concorrência)
[4. Visão geral do produto](#4-visão-geral-do-produto)
&nbsp;&nbsp;[4.1. Propósito do Produto](#41-perspectiva-do-produto)
&nbsp;&nbsp;[4.2. Recursos do Produto](#42-resumo-das-capacidades)
&nbsp;&nbsp;[4.3. Suposições e Dependências](#43-suposições-e-dependências)
&nbsp;&nbsp;[4.4. Licenciamento e Instalação](#44-licenciamento-e-instalação)
[5. Restrições](#5-restricoes)
[6. Referências](#6-referencias)


# 1.Introdução

## 1.1 Propósito
<p align = "justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Este documento tem como objetivo definir e organizar as características sobre o desenvolvimento do software. Serão explicitados os aspectos principais desse processo, mostrando seus pontos vitais e as técnicas de execução.

## 1.2 Escopo
<p align = "justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O projeto tem como finalidade agrupar pessoas com interesses em comum e motivá-las a melhorar e criar novos hábitos através de gamificação. O usuário terá liberdade de criar objetivos e tarefas de acordo com sua realidade e ganhar recompensas. Criar um ambiente agradável, onde as pessoas sintam-se confortáveis para compartilhar experiências e conhecimento. O aplicativo deve ser gratuito e intuitivo.

## 1.3 Visão geral
<p align = "justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Este documento visa descrever os detalhes sobre as características do software a ser implementado e suas técnicas para a execução do mesmo.
O documento é dividido da seguinte maneira: inicialmente, foi explorado uma visão geral de todo o documento, exposição do problema que este projeto busca resolver e a descrição da parte interessada. Logo após, foram expostos os recursos necessários, restrições e a descrição do desempenho do produto. Por fim, foram denominados os requisitos necessários para a realização do projeto.

# 2. Posicionamento

## 2.1 Oportunidade de Negócio:

<p align="justify">Vender publicidade direcionada para pessoas que querem manter e disseminar bons hábitos.</p>

## 2.2 Descrição do Problema:

|Tipo| Descrição |
| :------:| :-----------: |
|*O Problema é* | a vontade de manter bons hábitos |
| *Afeta* | pessoas que querem ter uma vida plena |
| *Impacto é* | saúde e qualidade de vida abalados por falta de motivação para manter bons hábitos |
| *Solução* | Conosco irá unir pessoas afim de transformá-las em ser humanos melhores |

## 2.3 Instrução de Posição do Produto:

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O Conosco é uma plataforma digital mobile para os millenials que irá transformar a vida das pessoas para melhor.</p>

# 3: Descrição de Usuário

## 3.1 Usuário:

|Nome | Descrição |
|:-----:|:----------:|
| *Usuário Principal* | O nosso usuário principal pode ser melhor definido no [Mapa de segmentação](https://conosco.github.io/docs/#/docs/mapa-de-segmentacao) |
| *Usuário Aderido* | São usuários que não se encaixam no perfil de usuário padrão mas mesmo assim se sentem atraídos a usar o aplicativo. |

## 3.2 Principais Necessidades do Usuário:

|Necessidade | Prioridade |Interesses | Solução atual | Solução proposta|
|:----:|:--:|:----:|:----:|:----:|
| *Aderir a um habito* | Alta | Estimular a determinação por bons hábitos dos usuários através de novas experiências satisfatórias | Método manual e empírico de criação de habitos |De forma mais eficiente, motivar o usuário a criar e aderir a novos habitos
| *Manter o habito na rotina* | Alta | Manter uma rotina consistente e equilibrada através da realização dos habitos escolhidos  |Método manual e pouco eficiente atravésde conhecimentos empíricos | Atráves de métodos de gamificação fornecer insumos para a fidelização do usuário nos habitos escolhidos |
|*Compartilhar experiências sobre um hábito*| Intermediária | Ajudar a construir uma comuidade que se ajuda | Métodos pouco atrativos em relação a motivação do usuário por uma comunidade focada com o mesmo objetvo | Uma plataforma atrativa em que usuários com objetivos em comum compartilham conhecimentos e experiências para se ajudarem |



## 3.3 Ambiente de Usuário:

<p align="justify">Conosco será uma aplicação Mobile disponível para Android & iOS.</p>

## 3.4 Partes Envolvidas:

| Nome | Descrição | Responsabilidades | Envolvimento |
| :-------: | :------: | :----------: | :-----------: |
|Ícaro Oliveira | Desenvolvedor| Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Augusto Vilarins| Desenvolvedor| Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Guilherme Siqueira | Desenvolvedor| Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Djorkaeff Alexandre Vilela Pereira | Desenvolvedor| Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Gustavo Vieira Braz | Desenvolvedor | Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Rodrigo Dadamos | Desenvolvedor | Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Mateus Augusto | Desenvolvedor | Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Vitor Leal | Desenvolvedor | Desenvolver a aplicação e manter a documentação atualizada| Alto|
|Ana Carolina Carvalho | Desenvolvedor | Desenvolver a aplicação e manter a documentação atualizada| Alto|
|João Pedro| Desenvolvedor | Desenvolver a aplicação e manter a documentação atualizada| Alto|

## 3.5 Alternativas e Concorrência:

<p align="justify">O principal concorrente presente no mercado é o aplicativo Habitica. No qual é um aplicativo de gerenciamento de tarefas on-line executado pela HabitRPG, Inc. Ao contrário da nossa solução, eles são focados em um modelo de "TODO list" em um ambiente de RPG.</p>

## 4: Visão Geral do Produto

## 4.1 Propósito do Produto:

<p align="justify">Conosco tem como objetivo tornar as pessoas melhores em bons hábitos diários.</p>

## 4.2 Recursos do Produto:

Através do *aplicativo*, o usuário poderá:
- Visualizar uma lista de hábitos.
- Participar de um grupo de algum hábito.
- Dar dicas e experiência sobre como manter esse hábito.
- Curtir dicas de um hábito.
- Obter pontos e *badgets* exclusivas.
- Ter acesso ao perfil de outros usuários.

## 5: Restrições

- A aplicação deverá ser entregue funcionalmente até Julho de 2019.
- Precisa ser compatível com dispositivos Android & iOS.
- Será desenvolvida utilizando as linguagens Javascript & Typescript.
- É necessário estar conectado a internet para ter acesso a aplicação.

## 6: Referências

- IBM Knowledge Center - Documento de Visão: A estrutura de tópicos do documento de visão. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_3.0.1/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.htm. Acesso em: 28 mar. 2019;
- Projeto Receituário Médico - Documento de visão, Acessado em: 28/03/2019. Disponível em: https://github.com/fga-eps-mds/2017.2-Receita-Mais/wiki/Documento-de-Vis%C3%A3o
- Projeto EmbelezaMais - Documento de visão, Acessado em: 28/03/2019. Disponível em: https://github.com/Software-Design-2017/EmbelezaMais/wiki/Documento-de-Vis%C3%A3o-Framework
