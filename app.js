// Criação das categorias como arrays vazios
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let carboidratos = [];
let outros = [];

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
    } else if (categoria === "outros") {
        outros.push(item);
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

    function criarLinha(categoria, lista) {
        if (lista.length > 0) {
            let row = listaTabela.insertRow();
            row.insertCell(0).textContent = categoria;
            row.insertCell(1).textContent = lista.join(", ");
            let deleteCell = row.insertCell(2);
            deleteCell.innerHTML = lista.map((item, index) => 
                `<button onclick="removerItem('${categoria.toLowerCase()}', ${index})">Excluir ${item}</button>`
            ).join(" ");
        }
    }

    criarLinha("Frutas", frutas);
    criarLinha("Laticínios", laticinios);
    criarLinha("Congelados", congelados);
    criarLinha("Doces", doces);
    criarLinha("Carboidratos", carboidratos);
    criarLinha("Outros", outros);
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
    } else if (categoria === "outros") {
        outros.splice(index, 1);
    }

    // Atualiza a tabela após a remoção
    mostrarLista();
}

// Adiciona o evento de submissão do formulário
document.getElementById("formAdicionarItem").addEventListener("submit", adicionarItem);
