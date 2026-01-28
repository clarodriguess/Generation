const leia = require('readline-sync');

console.log ("O numero é par ou impar?")
let numero = leia.questionInt("Digite um numero: ")

if(numero % 2 == 0){
    console.log("O numero é par")
}else{
    console.log("O numero é impar")
}