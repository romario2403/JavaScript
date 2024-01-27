let num = [5, 8, 2, 9, 3, 6]
num.sort()
/*num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro do valor do vetor é ${num[0]}`)
console.log(num)*/

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição  ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}