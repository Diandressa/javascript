let amigo = {nome:'Andressa', 
sexo: 'F', 
peso: 46,
engordar(p=0){
    console.log('Engordou') 
    this.peso += p
}
} // um array tb é um objeto

amigo.engordar(2)//mando o 2 pra função
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)