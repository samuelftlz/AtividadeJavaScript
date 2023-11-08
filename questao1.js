const lado1 = 5;
const lado2 = 6;
const lado3 = 7;

const s = (lado1 + lado2 + lado3) / 2;

const area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));

console.log("A área do triângulo é: " + area);
