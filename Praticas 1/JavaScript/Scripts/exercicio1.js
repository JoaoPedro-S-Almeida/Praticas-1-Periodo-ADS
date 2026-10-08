let botao1 = document.querySelector("#botao1");
botao1.style.background = "blue";
let botaoApertado = false;
let contagemClick = 0

botao1.addEventListener("mouseover",trocaVerde);
botao1.addEventListener("mouseout",trocaAzul);
botao1.addEventListener("click",trocaVermelho);
/*  botao1.addEventListener("mouseover", e =>{  #funcao lambda
    botao1.style.background = "green";
}) */

function trocaVerde(){
    if(botaoApertado === false){
        botao1.style.background = "green";
        botao1.style.color = "white"
    };
}

function trocaAzul(){
    if(!botaoApertado === false) //!-> nao
    botao1.style.background = "blue";
}

function trocaVermelho(){
    contagemClick ++;
    if(contagemClick >=10){
    botao1.style.background = "red";
    botao1.innerHTML = "APERTADO!";
    botaoApertado = true;
    };
}

