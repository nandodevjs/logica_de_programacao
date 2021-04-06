function sempreRetorna1 () {
    return 1000;
}

function textoOuNumero (retornaTexto) {
    if (retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
}

let valor = sempreRetorna1();
console.log(valor);

let resultado = textoOuNumero(true);
console.log(resultado);

console.log(textoOuNumero(false));