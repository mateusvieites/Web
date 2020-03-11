const escola = "cod3r"

console.log(escola.charAt(4)) //retorna letra
console.log(escola.charAt(5)) //não retorna nada
console.log(escola.charCodeAt(3)) //retorna número unicode
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(/\d/,'e'))

console.log('Ana,Maria,Pedro'.split(','))