const leia = require("readline-sync")

let mensagem =  leia.question("Digite uma mensagem: ")

let numero1 = leia.questionInt("Digite um numero: ")
let numero2 = leia.questionInt("Digite outro numero: ")

let soma = numero1 + numero2

console.log("soma: " +soma)