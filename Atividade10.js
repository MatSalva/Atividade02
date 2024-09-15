const vendas = [
    { produto: "Terno", quantidade: 5, valor: 699.99 },
    { produto: "Calça Jeans", quantidade: 8, valor: 99.99 },
    { produto: "Sapato", quantidade: 3, valor: 249.99 },
    { produto: "Chapéu", quantidade: 1, valor: 69.99 }
  ];
  
  let valorTotal = 0
  
  vendas.forEach(item => {
    valorTotal += item.quantidade * item.valor
  })
  
  console.log(`O valor total das vendas é: R$ ${valorTotal.toFixed(2)}`)