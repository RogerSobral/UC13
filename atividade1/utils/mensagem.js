const situacao=require("../alunos");


function mensagem(aluno){
    return `${aluno.nome} esta ${situacao(aluno)}`
}

module.exports=mensagem