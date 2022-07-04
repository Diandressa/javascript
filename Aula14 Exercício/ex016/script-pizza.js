function contar(){
    var tem = document.getElementById('txtt')
    var pedacosSeparados = document.getElementById('txtps')
    var pessoas = document.getElementById('txtpe')
    
    var res = document.getElementById('res')

    if (tem.value == 0 || pedacosSeparados.value == 0 || pessoas.value == 0){
        res.innerHTML = 'Preencha todas as opções com valores acima de 0!'
    } else {
        var t = Number(tem.value)
        var ps = Number(pedacosSeparados.value)
        var pe = Number(pessoas.value)

        var pizza = t*ps
        var divisao = pizza/pe
        var inteiro = divisao/8
        
        if (inteiro == 1) {
            res.innerHTML = `Cada pessoa deve comer ${inteiro} pizza \u{1F355}`
            
        } else if (inteiro > 1) {
            res.innerHTML = `Cada pessoa deve comer ${inteiro} pizzas`
            for(var c=0;c<inteiro;c++){
                res.innerHTML += `\u{1F355}`
            }
            
        } else {
            res.innerHTML = `Cada pessoa deve comer ${divisao} pedaços`
            for(var c=0;c<divisao;c++){
                res.innerHTML += `\u{1F355}`
            }
        }
    }
}