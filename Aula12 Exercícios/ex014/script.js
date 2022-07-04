function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    //var hora = 13

    msg.innerHTML = `Agora são ${hora} horas.`

    //Para mostra a imagem usamos o if
    
    if (hora >= 0 && hora < 12)/*usamos && para fazer um intervalo de tempo*/
    {
        img.src = 'manha2.png'
        document.body.style.background = '#cacfd2'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde2.png'
        document.body.style.background = '#c7ab97'
    } else {
        img.src = 'noite2.png'
        document.body.style.background = '#584845'
    }
}
