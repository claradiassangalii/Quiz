
function entrar1(){

    var nome = document.getElementById("nome1").value
     localStorage.setItem ('nomedoJogador', nome)
     location.href = "jogador.html"
     alert ('Nome cadastrado com sucesso') 
}