let valor //não inicializado
console.log(valor)
//console.log(valor2) //não iniciado

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) se ela pode ser nulo não tente acessar pq pode dar problema

const produto = {}
console.log(produto.preco) //retorna undefined pq ele preco não foi definido
//console.log(produto.preco.a) não tem como acessar a propriedade 'a' afinal ele já era undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //falso
//delete produto.preco tirar atributo
console.log(produto) 

produto.preco = null // sem preço
console.log(!!produto.preco) //! negativo do atual, !!negativo do negativo ou seja o estado atual
console.log(produto)