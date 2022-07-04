function sortear(){
    res = document.getElementById('res')

    var aleatorio = (num) => Math.floor(Math.random()* num)
    var aleatorio2 = (nume) => Math.floor(Math.random()* nume)
    res.innerHTML = `${aleatorio(11)}, ${aleatorio2(11)}` 
}

function gerar(){
    var num = document.getElementById('txtn')
    var sel = document.getElementById('sel')
    
    if (num.value.length == 0){
        alert('[ERRO] Digite o número sorteado')
    } else {
        var n = Number(num.value)
        sel.innerHTML = ''

        for (var c=0;c<=10;c++){
            var option = document.createElement('option')
            option.setAttribute('class', 'opclasse')
            sel.appendChild(option)
            option.text = `${n} x ${c} = ${n*c}`
        }
    }
}