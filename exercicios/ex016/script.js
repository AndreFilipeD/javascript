function contar(){
    var n1 = Number(window.document.getElementById('txtn1').value)
    var n2 = Number(window.document.getElementById('txtn2').value)
    var p = Number(window.document.getElementById('txtp').value)
    var res = window.document.querySelector('div#res')
    if(p != ''){
        res.innerHTML = 'Resultado: '

        for(c=n1;c<=n2;c = c + p){
            res.innerHTML+= '&#9193 ' + c
        }

        res.innerHTML+= '&#127937 '
    }else{
        window.alert('[ERRO] passo não inserido')
    }
}   
