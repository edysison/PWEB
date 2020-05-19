let numeros = []
let repetiu = false
numeros.push(parseFloat(window.prompt("Numero 1")))
numeros.push(parseFloat(window.prompt("Numero 2")))
numeros.push(parseFloat(window.prompt("Numero 3")))
numeros.sort((a,b)=>{
    if (a==b) {
        repetiu = true
        alert(a)
    }
    return a-b
})
repetiu ? '' : alert(numeros[2])