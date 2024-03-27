let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");
let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
console.log(`A media das suas três notas é: ${media.toFixed(2)}`);