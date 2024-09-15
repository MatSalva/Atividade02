const pedidos = [
    { cliente: 'Cebolinha', produto: 'Iphone 16', quantidade: 1 },
    { cliente: 'Kleber', produto: 'Pc Gamer Positivo', quantidade: 2 },
    { cliente: 'Renato', produto: 'Kit Turbo', quantidade: 1 },
    { cliente: 'Fabio', produto: 'Lápis de Cor', quantidade: 12 },
    { cliente: 'Felipe', produto: 'Pizza', quantidade: 2 },
    { cliente: 'Yuri', produto: 'Concreto', quantidade: 6 }
];

const totalPorCliente = {};

pedidos.forEach(pedido => {
    if (totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] += pedido.quantidade
    } else {
        totalPorCliente[pedido.cliente] = pedido.quantidade
    }
})

console.log('Total de produtos por cliente:')
console.log(totalPorCliente)