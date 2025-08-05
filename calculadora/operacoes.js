function somar(valor1,valor2){
    return valor1+valor2;
};

function divisao(valor1,valor2){
    return valor1/valor2;
};

function multiplicacao(valor1,valor2){
    return valor1*valor2;
};

function subtracao(valor1,valor2){
    return valor1-valor2;
};


module.exports={
    soma:somar,
    divisao:divisao,
    multiplicacao:multiplicacao,
    subtracao:subtracao
};