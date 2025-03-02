// Criação das categorias como arrays vazios
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let carboidratos = [];  // Corrigido a ortografia de "carboitrados" para "carboidratos"

// Função para adicionar itens às categorias
function adicionarItem(event) {
    event.preventDefault();  // Impede o envio do formulário

    let item = document.getElementById("item").value;
    let categoria = document.getElementById("categoria").value;

    // Verifica a categoria e adiciona o item
    if (categoria === "frutas") {
        frutas.push(item);
    } else if (categoria === "laticinios") {
        laticinios.push(item);
    } else if (categoria === "congelados") {
        congelados.push(item);
    } else if (categoria === "doces") {
        doces.push(item);
    } else if (categoria === "carboidratos") {
        carboidratos.push(item);
    }

    // Limpa o campo de item após a adição
    document.getElementById("item").value = "";

    // Exibe a lista atualizada na tabela
    mostrarLista();
}

// Função para exibir a lista agrupada na tabela
function mostrarLista() {
    const listaTabela = document.getElementById("listaCompras");
    listaTabela.innerHTML = ""; // Limpa a tabela antes de adicionar os novos dados

    // Adiciona as categorias e seus itens na tabela
    if (frutas.length > 0) {
        let row = listaTabela.insertRow();
        row.insertCell(0).textContent = "Frutas";
        row.insertCell(1).textContent = frutas.join(", ");
        let deleteCell = row.insertCell(2);
        deleteCell.innerHTML = `<button onclick="removerItem('frutas', ${frutas.length - 1})">Excluir</button>`;
    }
    if (laticinios.length > 0) {
        let row = listaTabela.insertRow();
        row.insertCell(0).textContent = "Laticínios";
        row.insertCell(1).textContent = laticinios.join(", ");
        let deleteCell = row.insertCell(2);
        deleteCell.innerHTML = `<button onclick="removerItem('laticinios', ${laticinios.length - 1})">Excluir</button>`;
    }
    if (congelados.length > 0) {
        let row = listaTabela.insertRow();
        row.insertCell(0).textContent = "Congelados";
        row.insertCell(1).textContent = congelados.join(", ");
        let deleteCell = row.insertCell(2);
        deleteCell.innerHTML = `<button onclick="removerItem('congelados', ${congelados.length - 1})">Excluir</button>`;
    }
    if (doces.length > 0) {
        let row = listaTabela.insertRow();
        row.insertCell(0).textContent = "Doces";
        row.insertCell(1).textContent = doces.join(", ");
        let deleteCell = row.insertCell(2);
        deleteCell.innerHTML = `<button onclick="removerItem('doces', ${doces.length - 1})">Excluir</button>`;
    }
    if (carboidratos.length > 0) {
        let row = listaTabela.insertRow();
        row.insertCell(0).textContent = "Carboidratos";
        row.insertCell(1).textContent = carboidratos.join(", ");
        let deleteCell = row.insertCell(2);
        deleteCell.innerHTML = `<button onclick="removerItem('carboidratos', ${carboidratos.length - 1})">Excluir</button>`;
    }
}

// Função para remover um item da categoria
function removerItem(categoria, index) {
    if (categoria === "frutas") {
        frutas.splice(index, 1);
    } else if (categoria === "laticinios") {
        laticinios.splice(index, 1);
    } else if (categoria === "congelados") {
        congelados.splice(index, 1);
    } else if (categoria === "doces") {
        doces.splice(index, 1);
    } else if (categoria === "carboidratos") {
        carboidratos.splice(index, 1);
    }

    // Atualiza a tabela após a remoção
    mostrarLista();
}

// Adiciona o evento de submissão do formulário
document.getElementById("formAdicionarItem").addEventListener("submit", adicionarItem);

