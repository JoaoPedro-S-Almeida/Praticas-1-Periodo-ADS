const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const executar = document.querySelector("#executar");
let resultado = document.querySelector("#resultado");

executar.addEventListener("click",calcular);

function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;

    if(operacao === "Somar")
        resultado.innerHTML = valor1 + valor2;

    if(operacao === "Subtrair")
        resultado.innerHTML = valor1 - valor2;

    if(operacao === "Multiplicar")
        resultado.innerHTML = valor1 * valor2;

    if(operacao === "Dividir")            
       resultado.innerHTML = valor1 / valor2;
}