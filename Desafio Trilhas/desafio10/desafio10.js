let string =  "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let letras = string.split(" ").join('');
let contagemMaiusculas = 0;

for(let letra of letras) {
    if(letra === letra.toUpperCase()) {
        contagemMaiusculas++;
    }
}

console.log(`A string tem ${contagemMaiusculas} letras maiúsculas.`)