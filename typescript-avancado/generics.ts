// GENERIC COM CLASSE
// class Pessoa<T extends string | number> {
//     idade: T;

//     constructor(idade: T){
//         this.idade = idade;
//     }

//     setIdade(idade: T){
//         this.idade = idade;
//     }
// }

// let pessoa = new Pessoa(5);
// console.log(pessoa);


// GENERIC COM Função

let carros: string[] = ['Gol', 'Focus', 'Fastback'];
let numeroPrimos: number[] = [2, 3, 5];

function pegarPrimeiroElemento<T>(lista: T[]): T{
    return lista[0];
}

console.log(pegarPrimeiroElemento(carros));
console.log(pegarPrimeiroElemento(numeroPrimos));
console.log(pegarPrimeiroElemento<number>(numeroPrimos));
