const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const templeta = `
    Olá
    ${nome}!`
console.log(concatenacao,templeta)

//expressoes
console.log(`1+1 = ${1+1}`)

const up = texto =>  texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)