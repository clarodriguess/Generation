const leia = require('readline-sync');

let numeroA = leia.questionInt("Digite o numero A: ")
let numeroB = leia.questionInt("Digite o numero B: ")
let numeroC = leia.questionInt("Digite o numero C: ")

let somaAB = numeroA + numeroB
if (somaAB > numeroC) {
    console.log("A Soma de A + B é Maior do que C")
} else if(somaAB < numeroC) {
    console.log("A Soma de A + B é Menor do que C")
} else {
    console.log("A Soma de A + B é Igual a C")
}
