## Exercício React elements JSX

Inicialmente criamos um nono Workspace e instalamos tudo que precisava.

em seguida criamos 3 componentes sendo eles:

- Header.js.
- TaskContainer.jsx
- Task.jsx

o Header e responsavel pela parte de cima do site onde exibimos o titulo e em seguida o TaskContainer/Task para armazenar os elementos e exibir no site.

<img alt="Imagem do site" src="./public/img/Telainicial.png" width="100%">

# Explicação das alteraçoes feitas:

- foi adicioando CSS no app.css para adicionar estilo a Lista de Tarefas

fiz um botão separado em na pasta components (Button.js) para melhorar a modularidade.
Ele recebe via props:
onClick: A função toggleTaskView para alternar o estado.
isShowingAll: O estado atual para exibir o texto correto no botão.

### Foi adicionado o estado showAllTasks no TaskContainer para controlar a exibição das tarefas.

- true: Exibe todas as tarefas da lista.
- false: Exibe apenas as tarefas que forem marcadas como importante.

Quando showAllTasks é true, mostra todas.
Quando é false, filtra as tarefas usando filter e includes.

## Tela inicial da Lista de Tarefas

<img alt="Imagem do site" src="./public/img/Telainicial2.png" width="100%">

## Tela das listas marcadas como importantes assim que clicado no botao

<img alt="Imagem do site" src="./public/img/Telaimportantess.png" width="100%">
