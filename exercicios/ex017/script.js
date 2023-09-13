function gerar(){
    var n = Number(window.document.getElementById('txtn').value)
    var t = window.document.querySelector('div#res')
    var i = 1

    t.innerHTML = 'Resultado: <br><br>'
    
    while(i<=10){
        t.innerHTML += i + ' x ' + n + ' = ' + (i*n) + '<br>'
        i++
    }

    t.innerHTML += '<br><br>Curtiu né, to ligado'
}   