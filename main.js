const form = document.getElementById("form-agenda");
const nomes = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const nomeContato = document.getElementById("nome-contato");
    const numeroTelefone = document.getElementById("numero-telefone");

    if (nomes.includes(nomeContato.value) && telefones.includes(numeroTelefone.value)) {
        alert(`O contato ${nomeContato.value} já foi inserido`);
    } else {
        nomes.push(nomeContato.value);
        telefones.push(numeroTelefone.value);

        let linha = "<tr>";
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroTelefone.value}</td>`;
        linha += "</tr>";

        linhas += linha;

        nomeContato.value = "";
        numeroTelefone.value = "";

}}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}


