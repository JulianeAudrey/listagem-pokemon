// para comentar uma linha usa (//) //
/* para comentar varias linhas usa (/*) */ 

/* REFATORAR O PROGRAMA => É melhorar o código.

O que precisamos fazer? - quando clicarmos no botão de troca de tema, temos que
alterar a cor do tema da página para as cores do tema claro ou escuro.

- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe
 modo-escuro no body para que os estilos do modo-escuro sejam aplicados e mudar
  imagem para lua.

    - passo 1 - pegar no JS o lemento HTML correspondente ao botão de troca de tema.
    - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body.
    - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de 
    tema.
    - passo 4 - adicionar a classe modo-escuro no body.
    - passo 5 - trocar a imagem do botão de alterar o tema para Lua.
    
    - objetivo 2 - quando clicar no de troca de tema, caso o body já tenha a 
    classe modo-escuro, remover a classe para mudar para o modo-claro e mudar a imagem para o sol.
    - verificar se tem passo 6 
    - passo 6 - remover a classe do modo-escuro do body.
    - passo 7 - trocar a imagem do botão de alterar tema para sol.
    - passo 8 - trocar o botão do tema para o sol */ 

  /* - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe
    modo-escuro no body para que os estilos do modo-escuro sejam aplicados e mudar
  imagem para lua.
      - passo 1 - pegar no JS o lemento HTML correspondente ao botão de troca de tema e guardar 
      uma referencia dele no JS.*/ 

  const botaoAlterarTema = document.getElementById("botao-alterar-tema"); // para criar uma variavel.   

console.log(botaoAlterarTema);

//- passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body.
const body = document.querySelector("body"); // busca direto com uma tag.
const imagemBotaoTrocaDoTema = document.querySelector(".imagem-botao")
//- passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema.
botaoAlterarTema.addEventListener("click",()=>{
      //- passo 6 - remover a classe do modo-escuro do body.
      const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

      body.classList.toggle("modo-escuro"); // => para alternar os temas substituindo o remove e o add.
      if(modoEscuroEstaAtivo) {
        //- passo 7 - trocar a imagem do botão de alterar tema para sol.
        //body.classList.remove("modo-escuro");
        //- passo 8 - trocar o botão do tema para o sol 
        imagemBotaoTrocaDoTema.setAttribute("src", "./imagens/sun.png"); 
      }
        else{
         // body.classList.add("modo-escuro"); substituido pelo toggle

  //- passo 4 - adicionar a classe modo-escuro no body.

//  body.classList.add("modo-escuro"); substituido pelo toggle.

//- passo 5 - trocar a imagem do botão de alterar o tema para Lua.
imagemBotaoTrocaDoTema.setAttribute("src", "./imagens/moon.png");
/*- objetivo 2 - quando clicar no de troca de tema, caso o body já tenha a 
    classe modo-escuro, remover a classe para mudar para o modo-claro e mudar a imagem para o sol.*/


}});


