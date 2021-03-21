let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;

let resultadoE = "#1- (AND) Você irá ao shopping? "
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2- (OR) Você irá ao shopping? "
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true ^ false);
console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);