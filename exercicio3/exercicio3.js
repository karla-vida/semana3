let numero1 = prompt("qual é o valor do primeiro número?");
let numero2 = prompt("qual é o valor do segundo número?");

let number1 = parseInt(numero1);
let number2 = parseInt(numero2);


let operacao = prompt("Qual operação quer fazer?")
if (operacao === "+") {
    console.log(number1+number2);  
}
   else if (operacao === "-") {
    console.log(number1-number2);
   }
   else if (operacao === "*") {
    console.log(number1*number2);
   }
   else if (operacao === "/") {
    console.log(number1/number2);
   }
 else {
    console.log("não válido");
}