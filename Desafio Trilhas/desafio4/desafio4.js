let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
let primos = [];

for(let numero of numeros) {
    let Primo = true;
    for(let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor === 0) {
            Primo = false;
            break;
        }
    }
    if(Primo) {
        primos.push(numero);
    }
}

console.log(primos)