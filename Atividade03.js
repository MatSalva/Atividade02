function filtroDePropriedades(produto, valorMinimo) {
    const resultado = {}
    
    for (let propriedade in produto) {
      if (produto[propriedade] > valorMinimo) {
        resultado[propriedade] = produto[propriedade]
      }
    }
    
    return resultado;
  }
  
  const produto = {
    nome: "Laptop",
    preco: 2.5,
    estoque: 5000,
    peso: 0.1,
    desconto: 0
  };
  
  console.log(filtroDePropriedades(produto, 100))