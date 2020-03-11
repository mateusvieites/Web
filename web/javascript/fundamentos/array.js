const valores = [7.7, 8.9, 6.3, 9.2] //não criar generico
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna indefinido

valores[4] = 10 //adiciona no local
console.log(valores)

console.log(valores.length) //retorna numero de elementos

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira e retorna o ultima
delete valores[0]
console.log(valores)

console.log(typeof valores) //array é um objeto