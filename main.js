const form = document.getElementById('formulario');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato ();
    atualizaTable();

})

function adicionaContato () {
    const inputContato = document.getElementById('nome_contato');
    const inputTel = document.getElementById('numero_ctt');

    let linha = '<tr>'; //aqui uso aspas pq a tr é um conteúdo estático
    linha += `<td>${inputContato.value} </td>`; //aqui uso as crases pq é um conteúdo variável, evitando que eu faça esse processo manualmente
    linha += `<td>${inputTel.value} </td>`;
    linhas += linha;

    inputContato.value = '';
    inputTel.value = '';

}

function atualizaTable () {
    const bodytable = document.querySelector('tbody');
    bodytable.innerHTML = linhas;
}