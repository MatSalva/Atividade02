let estoque = [
    { produto: "Relógio", quantidade: 2, minimo: 10 },
    { produto: "Óculos", quantidade: 7, minimo: 15 },
    { produto: "Gravata", quantidade: 5, minimo: 10 },
    { produto: "Terno", quantidade: 12, minimo: 10 },
    { produto: "Meias", quantidade: 3, minimo: 10 }
];

function atualizarEstoque(item) {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2
        console.log(`${item.produto}: Quantidade atualizada para ${item.quantidade}`)
    } else{
        console.log(`${item.produto}: Quantidade ${item.quantidade} (OK)`)
    }
}

estoque.forEach(atualizarEstoque)

console.log("Estoque atualizado:")
estoque.forEach(item => console.log(`${item.produto}: ${item.quantidade}`))