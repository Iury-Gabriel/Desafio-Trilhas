let frase = prompt("Digite uma frase: ");
let palavras = frase.split(" ");

console.log(`A frase tem ${palavras.length} ${palavras.length === 1 ? "palavra" : "palavras"}.`)