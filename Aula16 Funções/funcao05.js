/* 
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4! -> um fatorial de um número pode ser calculado baseado na fatorial de outro

n! = n x (n-1)!
1! = 1 -> matemáticamente o fatorial de 1 é 1
 */

//RECURSIVIDADE - A ação demora mais que usando o looping for/do while
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
    
}
console.log(fatorial(5))

/*
-> return n * fatorial(n-1)

-> return 5 * fatorial(5-1) (5*funcao4) 5*f(4) agora o n vale 4;
-> return 4 * fatorial(4-1) (4*funcao3) 5*4*f(3) agora o n vale 3;
-> return 3 * fatorial(3-1) (3*funcao2) 5*4*3*f(2) agora o n vale 2;
-> return 2 * fatorial(2-1) (2*funcao2) 5*4*3*2*f(1) agora o n vale 1;
-> return 1 * fatorial(1-1) (1*funcao0) 5*4*3*2*1*f(0) o zero quer dizer que não recebe mais nenhum número
-> return 5*4*3*2*1* que dá 120
*/