// var pessoa={
//     nome:"carlos",
//     idade:18,
//     salario:4500,
//     endereco:{
//         rua:"Carlos Silva",
//         numero:"23",
//         cep:"08666-123",
//         bairro:"Silva Rocha",
//         cidade:"Santana",
//         estado:"SP"
//     }

// }

// function verificarIdade(pessoa){
//     if(pessoa.idade>=18){
//         return true
//     }else{
//         return false
//     }
// }

// function calcularPercentual(pessoa,percentual){
//     let valorPercentual=pessoa.salario*(percentual/100)
//     return valorPercentual

// }

// function verificarPercentualDoSalario(pessoa){
//     if( calcularPercentual(pessoa)>=2350){
//         return true;
//     }else{
//         return false;
//     }
// }

// function verificarPossibilidadeCompraCarro(pessoa){
//     if(verificarPercentualDoSalario(pessoa) && verificarIdade(pessoa)){
//         console.log("Você pode comprar  o carro");
//     }else{
//         console.log("Você não pode comprar o carro")
//     }
// }

// verificarPossibilidadeCompraCarro(pessoa);
var pessoa={
    nome:"Carlos",
    nascimento:2000,
    estadoCivil:"Casado",
    calcularIdade:  function (){
        return 2025-this.nascimento;
    }
}

console.log(pessoa.calcularIdade())