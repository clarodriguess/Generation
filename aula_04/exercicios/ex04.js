const leia = require('readline-sync');

let idade, genero, categoria;

// variavel q vai guardar infos de calculos, por boas praticas, começa com 0
let back = 0, front = 0, mobile = 0, full = 0, 
    somaIdade = 0, total = 0, mediaIdade = 0;

let continua = true;

while (continua) {
    idade = leia.questionInt("Digite a idade: ");

    let genetoOpt = [
        "Mulher Cis", 
        "Homem Cis", 
        "Nao Binario", 
        "Mulher Trans", 
        "Homem Trans", 
        "Outros"
    ]

    genero = leia.keyInSelect(genetoOpt, "Selecione o genero: ", {cancel: false}) +1;

    let categoriaOpt =[
        "BackEnd",
        "FrontEnd",
        "Mobile",
        "FullStack"
    ]
    categoria = leia.keyInSelect(categoriaOpt, "Selecione a categoria: ", {cancel: false}) +1;

    console.log(categoria, genero, idade) 

    //total de pessoas dev backend
    if (categoria === 1) {
        back ++;
    } 

    //total de devs frontend mulheres (cis e trans)
    if (categoria === 2 && (genero === 1 || genero === 4)) {
        front ++;   
    }
    // total devs mobile homens (cis e trans) maior de 40
    if (categoria === 3 && (genero === 2 || genero === 5) && idade > 40) {
        mobile ++;   
    }
    // total de devs fullstack nao binario menor de 30
    if (categoria === 4 && genero === 3 && idade < 30) {
        full ++;   
    }
    //total de pessoas
    total ++;

    //media de idade
    somaIdade += idade;
    mediaIdade = somaIdade / total;



    continua = leia.keyInYNStrict("Deseja continuar?")
}
console.log(`Total de pessoas Desenvolvedoras Backend: ${back}`)
console.log(`Total de pessoas Desenvolvedoras Frontend Mulheres (Cis e Trans): ${front}`)
console.log(`Total de pessoas Desenvolvedoras Mobile Homens (Cis e Trans) maiores de 40 anos: ${mobile}`)
console.log(`Total de pessoas Desenvolvedoras FullStack Não Binários menores de 30 anos: ${full}`)
console.log(`Media de idade: ${mediaIdade}`)
console.log(`Total de pessoas que responderam a pesquisa: ${total}`)