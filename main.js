const form = document.getElementById('form-contato');
const contatos = [];
const tel = [];


let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    attLista();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTel = document.getElementById('telefone');

    if (contatos.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`);
    } else {
        contatos.push(inputNome.value);
            tel.push(inputTel.value);

            let linha = '<tr>';
            linha += `<td>${inputNome.value} </td>`;
            linha += `<td>${inputTel.value}</td>`;
            linha += `<tr>`;

            linhas += linha;

    }

    inputNome.value = '';
    inputTel.value = '';

}

function attLista() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}