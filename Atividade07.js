const produtos = [
    { nome: "Baby Look", preco: 150, desconto: 0 },
    { nome: "Calça Rasgada", preco: 800, desconto: 0 },
    { nome: "Tênis Easy", preco: 1200, desconto: 0 },
    { nome: "Boné Supreme", preco: 750, desconto: 0 }
  ];
  
  produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.1;
    const novoPreco = produto.preco - produto.desconto;
    console.log(`${produto.nome} - R$ ${novoPreco.toFixed(2)} *Desconto de R$ ${produto.desconto.toFixed(2)}*`);
  })