const leia = require("readline-sync")

let media = leia.questionFloat("Digite a média do aluno: ")

if(media >= 7){
    console.log("Aprovado")
}else if(media >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
} 