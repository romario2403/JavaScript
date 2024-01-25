function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltb')
    if (num.value == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        seltab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            c++
            seltab.appendChild(item)
        }
    }
}