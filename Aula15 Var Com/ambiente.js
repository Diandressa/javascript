let num = [5, 8, 2, 9, 3]

num.sort()//sort é um método interno de todo elemento que é um vetor, coloca em ordem
num.push(1)
console.log(num)// pra mostrar o vetor, tem ser abaixo do sort

console.log(`O valor tem ${num.length} posições`)//&{} é um template string/ length mostra quantas posições irá ter

//posição isolada
console.log(num[0])
console.log(`Valor do vetor na posição um é ${num[1]}`)

let posicao = num.indexOf(4)

if (posicao == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${posicao}`)
}
