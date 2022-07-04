function verificar(){
    var data = new Date()
    var ano = data.getFullYear()// pega o ano atual em 4 dígitos

    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    var img = document.createElement('img')//vai criar uma tag img
    img.setAttribute('id', 'foto')//cria um id(atributo) chamado foto

    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value) /*ano atual - o ano digitado que ele nasceu*/
        res.innerHTML = `Idade calculada ${idade}`

        var gênero = ''

        if (sex[0].checked)/*posição 0 é o masculino, a bolinha que tiver marcada(checked)*/{
            gênero = 'um maligno'

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'anakin-criança.png')//coloca o atributo e o valor dele
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'anakin-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'anakin-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'anakin-velho.png')//temos que fazer essa img aparecer na resposta
            }

        } else if (sex[1].checked){
            gênero = 'uma mulher apaixonada'

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'padme-criança.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'padme-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'padme-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'padme-velha.png')
            }
        }

        res.style.textAlign = 'center' //pra centralizar o res
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br><br>`

        res.appendChild(img) //add um elemento, que é a img - isso faz aparece a imagem na tela
    }
}