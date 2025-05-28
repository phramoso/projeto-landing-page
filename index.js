var setaDireita = window.document.getElementById("seta-direita")
var Samantha = window.document.getElementById("samantha")
var Leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")    

function RolarParaDireita(){
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    Samantha.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex : margin-top:55px"
    setaEsquerda.style = "display:none"

}