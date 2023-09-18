var lista = []
var listado = window.document.getElementById('list')
var res = window.document.getElementById('res')

var valor = Number(window.document.getElementById('txtnum').value)
var verify = false
var maior = 0
var menor = 0
var soma = 0
var media = 0

function inserir(){
    valor = Number(window.document.getElementById('txtnum').value)
    verify = false
    for(c in lista){
        if(lista[c] == valor){
            verify = true
        }
    }
    if(verify){
        window.alert('[ERRO] O numero [' + valor + '] não pode ser inserido, pois já está presente na lista.')
    }else{
        res.innerHTML = 'Aguardando analise...'
        if(valor > 100 || valor < 1){
            if(valor > 100){
                window.alert('[ERRO] Você inseriu ' + valor +', que é maior que 100, tente um numero menor.')
            }else{
                window.alert('[ERRO] Você inseriu ' + valor +', que é menor que 1, tente um numero maior.')
            }
        }else{
            lista.push(valor)
            listado.innerHTML = '______________________<br>Lista com [' + lista.length + '] elemento(s).<br><br>'
            for(c in lista){
                listado.innerHTML += (Number(c)+1) + 'º Posição vale: [' + lista[c] + '] <br>'
            }
            listado.innerHTML += '______________________<br>'
        }
    }
    
}

function analisar(){
    if(lista.length != 0){
        soma = 0
    for(c in lista){
        if(c == 0){
            menor = lista[c]
            maior = lista[c]
        }else{
            if(lista[c] > maior){
                maior = lista[c]
            }
            if(lista[c] < menor){
                menor = lista[c]
            }
        }
        soma += lista[c]
    }
    media = soma/lista.length

    res.innerHTML = 'Ao todo temos ' + lista.length + ' elemento(s) na lista.' + '<br>'
    res.innerHTML += 'O menor valor da lista é ' + menor + '<br>'
    res.innerHTML += 'O maior valor da lista é ' + maior + '<br>'
    res.innerHTML += 'A soma entre todos os elementos é ' + soma + '<br>'
    res.innerHTML += 'A media entre os elementos é ' + media
    } else{
        window.alert('[ERRO] A lista está vazia, Insira numeros para analisar')
    }
    
}