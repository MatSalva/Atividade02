const pessoas = [
    { nome: "Mirasol", idade: 12, cidade: "Passa e Fica" },
    { nome: "José Antônio", idade: 89, cidade: "Entrepelado" },
    { nome: "Zuleika", idade: 22, cidade: "Porto Alegre" },
    { nome: "João Vitor", idade: 40, cidade: "Pintópolis" },
    { nome: "Leandro", idade: 31, cidade: "Anta Gorda" }
  ]
  
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
  }