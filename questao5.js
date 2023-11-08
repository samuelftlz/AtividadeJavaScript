function removeCaractereNaPosicao(str, posicao) {
    
    const caractereRemovido = str[posicao];
    const stringModificada = str.slice(0, posicao) + str.slice(posicao + 1);
  
    console.log("Caractere removido: " + caractereRemovido);
    console.log("String modificada: " + stringModificada);
  }
  
  const minhaString = "Exemplo";
  const posicaoParaRemover = 3;
  removeCaractereNaPosicao(minhaString, posicaoParaRemover);
  