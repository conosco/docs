# Requisitos de Qualidade

| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|04/04/2019 | 0.1 | Iniciação do Documento | João Pedro Martins |

## Sumário
[1. Introdução](#_1introdução) 
&nbsp;&nbsp;[1.1 Finalidade](#_11-finalidade)
&nbsp;&nbsp;[1.2 Tipos de Requisitos](#_12-tipos-de-requisitos)
[2. Requisitos do produto final](#2-requisitos-do-produto-final)
&nbsp;&nbsp;[2.1 Requisitos de facilidade de uso](#_21-requisitos-de-facilidade-de-uso)
[2.2  Requisitos de confiabilidade](#_22-requisitos-de-confiabilidade)
[2.3 Requisitos de portabilidade](#_23-requisitos-de-portabilidade)
[3. Requisitos Organizacionais](#_3-requisitos-organizacionais)
[3.1 Requisitos de padronização](#_31-requisitos-de-padronizacao)
[3.2 Requisitos de implementação](#_32-requisitos-de-implementacao)
[3.3 Requisitos de entrega](#_33-requisitos-de-entrega)
[4.Requisitos Externos](#_4-requisitos-externos)



# 1.Introdução

## 1.1 Finalidade
Este documento tem como objetivo definir e organizar os requisitos de qualidade do sistema. Serão listados os requisitos não-funcionais a cerca do 'Conosco', assim como a sua descrição.

## 1.2 Tipos de Requisitos
![Tipos de Requisitos](/_media/req_nf.jpg)

Os requisitos não-funcionais podem ser classificados em três tipos, sendo eles:
- Requisitos do Produto Final
   - referem-se a como o produto deve comportar-se, ou seja, a sua velocidade de execução, confiabilidade, etc;
- Requisitos Organizacionais
   - relacionam-se à consequência de políticas e procedimentos organizacionais que devem ser seguidos;
- Requisitos Externos
   - estão ligados a fatores externos ao sistema e ao processo de desenvolvimento como a legislação;

# 2. Requisitos do produto final

### 2.1 Requisitos de facilidade de uso:
| **Requisito** | **Descrição**|
|---|---|
|RNF 01|O aplicativo deverá ser disponibilizado em língua portuguesa (Brasil)|
|RNF 02|O aplicativo deverá possuir design responsivo adequando-se ao aparelho em que é utilizado de forma correta|
|RNF 03|A interação do usuário com o aplicativo deverá ser intuitiva|
|RNF 04| Não deverá existir a necessidade de treinamento preparatório para o uso do aplicativo|
|RNF 05| O aplicativo deverá possuir prevenção e notificação de erros, caso o preenchimento de dados for incorreto |

### 2.2  Requisitos de confiabilidade
| **Requisito** | **Descrição**|
|---|---|
|RNF 06|O aplicativo deve estar em constante análise, a fim de que as informações do usuário não sejam acessadas do banco de dados responsáveis por informações sensíveis |
|RNF 07| Não deverá ocorrer erros nas informações contidas na base de dados que serão exibidos |

### 2.3 Requisitos de portabilidade:
| **Requisito** | **Descrição**|
|---|---|
|RNF 08|O aplicativo deverá ter uma versão para Android. (Android 4.1 ou superior)|
|RNF 09| O aplicativo deverá ter uma versão IOS. (iOS 8.0 ou superior)|

## 3. Requisitos Organizacionais

### 3.1 Requisitos de padronização
| **Requisito** | **Descrição**|
|---|---|
|RNF 10|O código deverá seguir uma folha de estilo a ser definida|
|RNF 11| O código deverá ser em inglês |

### 3.2 Requisitos de implementação
| **Requisito** | **Descrição**|
|---|---|
|RNF 12|O software deverá ser desenvolvido utilizando-se da linguagem JavaScript com o framework React-Native como interface|
|RNF 13| Deverá ser utilizada uma API RESTful, com base nas linguagens NestJS e TypeScript|
|RNF 14| O sistema deverá portar 90% de cobertura de testes|

### 3.3 Requisitos de entrega
| **Requisito** | **Descrição**|
|---|---|
|RNF 15|Na priorização das features, são consideradas a qualidade técnica da equipe juntamente com a importância dos requisitos|
|RNF 16| Seguindo a metodologia ágil, o desenvolvimento do aplicativo será realizado por sprints com entregas semanais, e deverá estar disponivel para o usuário até o final do primeiro semestre de 2019|

## 4.Requisitos Externos

### 4.1 Requisitos éticos
| **Requisito** | **Descrição**|
|---|---|
|RNF 17|O sistema não apresentará aos usuários quaisquer dados de cunho privativo |
