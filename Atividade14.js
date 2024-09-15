const empresa = {
    departamentos: [
      {
        nome: "Comercial",
        funcionarios: ["João", "Pedro", "Clovis"]
      },
      {
        nome: "Suporte",
        funcionarios: ["Petúnia", "Jeremias", "Claudinei"]
      },
      {
        nome: "Recrusos Humanos",
        funcionarios: ["Hugo", "Gerson", "Lucy"]
      },
      {
        nome: "Gerencia",
        funcionarios: ["Yuri", "Vitória", "Arthur"]
      }
    ]
  };
  
  for (let index in empresa.departamentos) {
    const departamento = empresa.departamentos[index];
    console.log(`Departamento: ${departamento.nome}`);
    
    for (let funcionario of departamento.funcionarios) {
      console.log(`- ${funcionario}`);
    }
    
  }