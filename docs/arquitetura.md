
# Arquitetura
| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|29/03/2019 | 0.1 | Adição de Objetivo | Ícaro Oliveira |
|31/03/2019 | 0.2 | Adição de Objetivo, Contexto, Contêiners e Componentes | Ícaro Oliveira |
|04/04/2019 | 0.3 | Adição de Pipeline | Augusto Vilarins, Djorkaeff Alexandre, Guilherme Siqueira, Ícaro Oliveira |
|16/04/2019 | 0.4 | Colocando documento no template e refatorando seções 1 e 2  | Guilherme Siqueira, Augusto Vilarins, Djorkaeff Alexandre, Ícaro Oliveira |

## Sumário
- [Arquitetura](#arquitetura)
  - [Sumário](#sum%C3%A1rio)
  - [1. Introdução](#1-introdução)
    - [1.1 Finalidade](#11-finalidade)
  - [2. Representação da Arquitetura](#2-Representação-da-Arquitetura)
      - [2.1 Contexto](#21-contexto)
      - [2.2 Contêiners](#22-cont%C3%AAiners)
      - [2.3 Componentes](#23-componentes)
        - [2.3.1 Aplicativo *mobile* híbrido utilizando React Native](#231-aplicativo-mobile-h%C3%ADbrido-utilizando-react-native)
        - [2.3.2 API RESTful utilizando NestJS e TypeScript](#232-api-restful-utilizando-nestjs-e-typescript)
        - [2.3.3 Banco de dados utilizando PostgreSQL](#233-banco-de-dados-utilizando-postgresql)
        - [2.3.4 Pipeline](#234-pipeline)

## 1. Introdução

### 1.1 Finalidade

> "Software architecture is those decisions which are both important and hard to change." - [Martin Fowler](https://www.youtube.com/watch?v=DngAZyWMGR0), 2015 


Este documento tem como objetivo especificar, de uma maneira amigável, as decisões relevantes à arquitetura do software. Desde as escolhas de alto nível, decidindo quais componentes iríamos utilizar, passando pelas escolhas de tecnologias e chegando a nível de código.

### 1.2 Escopo
 <p align = "justify">Este artefato documenta a arquitetura a ser implementada no software e abrangendo assuntos relacionados as metas e restrições da arquitetura, visão de casos de uso, visão lógica e implementação.</p>
 <p align = "justify">O desenho da arquitetura desse software seguirá o modelo [C4](modelo-c4.md): Contexto, Contêiners, Componentes e Código.</p>

### 1.3 Definições, Acrônimos e Abreviações
Abreviação|Significado
:-:|:-:
|**C4**| Contexo, Contêiners, Componentes e Código
|**API**| Application Programming Interface
|**APP**| Abreviação para Application 

### 1.4 Referências
<p align = "justify"> Este documento faz referência aos seguintes links e  documentos: </p>

https://martinfowler.com/bliki/MonolithFirst.html

* **Modelo C4**
* https://c4model.com/#

### 1.5 Visão Geral
<p align = "justify">Este documento detalha as características de arquitetura do software a ser desenvolvido, suas tecnologias e padrões, além dos requisitos do projeto e visão de dados.</p>

## 2. Representação da Arquitetura
A arquitetura geral utilizada no Conosco é uma arquitetura Cliente-Servidor, com n-camadas. Na API,foi utilizada arquitetura de monolíto. Uma vez que o modelo de negócio ainda não estava completamente elucidado, então seguiu-se a orientação [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html), apresentada Martin Fowler. 

Já no APP, utiliza-se uma arquitetura orientada a componentes, onde o código escrito em JavaScript é compilado tanto para dispositivos iOS tanto para dispositivos Android. 

### 2.1 Contexto
O diagrama de contexto foi desenvolvido com o objetivo de apresentar um panorama geral do Conosco:

![](https://i.imgur.com/Dgun08f.png)

### 2.2. Contêiners
O diagrama de contêiners auxilia a visualização do sistema componentizado por contêiners: uma unidade implementável que executa código ou armazena dados.

![](https://i.imgur.com/mN5LDJE.png)

Antes de formular o diagrama, porém, foi preciso escolher as arquiteturas,linguagens, e frameworks/bibliotecas de cada contâiner. É importante ressaltar que foi realizado uma reunião informal para a escolha das arquiteturas, após a definição do contexto.

### 2.3 Componentes

A arquitetura segue um modelo de separação de responsabilidades num "alto nível", dividindo a camada de apresentação (app mobile) da camada de serviço (REST API) e de persistência (Banco de Dados).

#### 2.3.1 Aplicativo *mobile* híbrido utilizando React Native

O React Native é uma biblioteca moderna que permite acessar a interface e os recursos nativos dos smartphones utilizando JavaScript. Ele permite produzir aplicativos tanto para iOS quanto Android utilizando apenas uma *codebase*. 

#### 2.3.2 API RESTful utilizando NestJS e TypeScript

> "O Representational State Transfer (REST) ignora os detalhes da implementação de componente e a sintaxe de protocolo com o objetivo de focar nos papéis dos componentes, nas restrições sobre sua interação com outros componentes e na sua interpretação de elementos de dados significantes." - [Wikipedia](https://pt.wikipedia.org/wiki/REST)

A decisão de utilizar um web service no estilo arquitetural REST foi feita com base na possibilidade de interoperabilidade entre sistemas que é fornecida por ele. 

Uma vez que utilizaremos um aplicativo mobile como camada de apresentação, é possível realizar através do REST a comunicação entre ele e a camada serviço. 

Para essa camada a linguagem escolhida é o **[TypeScript](https://www.typescriptlang.org/)**, um superset do JavaScript.

O TypeScript adiciona novas funcionalidades ao JS, permitindo assim: a escrita de scripts com a utilização de tipagem estática, orientação a objetos (permitindo a implementação de padrões de forma simples) e a escrita de código com uma sintaxe de fácil compreensão.

Foi escolhido o **[NestJS](http://nestjs.com)** como **framework** para a construção da **API**. Ele foi construído inspirado no framework AngularJS, mas para backend. Segundo seu criador, o NestJS se propõe a resolver um dos maiores problemas do JavaScript moderno: **arquitetura**.

#### 2.3.3 Banco de dados utilizando PostgreSQL

A camada de persistência de dados será feita utilizando o modelo relacional e a tecnologia escolhida foi o [PostgreSQL](https://www.postgresql.org/).

#### 2.3.4 Pipeline 
![pipeline](https://cdn.discordapp.com/attachments/557709025265975327/562049330308055040/pipeline_conosco.png)

## 3. Metas e Restrições de Arquitetura
### 3.1 Metas

### 3.2 Restrições

## 4. Visão dos Casos de Uso

### 4.1 Diagrama de Casos de Uso

### 4.2 Atores de Casos de Uso

### 4.3 Descrições de Casos de Uso

## 5. Visão Lógica
