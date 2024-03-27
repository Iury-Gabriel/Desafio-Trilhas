const dataDeNascimento = prompt("Digite a sua data de nascimento no formato yyyy-MM-dd: ");
const dataNascimento = new Date(dataDeNascimento);
const dataAtual = new Date();

let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

if (dataAtual.getMonth() < dataNascimento.getMonth() || (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
    idade--;
}

console.log(`A sua idade é ${idade}`);