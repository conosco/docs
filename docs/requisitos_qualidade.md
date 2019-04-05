# Requisitos de Qualidade

| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|04/04/2019 | 0.1 | Iniciação do Documento | João Pedro Martins |

## Sumário
[1. Introdução](#_1introdução) 
[1.1 Finalidade](#_11-finalidade)
[1.2 Tipos de Requisitos](#_12-tipos-de-requisitos)


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

# 2. Requisitos do produto

### 2.1 Requisitos de facilidade de uso:
| **Requisito** | **Descrição**|
|---|---|
|RNF 01|O aplicativo deverá ser disponibilizado em língua portuguesa (Brasil)|
|RNF 02|O aplicativo deverá possuir design responsivo adequando-se ao aparelho em que é utilizado de forma correta|
|RNF 03|A interação do usuário com o aplicativo deverá ser intuitiva|
|RNF 04| Não deverá existir a necessidade de treinamento preparatório para o uso do aplicativo|
|RNF 05| O aplicativo deverá possuir prevenção e notificação de erros, caso o preenchimento de dados for incorreto |

### 2.2  Requisitos de confiabilidade:
| **Requisito** | **Descrição**|
|---|---|
|RNF 06|O aplicativo deve estar em constante análise, a fim de que as informações do usuário não sejam acessadas do banco de dados responsáveis por informações sensíveis |
|RNF 07| Não deverá ocorrer erros nas informações contidas na base de dados que serão exibidos |

### 2.3 Requisitos de portabilidade:
| **Requisito** | **Descrição**|
|---|---|
|RNF 08|O aplicativo deverá ter uma versão para Android. (Android 4.1 ou superior)|
|RNF 09| O aplicativo deverá ter uma versão IOS. (iOS 8.0 ou superior)|