var novasPerguntas = []
//localStorage.setItem('bdPerguntas', JSON.stringify(novasPerguntas) )
novasPerguntas = JSON.parse(localStorage.getItem('bdPerguntas'))

if (novasPerguntas == null) {
    novasPerguntas = []
}
var pontuacao = 0
var respostaCerta = ""
var questaoSorteada
var listaSorteadas = []

function exibir() {
    if (novasPerguntas.length == listaSorteadas.length) {
        alert('Perguntas finalizadas')
        localStorage.setItem  ('pontosdoJogador', pontuacao)
        location.href='final.html'
        return false
    }

    do {
        questaoSorteada = parseInt(Math.random() * novasPerguntas.length)
    } while (listaSorteadas.indexOf(questaoSorteada) != -1)
    listaSorteadas.push(questaoSorteada)



    document.getElementById("exibirPergunta").innerHTML = novasPerguntas[questaoSorteada].perguntas
    document.getElementById("link").src = novasPerguntas[questaoSorteada].imagem
    document.getElementById("btn1").innerHTML = novasPerguntas[questaoSorteada].respostas1
    document.getElementById("btn2").innerHTML = novasPerguntas[questaoSorteada].respostas2
    document.getElementById("btn3").innerHTML = novasPerguntas[questaoSorteada].respostas3
    document.getElementById("btn4").innerHTML = novasPerguntas[questaoSorteada].respostas4
    respostaCerta = novasPerguntas[questaoSorteada].respostacerta

}

function resposta(chute) {
    if (respostaCerta == chute) {
        alert('Resposta certa')
        pontuacao = pontuacao + 2
    } else {
        alert('Resposta errada')
        pontuacao = pontuacao - 1
    }
    document.getElementById("pontos").innerHTML = pontuacao
    exibir()
}
