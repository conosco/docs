
# Arquitetura
| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|29/03/2019 | 0.1 | Adição de Objetivo | Ícaro Oliveira |
|31/03/2019 | 0.2 | Adição de Objetivo, Contexto, Contêiners e Componentes | Ícaro Oliveira |
|04/04/2019 | 0.3 | Adição de Pipeline | Augusto Vilarins, Djorkaeff Alexandre, Guilherme Siqueira, Ícaro Oliveira |
|16/06/2019 | 0.4 | Colocando documento no template e refatorando seções 1 e 2  | Guilherme Siqueira, Augusto Vilarins, Djorkaeff Alexandre, Ícaro Oliveira |
|16/06/2019 | 0.5 | Adicionando item 4 e descrevendo Redux  | Guilherme Siqueira, Augusto Vilarins, Djorkaeff Alexandre, Ícaro Oliveira |
|16/06/2019 | 0.6 | Adicionando explicação da arquitetura cliente-servidor  | Guilherme Siqueira, Augusto Vilarins, Djorkaeff Alexandre, Ícaro Oliveira |
|16/06/2019 | 0.7 | Organizando itens e adicionando diagramas  | Guilherme Siqueira, Augusto Vilarins, Djorkaeff Alexandre, Ícaro Oliveira |

## Sumário
- [Arquitetura](#arquitetura)
  - [Sumário](#sum%C3%A1rio)
  - [1. Introdução](#1-introdu%C3%A7%C3%A3o)
    - [1.1 Finalidade](#11-finalidade)
    - [1.2 Definições, Acrônimos e Abreviações](#12-defini%C3%A7%C3%B5es-acr%C3%B4nimos-e-abrevia%C3%A7%C3%B5es)
  - [2. Representação da Arquitetura](#2-representa%C3%A7%C3%A3o-da-arquitetura)
    - [2.1 Contexto](#21-contexto)
  - [3. Metas e Restrições de Arquitetura](#3-metas-e-restri%C3%A7%C3%B5es-de-arquitetura)
    - [3.1 Metas](#31-metas)
    - [3.2 Restrições](#32-restri%C3%A7%C3%B5es)
  - [4. Visão dos Casos de Uso](#4-vis%C3%A3o-dos-casos-de-uso)
    - [4.1 Diagrama de Casos de Uso](#41-diagrama-de-casos-de-uso)
      - [Visão Geral de Casos de Uso](#vis%C3%A3o-geral-de-casos-de-uso)
    - [4.2 Atores de Casos de Uso](#42-atores-de-casos-de-uso)
  - [5. Visão de Implementação](#5-vis%C3%A3o-de-implementa%C3%A7%C3%A3o)
    - [5.1 Visão Geral](#51-vis%C3%A3o-geral)
    - [5.2 Cliente-Servidor](#52-cliente-servidor)
    - [5.3 Contêiners](#53-cont%C3%AAiners)
      - [5.3.1 API RESTful utilizando NestJS e TypeScript](#531-api-restful-utilizando-nestjs-e-typescript)
      - [5.3.2 Banco de dados utilizando PostgreSQL](#532-banco-de-dados-utilizando-postgresql)
      - [5.3.3 Aplicativo *mobile* híbrido utilizando React Native](#533-aplicativo-mobile-h%C3%ADbrido-utilizando-react-native)
  - [5. Visão Lógica](#5-vis%C3%A3o-l%C3%B3gica)
    - [5.1 Visão Geral](#51-vis%C3%A3o-geral-1)
      - [5.2 Diagramas de Pacotes e Componentes](#52-diagramas-de-pacotes-e-componentes)
      - [App React com Redux](#app-react-com-redux)
      - [API](#api)
      - [5.3 Diagrama de Classes](#53-diagrama-de-classes)

## 1. Introdução

### 1.1 Finalidade

> "Software architecture is those decisions which are both important and hard to change." - [Martin Fowler](https://www.youtube.com/watch?v=DngAZyWMGR0), 2015


Este documento tem como objetivo especificar, de uma maneira amigável, as decisões relevantes à arquitetura do software. Desde as escolhas de alto nível, decidindo quais componentes iríamos utilizar, passando pelas escolhas de tecnologias e chegando a nível de código.

Este artefato documenta a arquitetura a ser implementada no software e abrangendo assuntos relacionados as **metas e restrições** da arquitetura, visão de **casos de uso**, visão **lógica**, visão de **dados** e **implementação**.

O desenho da arquitetura desse software adotará o modelo **C4: Contexto, Contêiners, Componentes e Código** (para mais informações, foi elaborado um [documento](modelo-c4.md) a parte sobre essa abordagem), mas também é influenciado por outros 
modelos de Documentação de Arquitetura de Software **a depender da necessidade**.

### 1.2 Definições, Acrônimos e Abreviações
Abreviação|Significado
:-:|:-:
|**C4**| Contexo, Contêiners, Componentes e Código
|**API**| Application Programming Interface
|**APP**| Abreviação para Application
|**REST**|Representational State Transfer

## 2. Representação da Arquitetura
A arquitetura geral utilizada no Conosco é uma arquitetura Cliente-Servidor, junto com o modelo N-Camadas. Na API, utiliza-se arquitetura de monolíto, uma vez que o modelo de negócio ainda não estava completamente elucidado, então seguiu-se a orientação [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html), apresentada Martin Fowler.

Já no APP, utiliza-se uma arquitetura orientada a componentes, onde o código escrito em JavaScript é compilado dispositivos iOS e Android.

### 2.1 Contexto
O diagrama de contexto foi desenvolvido com o objetivo de apresentar um panorama geral do Conosco:

![](https://i.imgur.com/Dgun08f.png)

## 3. Metas e Restrições de Arquitetura
### 3.1 Metas
O sistema deve conseguir manter os dados cadastrais de um usuário seguros, além de ter a capacidadde de renderização dos componentes das telas do APP em dispositivos de diferentes resoluções e de ambos os sistemas operacionais mobile propostos, Android e iOS. 

O sistema também deve apresentar uma navegação amigável e agregadora (UI e UX). A usabilidade é uma meta importante e deve possuir atenção especial. Embora a ordem da entre comeponentes no app intefira diretamente nisso, foram criados documentos específicos para orientar a execução dessa meta: documento de [identidade visual](identidade-visual.md), [protótipo](prototipo.md) e um [plano de gamificacao](plano-gamificacao.md).

### 3.2 Restrições
O aplicativo será desenvolvido utilizando o [Expo](https://expo.io/), portanto, segundo a documentação do mesmo, o aplicativo terá suporte apenas para dispositivos que rodem versões igual ou superior ao Android 5 ou iOS 10.

## 4. Visão dos Casos de Uso
Os casos de uso estão listados abaixo, sendo que os casos de uso destacados em negrito são mais significativos para a arquitetura.

* **Logar no Sistema**
  * **Cadastrar no Sistema**
  * **Autenticar Usuário**
* Editar Perfil
* **Manter Hábitos**
  * Criar hábito
  * Editar hábitos
  * Excluir hábitos
* Vincular hábitos
  * Criar hábitos públicos
* Favoritar hábitos
* Favoritar hábitos
* Comentar hábitos
* Participar da Gamificação
  * **Receber Medalhas**
    * Criar Medalhas
  * **Participar de Missões**
    * Criar Missões

Os seguintes diagramas descrevem os casos de uso no sistema.

### 4.1 Diagrama de Casos de Uso
#### Visão Geral de Casos de Uso
![caso_de_uso_geral](https://conosco.github.io/docs/assets/img/arq/diagrama-casos-de-uso2.png)

### 4.2 Atores de Casos de Uso
|**Ator**|**Descrição**
:-:|:-:
|**Usuário**|Pessoas que buscam ajudar outras pessoas e serem ajudadas.

## 5. Visão de Implementação
### 5.1 Visão Geral
A arquitetura do Conosco, como falado anteriormente, segue o modelo de uma arquitetura cliente-servidor com múltiplas camadas. 

### 5.2 Cliente-Servidor
Uma arquitetura cliente-servidor separa o cliente do servidor, sendo interligados entre si utilizando uma rede de computadores. No Conosco, separou-se em dois repositórios, sendo um para o cliente e outro para o servidor, sendo a comunicação entre eles feita através de requisições HTTP utilizando o padrão arquitetural REST no servidor. 

### 5.3 Contêiners
O diagrama de contêiners auxilia a visualização do sistema componentizado por contêiners: uma unidade implementável que executa código ou armazena dados.

![](https://i.imgur.com/mN5LDJE.png)

Antes de formular o diagrama, porém, foi preciso escolher as arquiteturas, linguagens, e frameworks/bibliotecas de cada contêiner. É importante ressaltar que foi realizado uma reunião informal para a escolha das arquiteturas, após a definição do contexto.

#### 5.3.1 API RESTful utilizando NestJS e TypeScript

> "O Representational State Transfer (REST) ignora os detalhes da implementação de componente e a sintaxe de protocolo com o objetivo de focar nos papéis dos componentes, nas restrições sobre sua interação com outros componentes e na sua interpretação de elementos de dados significantes." - [Wikipedia](https://pt.wikipedia.org/wiki/REST)

A decisão de utilizar um web service no estilo arquitetural REST foi feita com base na possibilidade de interoperabilidade entre sistemas que é fornecida por ele.

Uma vez que utilizaremos um aplicativo mobile como camada de apresentação, é possível realizar através do REST a comunicação entre ele e a camada serviço.

Para essa camada a linguagem escolhida é o **[TypeScript](https://www.typescriptlang.org/)**, um superset do JavaScript.

O TypeScript adiciona novas funcionalidades ao JS, permitindo assim: a escrita de scripts com a utilização de tipagem estática, orientação a objetos (permitindo a implementação de padrões de forma simples) e a escrita de código com uma sintaxe de fácil compreensão.

Foi escolhido o **[NestJS](http://nestjs.com)** como **framework** para a construção da **API**. Ele foi construído inspirado no framework AngularJS, mas para backend. Segundo seu criador, o NestJS se propõe a resolver um dos maiores problemas do JavaScript moderno: **arquitetura**.

#### 5.3.2 Banco de dados utilizando PostgreSQL

A camada de persistência de dados será feita utilizando o modelo relacional e a tecnologia escolhida foi o [PostgreSQL](https://www.postgresql.org/).

#### 5.3.3 Aplicativo *mobile* híbrido utilizando React Native

O React Native é uma biblioteca moderna que permite acessar a interface e os recursos nativos dos smartphones utilizando JavaScript. Ele permite produzir aplicativos tanto para iOS quanto Android utilizando apenas uma *codebase*.

Para facilitar no processo de desenvolvimento do aplicativo, optou-se por utilizar o [Expo](https://expo.io/), que é um conjunto de ferramentas gratuíto e de código aberto que auxiliam no processo de desenvolvimento de aplicativos, permitindo fácil acesso às API’s nativas do dispositivo iOS ou Android sem necessitar instalar qualquer dependência ou alterar código nativo.

Também optou-se por utilizar o [Redux](https://conosco.github.io/docs/#/docs/arquitetura-redux), que é um framework JavaScript que funciona como um contêiner de estados, pois há diversos componentes que há a necessidade de modificação de estados de forma relativa.

## 5. Visão Lógica
### 5.1 Visão Geral
As principais classes do ponto de vista da arquitetura do software e as implementações das funcionalidades são divididas pacotes que representam as camadas da aplicação. A divisão em pacotes está representada no diagrama abaixo.


#### 5.2 Diagramas de Pacotes e Componentes

#### App React com Redux
![Diagrama de pacotes](https://i.imgur.com/efyfADJ.png)

#### API

![Diagrama de pacotes](https://imgur.com/2NttDgP.png)

Dentro de cada modulo, existem os componentes destes.

![Diagrama de pacotes-componente](https://imgur.com/maSLBnB.png)

#### 5.3 Diagrama de Classes

![Diagramas de classes](https://i.imgur.com/uboO0oA.png)