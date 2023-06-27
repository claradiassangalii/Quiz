var nome = localStorage.getItem('nomedoJogador')
var pontuacao = localStorage.getItem('pontosdoJogador')

function Final(){
    document.getElementById('Nome').innerHTML = `${nome}`
    document.getElementById('pontuacao').innerHTML = `${pontuacao}`
}