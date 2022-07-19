let pessoaA = { nome: "João", sobrenome: "da Silva", setor: "camarote", idade: "40" }
let pessoaB = { nome: "Marcos", sobrenome: "Hartman", setor: "camarote", idade: "17" }
let pessoaC = { nome: "Marina", sobrenome: "Pessoa", setor: "pista", idade: "30" }
let pessoaD = { nome: "Flávia", sobrenome: "da Costa", setor: "pista", idade: "27" }
let pessoaE = { nome: "Arthur", sobrenome: "da Fonseca", setor: "arquibancada", idade: "20" }
let pessoaF = { nome: "Júlia", sobrenome: "da Luz", setor: "arquibancada", idade: "16" }

var listaDeConvidados = [pessoaA, pessoaB, pessoaC, pessoaD, pessoaE, pessoaF];

function liberarBebidas(listaDeConvidados) {
    var convidadoComOpenBar = [];

    for (i = 0; i < listaDeConvidados.length; i++) {

        var idade = listaDeConvidados[i].idade;
        var pessoa = listaDeConvidados[i];

        if (idade >= 18) {
            pessoa.openBar = true;

        } else {
            pessoa.openBar = false;
        }
        convidadoComOpenBar.push(pessoa);

    }
    return convidadoComOpenBar;
}

var convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);



function separarCamarote(lista){
    var listaSetor = lista.filter((pessoa) => pessoa.setor === "camarote");

    return listaSetor;
}

function separarPista(lista){
    var listaSetor = lista.filter((pessoa) => pessoa.setor === "pista");

    return listaSetor;
}

function separarArquibancada(lista){
    var listaSetor = lista.filter((pessoa) => pessoa.setor === "arquibancada");

    return listaSetor;
}

var listaCamarote = separarCamarote(convidadosComBebidasProcessada);

var listaPista = separarPista(convidadosComBebidasProcessada);

var listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);

