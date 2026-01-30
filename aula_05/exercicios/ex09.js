// Mostrar diagonal principal e diagonal secundaria
// soma dos elementos da diagonal principal e da diagonal secundaria

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let diagonalP = "", diagonalS = "";
let somaDiagonalP = 0, somaDiagonalS = 0;

console.log(matriz.length)
 for (let i = 0; i < matriz.length; i++) {
    
    //diagonal principal:
    diagonalP += matriz[i][i] + " "
    somaDiagonalP += matriz[i][i]

    //diagonal secundaria:
    diagonalS += matriz[i][matriz.length - 1 - i] + " "
    somaDiagonalS += matriz[i][matriz.length - 1 - i]
 }

 console.log(`A Diagonal principal da Matriz é: ${diagonalP}`)
 console.log(`A Soma dos elementos da diagonal principal é: ${somaDiagonalP}`)
 console.log(`A Diagonal secudaria da Matriz é: ${diagonalS}`)
 console.log(`A Soma dos elementos da diagonal secundaria é: ${somaDiagonalS}`)