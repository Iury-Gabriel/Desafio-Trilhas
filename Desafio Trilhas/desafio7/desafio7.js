let precoItens = [2.50, 3.75, 1.99];
let precoTotal = 0;

for(let precoItem of precoItens) {
    precoTotal += precoItem;
}

console.log(`O preço total da compra foi R$${precoTotal}`)