var novasPerguntas = JSON.parse(localStorage.getItem('bdPerguntas')) || bancoPerguntas()

function adicionarValor(){
    var perguntas = document.getElementById('pergunta').value 
    var link = document.getElementById('link').value
    var respostas1 = document.getElementById('respostas1').value
    var respostas2 = document.getElementById('respostas2').value
    var respostas3 = document.getElementById('respostas3').value
    var respostas4 = document.getElementById('respostas4').value
    var respostaCorreta = document.getElementById('opcoes').value

    var opcoes = {
        perguntas: perguntas,
        imagem: link,
        respostas1: respostas1 ,
        respostas2: respostas2,  
        respostas3: respostas3 ,
        respostas4: respostas4 ,
        respostacerta: respostaCorreta
    }

    novasPerguntas.push(opcoes)
    localStorage.setItem('bdPerguntas', JSON.stringify(novasPerguntas) )
    alert('Filme adicionado com sucesso')
}
function carregarImagem(){

    for(var i in novasPerguntas)
    document.getElementById("link").src = novasPerguntas[i].link
}

function bancoPerguntas(){
    var dados = 
    [
        {
           "perguntas":"quantos filmes da barbie existem?",
           "imagem":"https://ci4.googleusercontent.com/proxy/5NU6ItVf0HN7xp11U2WxbAGXwXxGKr8aGZzh7cyrerFYaEGuift9DLZaXUn1qqfwfmxd6kW94-maZiOO_agJ4Wq-dmi8rlDIGUL-LY1tV5RPywyBjMMJ_xuBecTE5vyeP_1HJ8qWO6WrHc4UuclKaK8Pec2lo16Otq1uYw=s0-d-e1-ft#https://mcusercontent.com/deee0143a0f21406f71d49a04/_compresseds/2085cb0e-a099-4b70-94b6-8c3ffe312447.jpg",
           "respostas1":"28",
           "respostas2":"96",
           "respostas3":"100",
           "respostas4":"38",
           "respostacerta":"resposta4"
        },
        {
           "perguntas":"Em que ano foi lançado o filme Titanic",
           "imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DRLuEAjllnzGuUNS8DENI8T8DRB7SSJJ3esy9sVRsA&s",
           "respostas1":"1998",
           "respostas2":"1997",
           "respostas3":"1996",
           "respostas4":"1999",
           "respostacerta":"resposta1"
        },
        {
           "perguntas":"Quntos filmes a saga Harry potter tem?",
           "imagem":"",
           "respostas1":"8",
           "respostas2":"7",
           "respostas3":"9",
           "respostas4":"10",
           "respostacerta":"resposta1"
        },
        {
           "perguntas":"Quem era o verdadeiro vilão da série Wandinha",
           "imagem":"",
           "respostas1":"Tyler",
           "respostas2":"Xavier",
           "respostas3":"Marilyn",
           "respostas4":"Enid",
           "respostacerta":"resposta1"
        },
        {
           "perguntas":"Quem era o verdadeiro vilão da série Wandinha",
           "imagem":"https://cafecomnerd.com.br/wp-content/uploads/2022/11/Wandinha-Serie-com-Jenna-Ortega-na-Netflix-do-diretor-Tim-Burton-Analise-sem-Spoiler-por-Ana-Show.jpg",
           "respostas1":"Tyler",
           "respostas2":"Xavier",
           "respostas3":"Marilyn",
           "respostas4":"Enid",
           "respostacerta":"resposta1"
        },
        {
           "perguntas":"Qual destes apelidos não pertencem á modern family?",
           "imagem":"",
           "respostas1":"Dunphy",
           "respostas2":"Pritchett",
           "respostas3":"Sullivan",
           "respostas4":"Tucker",
           "respostacerta":"resposta3"
        },
        {
           "perguntas":"Qual destes apelidos não pertencem á modern family?",
           "imagem":"",
           "respostas1":"Dunphy",
           "respostas2":"Pritchett",
           "respostas3":"Sullivan",
           "respostas4":"Tucker",
           "respostacerta":"resposta3"
        },
        {
           "perguntas":"Quantas temporadas tem Grey's Anatomy",
           "imagem":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtofmyYCoR4K2Rj_ZFzpFORn4ndJTLw6gjOW-i8PDD3An-EQjmO2F6hPMFA&s",
           "respostas1":"24",
           "respostas2":"19",
           "respostas3":"17",
           "respostas4":"16",
           "respostacerta":"resposta2"
        },
        {
           "perguntas":"Quantas temporadas tem Orange Is The New Black",
           "imagem":"",
           "respostas1":"9",
           "respostas2":"10",
           "respostas3":"7",
           "respostas4":"1",
           "respostacerta":"resposta3"
        },
        {
           "perguntas":"Em que temporada o Dean foi para o inferno na série Supernatural",
           "imagem":"",
           "respostas1":"2°Temporal",
           "respostas2":"4°Temporada",
           "respostas3":"10°Temporada",
           "respostas4":"3°Temporada",
           "respostacerta":"resposta3"
        },
        {
           "perguntas":"Por que a Macarena de Vis a Vis foi presa?",
           "imagem":"https://s.aficionados.com.br/imagens/tudo-sobre-vis-a-vis-a-serie-espanhola-da-netflix_f.jpg",
           "respostas1":"Roubo",
           "respostas2":"Estelionato",
           "respostas3":"Assasinato",
           "respostas4":"Fraude",
           "respostacerta":"resposta4"
        },
        {
           "perguntas":"Porque a Cristina é hospitalizada na segunda temporada de Anatomia de grey?",
           "imagem":"",
           "respostas1":"Gravidez ectópia",
           "respostas2":"Estresse pós traumatico",
           "respostas3":"Problemas intestinais",
           "respostas4":"Trombose",
           "respostacerta":"resposta1"
        },
     ]
     localStorage.setItem('bdPerguntas', JSON.stringify(dados) )
        return dados
}
function abrirPorta(){
   location.href='jogador.html'
}