let a = 1;
let b = "1";
let c = "1";
console.log(a == b);// A é igual a B? Verdadeiro.
console.log(a === b);// A é estritamente igual a B? Falso.
console.log(b === c);// B é estritamente igual a C? Verdadeiro.
console.log(a != b);// A é diferente de B? Não, poque os conteúdos são iguais.
console.log(a !== b);// A é estritamente diferente de B? Sim, porque não apenas os conteúdos são iguais mas porque são de tipos diferentes.
console.log(b !== c);// Não pois eles possuem o mesmo tipo.