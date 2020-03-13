//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) //pode passar menos mas retornará NaN
imprimirSoma(2,10,4,5,6,7,8) //vai pegar apenas as 2 informações necessarias
//o resto ignora
imprimirSoma() //Not a number(NaN)

function soma(a,b = 0){ //pode deixar o parametro preparado
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //NaN pq o primeiro nao foi tratado
