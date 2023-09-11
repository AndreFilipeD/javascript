function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerText = 'Agora são ' + hora + ' Horas'

    if(hora >= 4 && hora <= 10){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2ba85'

    } else if (hora >= 11 && hora <= 16){
        img.src = 'imagens/dia.png'
        document.body.style.background = '#0077ff'
    } else if (hora >=17 && hora <= 20){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#334e58'
    }
}