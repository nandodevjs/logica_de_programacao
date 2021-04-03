const futuro = Date.now() + 10000;
let quantidade = 0;

while (Date.now() < futuro) {
    quantidade++;
}

console.log("Fim repetição.\n" + "Quantidadade total: " + quantidade);