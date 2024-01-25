function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido, considerando passo 1.')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F600}`
            }    
        } else {
            // Contagem regressiva
            for ( let c = i; c>= f; c-= p)
            res.innerHTML += `${c} \u{1F600}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}