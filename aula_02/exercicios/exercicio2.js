const leia = require("readline-sync")

let nota1 = leia.questionFloat("Digite a nota 1: ")
let nota2 = leia.questionFloat("Digite a nota 2: ")
let nota3 = leia.questionFloat("Digite a nota 3: ")
let nota4 = leia.questionFloat("Digite a nota 4: ")

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`A média de notas é: ${media}`)
