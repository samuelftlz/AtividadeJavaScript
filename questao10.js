const resultadoParagrafo = document.getElementById("resultado");

const num1 = prompt("Digite o primeiro número:");

const num2 = prompt("Digite o segundo número:");

const numero1 = parseInt(num1);
const numero2 = parseInt(num2);

const soma = numero1 + numero2;

resultadoParagrafo.textContent = soma;