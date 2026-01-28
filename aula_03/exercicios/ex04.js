const leia = require('readline-sync');

console.log("=============================================")
console.log("  QUAL É O ANIMAL?   ")
console.log("=============================================")
console.log("  ESCOLHA UMA CARACTERISTICA:  ")

let caracteristica1;
let caracteristica2;
let caracteristica3;

caracteristica1 = leia.question("Digite a caracteristica 1: Vertebrado ou Invertebrado? ").toLowerCase();

if (caracteristica1 === "vertebrado") {

    caracteristica2 = leia.question("Digite a caracteristica 2: Ave ou Mamifero? ").toLowerCase();

    if (caracteristica2 === "ave") {
        caracteristica3 = leia.question("Digite a caracteristica 3: Carnivoro ou Onivoro? ").toLowerCase();

        if (caracteristica3 === "carnivoro") {
            console.log("Seu animal é Águia");
        } else {
            console.log("Seu animal é Pomba");
        }

    } else {
        caracteristica3 = leia.question("Digite a caracteristica 3: Onivoro ou Herbivoro? ").toLowerCase();

        if (caracteristica3 === "onivoro") {
            console.log("Seu animal é Homem");
        } else {
            console.log("Seu animal é Vaca");
        }
    }

} else {

    caracteristica2 = leia.question("Digite a caracteristica 2: Inseto ou Anelidio? ").toLowerCase();

    if (caracteristica2 === "inseto") {
        caracteristica3 = leia.question("Digite a caracteristica 3: Hematofago ou Herbivoro? ").toLowerCase();

        if (caracteristica3 === "hematofago") {
            console.log("Seu animal é Pulga");
        } else {
            console.log("Seu animal é Lagarta");
        }

    } else {
        caracteristica3 = leia.question("Digite a caracteristica 3: Hematofago ou Onivoro? ").toLowerCase();

        if (caracteristica3 === "hematofago") {
            console.log("Seu animal é Sanguessuga");
        } else {
            console.log("Seu animal é Minhoca");
        }
    }
}