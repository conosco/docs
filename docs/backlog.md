# Backlog do produto

## Épicos

| Identificador | Épicos |
|:-:|-|
|E1|Gerenciar dados|
|E2|Gerenciar dashboard|
|E3|Experiência de usuário|

## Features

|Identificador|Feature|
|:-:|-|
|E01F01|Manter usuário|
|E01F02|Manter hábito|
|E01F03|Manter Dicas|
|E01F04|Correlacionar Habitos e Dicas  |
|E01F05|Correlacionar dados da gamificação|
|E02F06|Correlacionar usuários com hábitos|
|E02F07|Manter Dashbord de eventos |
|E03F08|Aplicar Sistema de pontuação da gamificação |
|E03F09|Correlacionar Ambientação do aplicativo com o tema da gamificação |
|E03F10|Aplicar Sistema de recompensas e medalhas |



## Estórias de Usuário

| Feature| Identificador | Estória | Pontuação | Status |
|-| :---: | --- |  :---: | :---: |
| F01 | <b><i>US01</i></b> | Eu, como usuário, desejo me cadastrar no sistema    | |  |
| F01 | <b><i>US02</i></b> | Eu, como usuário, desejo fazer login com o facebook |  |  |
| F01 | <b><i>US03</i></b> | Eu, como usuário, desejo fazer login no sistema | | |
| F01 | <b><i>US04</i></b> | Eu, como usuário, desejo atualizar meus dados cadastrais |  |  |
| F02 | <b><i>US05</i></b> | Eu, como usuário, desejo cadastrar um novo hábito no sistema | | |
| F02 | <b><i>US06</i></b> | Eu, como usuário, desejo editar as informações de um hábito que eu criei | | |
| F02 | <b><i>US07</i></b> |Eu, como usuário, desejo desejo excluir um hábito que eu criei | | |
| F03 | <b><i>US08</i></b> | Eu, como usuário, desejo comentar uma nova dica em algum hábito que eu esteja vinculado  | |  |
| F03 | <b><i>US09</i></b> | Eu, como usuário, desejo comentar uma nova dica em algum hábito que eu esteja vinculado  | |  |
| F04 | <b><i>US10</i></b> | Eu, como usuário, desejo dar *upvote* nas dicas que me forem úteis  |  |  |
| F05 | <b><i>US11</i></b> | Eu, como usuário, desejo vizualizar a minha *barra de progresso* no aplicativo  | | |
| F06 | <b><i>US12</i></b> | Eu, como usuário, desejo me vincular a um hábito  | |  |
| F06 | <b><i>US13</i></b> | Eu, como usuário, desejo favoritar um hábito  | |  |
| F07 | <b><i>US14</i></b> | Eu, como usuário, desejo vizualizar um hábito específico.  | |  |
| F07 | <b><i>US15</i></b> | Eu, como usuário, desejo vizualizar os comentários de um hábito | |  ||
| F08 | <b><i>US16</i></b> | Eu, como usuário, desejo vizualizar minhas estatísticas da gamificação | |  ||
| F08 | <b><i>US17</i></b> | Eu, como usuário, desejo me fidelizar a um hábito para receber recompensas | |  ||
| F09 | <b><i>US18</i></b> | Eu, como usuário, desejo ser guiado por um tutorial quando necessário | |  ||
| F09 | <b><i>US19</i></b> | Eu, como usuário, desejo ser desafiado a realizar minhas atividades | |  ||
| F09 | <b><i>US20</i></b> | Eu, como usuário, desejo acumular XP enquanto finalizar minhas atividades | |  ||
| F10 | <b><i>US21</i></b> | Eu, como usuário, desejo receber emblemas e certificados de conquista após executar certas tarefas | |  ||
| F10 | <b><i>US22</i></b> | Eu, como usuário, desejo receber medalhas por níveis alcançados | |  ||

## Estórias Técnicas

| Feature | Identificador | Estória | Pontuação | Status |
| :-: | :---: | --- |  :---: | :---: |
| F01 | <b><i>TS01</i></b> | Eu como desenvolvedor desejo Importar dados da Steam/SteamSpy API | 2 | &#10004;|
| F01 | <b><i>TS02</i></b> | Eu como desenvolvedor desejo criar models da Steam/Steamspy API | 2 | &#10004; |
| F02 | <b><i>TS03</i></b> | Eu como desenvolvedor desejo importar dados da Youtube API | 8 | &#10004; |
| F02 | <b><i>TS04</i></b> | Eu como desenvolvedor desejo criar models da Youtube API | 2 | &#10004;|
| F03 | <b><i>TS05</i></b> | Eu como desenvolvedor desejo importar dados da Twitch API | 2 | &#10004; |
| F03 | <b><i>TS06</i></b> | Eu como desenvolvedor desejo criar models da Twitch API | 2 | &#10004; |
| F04 | <b><i>TS07</i></b> | Eu como desenvolvedor desejo criar models que comportam multiplos modelos | 3 | &#10004; |
| F04 | <b><i>TS08</i></b> | Eu como desenvolvedor desejo importar dados relacionados | 13 | &#10004; |
| F05 | <b><i>TS09</i></b> | Eu como desenvolvedor desejo atualizar o banco periodicamente | 8 | RELEASE 2  |
| F05 | <b><i>TS10</i></b> | Eu como desenvolvedor desejo guardar histórico de atualizações | 21 | &#x2717; |
| F06 | <b><i>TS11</i></b> | Eu como desenvolvedor desejo integrar crossdata com o metabase | 3 | &#x2717; |
| F07 | <b><i>TS12</i></b> | Eu como desenvolvedor desejo criar uma interface para o dashboard | 3 | &#x2717; |
| F07 | <b><i>TS13</i></b> | Eu como desenvolvedor desejo atualizar automaticamente o dashboard de eventos do usuário | 3 | &#x2717; |
| F07 | <b><i>TS14</i></b> | Eu como desenvolvedor desejo criar testes automatizados para o dashboard | 1 | &#x2717; |
| F09 | <b><i>TS15</i></b> | Eu como desenvolvedor desejo importar dados da IGDB API | 2 | &#10004; |
| F09 | <b><i>TS16</i></b> | Eu como desenvolvedor desejo criar models da IGDB API | 2 | &#10004; |
| F08 | <b><i>TS17</i></b> | Eu como desenvolvedor desejo criar interface para visualização | 5 | &#10004; |
| F09 | <b><i>TS18</i></b> | Eu como desenvolvedor desejo criar interface para visualização | 5 | &#10004; |
| F10 | <b><i>TS19</i></b> | Eu como desenvolvedor desejo converter o desempenho do usuário em recompensas | 3 | &#x2717; |
| F10 | <b><i>TS13</i></b> | Eu como desenvolvedor desejo criar <i>easter eggs</i> como forma de recompensas | 3 | &#x2717; |



## Pontuação Final

| Tipo de Estória | Pontuação Geral |
| :---: | :---: |
| Usuário | 49 |
||+|
| Técnica | 67 |
||=|
| <b><i>Release 1</i></b> | 116 |
