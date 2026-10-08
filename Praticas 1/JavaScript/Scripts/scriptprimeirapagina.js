const nome = "Joao"; //variavel nao muda (const)
const nome2 = "Pedro";
let idade; //variavel muda (let)
let primeiroNome;
let maioridade = idade >=18;
console.log(typeof nome);

idade = 27
idade2 = idade-10
let mensagem = "Olá " + nome + ".";
let mensagem2 = `Olá ${nome2}. Sua idade é ${idade2} anos!`;

if(maioridade){
    console.log(`Bem-vindo ${nome}!`);
}
else{
    console.log(`${nome}, você não tem a idade necessária!`);
}

/*if(idade >= 18){
    console.log(`Bem-vindo ${nome}!`);
}
else{
    console.log(`${nome}, você não tem a idade necessária!`);
}

if(idade2 >= 18){
    console.log(`Bem-vindo ${nome}!`);
}
else{
    console.log(`${nome2}, você não tem a idade necessária!`);
}*/

console.log(mensagem);
console.log(mensagem2);
//console.log(`Olá ${nome2}. Sua idade é ${idade2} anos!`);