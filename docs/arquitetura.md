
# Arquitetura
| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|29/03/2019 | 0.1 | Adição de Objetivo | Ícaro Oliveira |
|31/03/2019 | 0.8 | Adição de Objetivo, Contexto, Contêiners e Componentes | Ícaro Oliveira |

## Sumário
- [Arquitetura](#arquitetura)
  - [Sumário](#sum%C3%A1rio)
  - [1. Objetivo](#1-objetivo)
  - [2. Contexto](#2-contexto)
  - [3. Contêiners](#3-cont%C3%AAiners)
    - [3.1 Componentes](#31-componentes)
      - [3.1.1 Aplicativo *mobile* híbrido utilizando React Native](#311-aplicativo-mobile-h%C3%ADbrido-utilizando-react-native)
      - [3.1.2 API RESTful utilizando NestJS e TypeScript](#312-api-restful-utilizando-nestjs-e-typescript)
      - [3.1.3 Banco de dados utilizando PostgreSQL](#313-banco-de-dados-utilizando-postgresql)


## 1. Objetivo

> "Software architecture is those decisions which are both important and hard to change." - [Martin Fowler](https://www.youtube.com/watch?v=DngAZyWMGR0), 2015 


Este documento tem como objetivo especificar, de uma maneira amigável, as decisões relevantes à arquitetura do software. Desde as escolhas de alto nível, decidindo quais componentes iríamos utilizar, passando pelas escolhas de tecnologias e chegando a nível de código.

O desenho da arquitetura desse software seguirá o modelo [C4](modelo-c4.md): Contexto, Contêiners, Componentes e Código.

## 2. Contexto
O diagrama de contexto foi desenvolvido com o objetivo de apresentar um panorama geral do Conosco:

![](https://i.imgur.com/Dgun08f.png)

## 3. Contêiners
O diagrama de contêiners auxilia a visualização do sistema componentizado por contêiners: uma unidade implementável que executa código ou armazena dados.

![](https://i.imgur.com/mN5LDJE.png)

Antes de formular o diagrama, porém, foi preciso escolher as arquiteturas,linguagens, e frameworks/bibliotecas de cada contâiner. É importante ressaltar que foi realizado uma reunião informal para a escolha das arquiteturas, após a definição do Contexto.

### 3.1 Componentes

A arquitetura segue um modelo de separação de responsabilidades num "alto nível", dividindo a camada de apresentação (app mobile) da camada de serviço (REST API) e de persistência (Banco de Dados).

#### 3.1.1 Aplicativo *mobile* híbrido utilizando React Native

O React Native é uma biblioteca moderna que permite acessar a interface e os recursos nativos dos smartphones utilizando JavaScript. Ele permite produzir aplicativos tanto para iOS quanto Android utilizando apenas uma *codebase*. 

#### 3.1.2 API RESTful utilizando NestJS e TypeScript

> "O Representational State Transfer (REST) ignora os detalhes da implementação de componente e a sintaxe de protocolo com o objetivo de focar nos papéis dos componentes, nas restrições sobre sua interação com outros componentes e na sua interpretação de elementos de dados significantes." - [Wikipedia](https://pt.wikipedia.org/wiki/REST)

A decisão de utilizar um web service no estilo arquitetural REST foi feita com base na possibilidade de interoperabilidade entre sistemas que é fornecida por ele. 

Uma vez que utilizaremos um aplicativo mobile como camada de apresentação, é possível realizar através do REST a comunicação entre ele e a camada serviço. 

Para essa camada a linguagem escolhida é o **[TypeScript](https://www.typescriptlang.org/)**, um superset do JavaScript.

O TypeScript adiciona novas funcionalidades ao JS, permitindo assim: a escrita de scripts com a utilização de tipagem estática, orientação a objetos (permitindo a implementação de padrões de forma simples) e a escrita de código com uma sintaxe de fácil compreensão.

Foi escolhido o **[NestJS](http://nestjs.com)** como **framework** para a construção da **API**. Ele foi construído inspirado no framework AngularJS, mas para backend. Segundo seu criador, o NestJS se propõe a resolver um dos maiores problemas do JavaScript moderno: **arquitetura**.

#### 3.1.3 Banco de dados utilizando PostgreSQL

A camada de persistência de dados será feita utilizando o modelo relacional e a tecnologia escolhida foi o [PostgreSQL](https://www.postgresql.org/).