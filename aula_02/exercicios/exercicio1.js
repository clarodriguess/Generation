const leia = require("readline-sync")

let salario =  leia.questionFloat("Digite o seu salario: ")
let abono = leia.questionFloat("Digite o seu abono: ")

let novoSalario = salario + abono

console.log("Novo salario: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(novoSalario)
)
