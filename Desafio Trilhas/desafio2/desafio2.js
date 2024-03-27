let numeros = [15, 8, 90, 75, 102, 6, 2];
let maior = numeros[0];
let menor = numeros[0];

for(let numero of numeros) {
    if(numero > maior) {
        maior = numero;
    }
    if(numero < menor) {
        menor = numero;
    }
}

console.log(maior);
console.log(menor);