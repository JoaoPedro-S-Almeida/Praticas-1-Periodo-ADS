let texto = document.querySelector("#prg1"); //id com #

texto.addEventListener("click",mudaTexto);
texto.addEventListener("mouseover",mudaBack);

function mudaTexto(){
    texto.innerHTML="Esse parágrafo mudou!";
    texto.style.background="green";
}

function mudaBack(){
    texto.style.background="blue";
}