# Crud4

Instruções para uso:
-

- Fazer git clone do folder Crud4 na branch master.

- Abrir index.html no navegador (recomendado usar plug-in "Live Server" disponivel no Visual Studio Code.


Introdução
-


Crud básico feito usando html, angularjs e bootstrap com o próposito de aprendizado e prova de conceito para possível estágio.

Funcionalidade já implementadas 
-
- Listagem de materiais que apresenta nome e valore numéricos referentes a linha, tipo e produto.
- Botão "Novo" que abre o form "Novo Material" no qual o usuário pode adicionar items à lista.
- Botão "Editar" que abre o form "Editar Material" no qual o usuário recebe todas as informações do material escolhido e pode altera-las.
- Botão "Excluir" que abre uma modal de confirmação que apresenta o nome do material que o usuário deseja excluir e um botão para prosseguir em apagar o material ou cancelar a operação.
- Ao fechar o form  "Novo Material" sem salvar, todas os campos preenchidos são esvaziados e retornados ao estado de prestine e untouched.
- Os form fazem validação e não permitem o submit(Salvar) caso os campos não estejam devidamente preenchidos.
- Dropdown de produtos é populado por uma array.
- A população da lista é feita por uma array que substitui o banco de dados por enquanto.
- Display de linha, tipo e produto pelo nome.

Funcionalidades em desenvolvimento
-
- Integração com o banco de dados.
- Arrumar botão editar. (desativar two way binding)

