## Exercício React elements JSX

Inicialmente criamos um nono Workspace e instalamos tudo que precisava.

em seguida criamos 3 componentes sendo eles:

- Header.js.
- TaskContainer.jsx
- Task.jsx

o Header e responsavel pela parte de cima do site onde exibimos o titulo e em seguida o TaskContainer/Task para armazenar os elementos e exibir no site.

<img alt="Imagem do site" src="./public/img/Telainicial.png" width="100%">

# Explicação das alteraçoes feitas:

adicinei o css no app.css para adicionar estilo a Lista de Tarefas

fiz um botao separado em na pasta components (Button.js) para melhorar a modularidade.
Ele recebe via props:
onClick: A função toggleTaskView para alternar o estado.
isShowingAll: O estado atual para exibir o texto correto no botão.

### Foi adicionado o estado todasTarefas no TaskContainer para controlar a exibição das tarefas.

- true: Exibe todas as tarefas da lista.
- false: Exibe apenas as tarefas que forem marcadas como importante.

Quando todasTarefas é true, mostra todas.
Quando é false, filtra as tarefas usando filter e include onde escolhi a palavra " Importantes" para ele filtar.

Sempre que o usuario quiser marcar uma anotaçao como importante ele tera que escrever no titulo como mostrado nas imagens seguintes...

## Tela inicial da Lista de Tarefas

<img alt="Imagem do site" src="./public/img/Telainicial2.png" width="100%">

## Tela das listas marcadas como importantes assim que clicado no botao

<img alt="Imagem do site" src="./public/img/Telaimportantess.png" width="100%">


## Atualizaçoes feita

foi adicionado o botao de contar
<img src="./public/img/atualizaçao01.png" width="100%">

foi adicionado o botao o para adicionar a lista de tarefas, os dados da lista acima sao estaticos sem ser adicionado pelo propio usuario.

<img src="./public/img/atualizaçao02.png" width="100%">
