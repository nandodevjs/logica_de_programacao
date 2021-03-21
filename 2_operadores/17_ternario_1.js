//Antes das 12:00h quero "Bom dia", depois das 12:00h quero "Boa tarde".
//Atribuidor ternário : Atribuição condicional.

const saudacao = hora <= 12 ? "Bom dia" : "Boa tarde";
const hora = 10;

console.log(saudacao);