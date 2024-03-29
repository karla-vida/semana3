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



function separarCamarote(lista) {
  var listaSetor = lista.filter((pessoa) => pessoa.setor === "camarote");

  return listaSetor;
}

function separarPista(lista) {
  var listaSetor = lista.filter((pessoa) => pessoa.setor === "pista");

  return listaSetor;
}

function separarArquibancada(lista) {
  var listaSetor = lista.filter((pessoa) => pessoa.setor === "arquibancada");

  return listaSetor;
}

var listaCamarote = separarCamarote(convidadosComBebidasProcessada);

var listaPista = separarPista(convidadosComBebidasProcessada);

var listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);


const ulArquibancadaEl = document.getElementById("listaArquibancada");
const ulPistaEl = document.getElementById("listaPista");
const ulCamaroteEl = document.getElementById("listaCamarote");


const montaNome = (objPessoa) => {
  return `${objPessoa.nome} ${objPessoa.sobrenome}`;
};

listaArquibancada.forEach((convidado) => {
  if(convidado.openBar == true) {
    ulArquibancadaEl.innerHTML += `<li>${montaNome(convidado)} 🥂 </li>`;  
  }else{
    ulArquibancadaEl.innerHTML += `<li>${montaNome(convidado)} 🍼 </li>`;  
  }
});

listaCamarote.forEach((convidado) => {
  if(convidado.openBar == true) {
    ulCamaroteEl.innerHTML += `<li>${montaNome(convidado)} 🥂 </li>`;  
  }else{
    ulCamaroteEl.innerHTML += `<li>${montaNome(convidado)} 🍼 </li>`;  
  }
});

listaPista.forEach((convidado) => {
  if(convidado.openBar == true) {
    ulPistaEl.innerHTML += `<li>${montaNome(convidado)} 🥂 </li>`;  
  }else{
    ulPistaEl.innerHTML += `<li>${montaNome(convidado)} 🍼 </li>`;  
  }
}); 
