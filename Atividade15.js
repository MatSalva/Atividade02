const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saida', valor: 500 },
    { tipo: 'entrada', valor: 250 },
    { tipo: 'saida', valor: 300 },
    { tipo: 'entrada', valor: 800 },
    { tipo: 'saida', valor: 1300 },
  ];
  
  let saldo = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldo += transacao.valor;
    } else if (transacao.tipo === 'saida') 
      saldo -= transacao.valor;
    }
  )
  
  if(saldo > 0){
  console.log('Saldo final(Superavit):', saldo)
  } else{
  console.log('Saldo final(Deficit):', saldo)
  }