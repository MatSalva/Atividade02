const funcionarios = [
    { nome: "Maria Silveira", cargo: "Camareira", salario: 2000 },
    { nome: "Carlos Santana", cargo: "Gari", salario: 1500 },
    { nome: "Pedro Albuquerque", cargo: "Motoboy", salario: 2500 },
    { nome: "Ana Maria", cargo: "Empresaria", salario: 60000 },
    { nome: "Pedro Hoffman", cargo: "Cantor", salario: 200000 }
  ];
  
  const salarioMinimo = 2000
  
  console.log(`Funcionários com salário maior que R$ ${salarioMinimo}:`)
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`* ${funcionario.nome} <${funcionario.cargo}>: R$ ${funcionario.salario}`)
    }
  }