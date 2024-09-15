const carro = {         
    marca : "Renault",
    modelo : "Logan",
    ano : 2012 ,
    cor : "Azul",
}

for (let propriedade in carro) {    
    console.log(`${propriedade} : ${carro[propriedade]}`)
}
