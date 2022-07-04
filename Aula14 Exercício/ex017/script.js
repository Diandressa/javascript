function tabuada(){
    var num = document.getElementById('txtn')//var valor = Number(document.getElementById('numero').value)
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')

    if (num.value < 0 || num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        /*var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''//pra limpar os valores anteriores

        while (c <= 10){
            var option = document.createElement('option')
            option.text = `${n} x ${c} = ${n*c}`
            option.value = `tab${c}`//par outras linhuagens identificar a opção selecionado
            tab.appendChild(option)//pra mostra na tela
            c++
        }*/
        /*var n = Number(num.value)
        tab.innerHTML = ''

        for(var c = 1; c <= 10; c++){
            var option = document.createElement('option')
            option.text = `${n} x ${c} = ${n*c}`
            option.value = `tab${c}`
            tab.appendChild(option)
        }*/
        var n = Number(num.value)
        res.innerHTML = ''

        for(var c = 1; c <= 10; c++){
            res.innerHTML = `${n} x ${c} = ${n*c}`
        }
    }
}