// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n){//esse n é o número n! (fatorial)
    let fat = 1 //fat é a conta, começa com 1 pois fat = 1*5 dá o 5
    for(let c = n; c>1; c--){ //definimos um c que equivale ao meu n (número definido como 5)
        fat *= c //ver explicação abaixo...
    }
    return fat // precisamos do return para retornar esse dado 
}

console.log(fatorial(5)) //mostrar na tela

/*
...tem q ser fat = fat*c pois o valor do fat vai ser ele mesmo*c e ele mesmo vai mudar conforme cada repetição
-> defino o valor n como 5, então c igual a 5 tb;
-> executa o fat = fat x c, então fat = 1*5 (que dá 5);
-> agora o fat vale 5, executa o fat = fat(5) * c, que agora é fat=5*4 (que dá 20);
-> depois o fat = 20*3 (que dá 60);
-> fat = 60*2 (que dá 120);
-> e por fim fat = 120*1 (que dá 120).
 */