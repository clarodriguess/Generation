const leia = require("readline-sync")

let salarioBruto = leia.questionFloat("Digite o salario bruto: ")
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ")
let horasExtras =  leia.questionFloat("Digite as horas extras: ")
let descontos = leia.questionFloat("Digite os descontos: ")

//SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log("Salario Liquido: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(salarioLiquido)
)