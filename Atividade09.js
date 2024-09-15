const clientes = [
    { nome: "Bruno", idade: 83, cidade: "Porto Alegre" },
    { nome: "Rodrigo", idade: 20, cidade: "Rio de Janeiro" },
    { nome: "Karine", idade: 42, cidade: "Belo Horizonte" },
    { nome: "Júlia", idade: 29, cidade: "Salvador" },
    { nome: "Lucas", idade: 45, cidade: "Curitiba" }
  ]
  
  let clientesAcimaDe30 = 0;
  
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      clientesAcimaDe30++;
    }
  })
  
  console.log(`Clientes com mais de 30 anos: ${clientesAcimaDe30}`)