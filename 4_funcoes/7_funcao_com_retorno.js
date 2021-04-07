function sempreRetorna1 () {
    return 1;
}

function textoOuNumero (retornaTexto) {
    return retornaTexto ? "Sou um texto": 123
    //if (retornaTexto) {
    //    return "Sou um texto!";
    //} else {
    //    return 123;
    //}
}

let valor = sempreRetorna1();
console.log(valor);

let resultado = textoOuNumero(true);
console.log(resultado);

console.log(textoOuNumero(false));