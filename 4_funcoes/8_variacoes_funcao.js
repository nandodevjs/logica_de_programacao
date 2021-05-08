/* Função Com parâmetro e Com retorno */
function somar (a, b) {
    return a + b;
};

console.log(somar(10, 20));

/* Função Com parâmetro e Sem retorno */

function multiplicacao (a, b){
    console.log(a * b);
};

multiplicacao(5, 10);

/* Função Sem parâmetro e Com retorno */

function dataAtual () {
    return new Date();
}

console.log(dataAtual());

/* Função Sem parâmetro e Sem retorno */

function horaAtual () {
    console.log(new Date().getHours());
}

horaAtual();