function calcularMedia(num1, num2) {
    if (num1 >= 0 && num1 <= 10 && num2 >= 0 && num2 <= 10) {
      const media = (num1 + num2) / 2;
      console.log("A média é: " + media);
    } else {
      let mensagem = "";
      if (num1 < 0 || num1 > 10) {
        mensagem += "Valor inválido: " + num1 + " ";
      }
      if (num2 < 0 || num2 > 10) {
        mensagem += "Valor inválido: " + num2;
      }
      console.log(mensagem);
    }
  }
  
  calcularMedia(5, 8); 
  calcularMedia(12, 3);
  calcularMedia(7, -2); 
  calcularMedia(12, -2); 
  