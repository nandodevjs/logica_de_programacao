//Variável = var let ou const + identificado = valor.

let preco = 19.90;
let desconto = 0.4;

console.log(preco * desconto);
console.log(19.9 * 0.6);
console.log(preco * (1- desconto));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno"; //String (texto) = sequência de símbolos.
let categoria = "Papelaria";
console.log(nome +" "+ categoria);
console.log("produto: " + nome 
    + ", Categoria: " + categoria 
    + ", total: " + precoComDesconto);

console.log(1 + 1);
console.log("1" + 1);