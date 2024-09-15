const carrinho = {
    itens: [
      { nome: "Cereal", quantidade: 2, precoUnitario: 18 },
      { nome: "Pão", quantidade: 5, precoUnitario: 12.75 },
      { nome: "Frango", quantidade: 6, precoUnitario: 20 },
      { nome: "Molho de Tomate", quantidade: 3, precoUnitario: 6.50 }
    ],
    
    calculoTotal: function() {
      let total = 0
      
      this.itens.forEach(item => {
        total += item.quantidade * item.precoUnitario
      })
      
      return total.toFixed(2)
    }
  }
  
  console.log(`O valor total do carrinho é R$ ${carrinho.calculoTotal()}`)