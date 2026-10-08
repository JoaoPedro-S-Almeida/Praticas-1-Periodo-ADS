const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
let resultado = document.querySelector("#resultado");

seletor.addEventListener("change",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);

function calcular(){
    
    if(campo1.value != '' && campo2.value != ''){
        
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
}