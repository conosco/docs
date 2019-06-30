# Modelo C4

| **Data** | **Versão** | **Descrição** | **Autor(es)** |
|---|---|---|---|
|29/03/2019 | 1.0 | Adição da Introdução e desenvolvimento | Ícaro Oliveira |
|29/06/2019 | 1.1 | Pequena melhoria do arquivo | Ícaro Oliveira |


## Sumário
- [Modelo C4](#Modelo-C4)
  - [Sumário](#Sum%C3%A1rio)
  - [1. Introdução](#1-Introdu%C3%A7%C3%A3o)
  - [2. Uma nova esperança](#2-Uma-nova-esperan%C3%A7a)
  - [C4 no Conosco](#C4-no-Conosco)

## 1. Introdução

> "Working software over comprehensive documentation" - Agile Manifesto

A frase acima é tipicamente mal-interpretada como: "não escreva documentação". Embora a cultura de desenvolvimento ágil esteja em expansão desde seu surgimento, a compreensão de detalhes de desenvolvimento, como tecnologias e comportamento do sistema não deve passar em branco. 

Porém, é necessário que ela se adapte rápido as mudanças, acompanhando a compreensão do time sobre o problema conforme o desenvolvimento avança.

## 2. Uma nova esperança

Criado por [Simon Brown](simonbrown.je), o [modelo C4](https://c4model.com/#) foi concebido como uma maneira de ajudar as equipes de desenvolvimento de software a descrever e comunicar a arquitetura de software, tanto durante sessões de design iniciais quanto documentando retrospectivamente uma base de código existente. 

> "Perhaps, in the race for agility, many software development teams have lost the ability to communicate visually." - Simon Brown


Ele foi inspirado na Unified Modeling Language e no modelo 4+1 para arquitetura de software. Em resumo, você pode pensar no modelo C4 como uma versão simplificada dos conceitos subjacentes, projetada para (1) facilitar aos desenvolvedores de software descrever e entender como um sistema de software funciona e (2) minimizar a lacuna entre o modelo/arquitetura do software e o código fonte.

Em uma de suas palestras, o autor exemplifica o C4 uma maneira de criar mapas do seu código, em vários níveis de detalhes, da mesma forma que você usa algo como o Google Maps para ampliar ou reduzir uma área em que está interessado.

![](https://i.imgur.com/bUs4apf.png)

Essa idea de níveis de abstrações se mantêm em projetos de software. São eles: contexto, contêiners, componenetes e código.

## C4 no Conosco

No nosso projeto, conseguimos atingir os quatro níveis de abstração. O ultimo sendo apoiado por diagramas de entidade-relacionamento, diagramas lógicos, de sequência etc. 

A nível de código, foram geradas documentações a partir do Swagger e Doctoc, para a API.