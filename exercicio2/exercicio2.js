// Itere sobre o array abaixo, exibindo para cada 
// um dos objetos o seu nome completo (nome + sobrenome).
// Você pode exibir em um console.log, mas como desafio 
// tente exibir os nomes completos em uma <ul> na página HTML!
function gerar(){
   
    var listaDeConvidados = [
        { nome: "José", sobrenome: "Carlos" },
        { nome: "Alessandro", sobrenome: "Viana" },
        { nome: "Paula", sobrenome: "Souza" },
        { nome: "Cristian", sobrenome: "Schimit" },
        { nome: "Beatriz", sobrenome: "Viana" },
        { nome: "Fernanda", sobrenome: "Silveira" },
        { nome: "Cláudia", sobrenome: "Torres" },
        { nome: "Augusto", sobrenome: "Cesar" },
        { nome: "Noemi", sobrenome: "Nakamura" },
        { nome: "Pedro", sobrenome: "Lobo" }
    ];

    var lista = document.querySelector('#lista');
     for(var item of listaDeConvidados){
        var element = document.createElement('li');
        element.appendChild(document.createTextNode(item["nome"] + " " + item["sobrenome"]));
        lista.appendChild(element);
    }
}