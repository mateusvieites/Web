const funcs = []

for(let i = 0;i < 10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]() //funções são onCloser
funcs[6]() //ou seja tem noção onde são
funcs[8]() //definidas