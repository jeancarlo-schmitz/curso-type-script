// Tipagem

let nome: string;
let idade: number;

nome = "João";
idade = 16;

console.log(`Nome: ${nome}, idade: ${idade}`)

let a = 5;
let b = 7;

console.log(somar(a, b));
function somar(a: number, b: number) {
    return a + b;
}

let array1: number[] = [];

array1.push(1);
array1.push(2);

console.log("array1: ", array1);

let array2: (number | string)[] = [];

array2.push(1);
array2.push('Teste');
console.log("array2: ", array2);

let array3: (number | "Teste")[] = [1, 2, 3, 'Teste'];
console.log("array3: ", array3);

// TYPES
type TipoArray = (number | "Teste")[];

let array4: TipoArray = [1, 2, 3, 'Teste'];
let array5: TipoArray = ['Teste', 3, 5, "Teste"];

console.log(array4, array5);

type Animal = {
    nome: string;
    idade: number;
}

let cachorro: Animal;

cachorro = {
    nome: 'DinDin',
    idade: 7
}

console.log("Cachorro: ", cachorro);

// ENUMS
enum produtoStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarProdutoStatus(status: number) {
    switch (status) {
        case produtoStatus.Ativo:
            console.log("Produto Disponivel");
            break;
        case produtoStatus.Inativo:
            console.log("Produto Inativo");
            break;
        case produtoStatus.Indisponivel:
            console.log("Produto Indisponivel");
            break;
    }
}

checarProdutoStatus(produtoStatus.Ativo);

// INTERFACES

interface AnimalInterface {
    nome: string;
    idade: number;
    vivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

let cachorroNovo: AnimalInterface = {
    nome: "Din Din",
    idade: 0,
    vivo: false,

    nascer(){
        this.vivo = true;
        return console.log(`O ${this.nome} nasceu!`);
    },

    crescer(){
        this.idade++;
        return console.log(`O ${this.nome} está com ${this.idade} anos!`)
    },

    morrer(){
        this.vivo = false;
        return console.log(`O ${this.nome} morreu ;(`)
    }
}

cachorroNovo.nascer();
cachorroNovo.crescer();
cachorroNovo.crescer();
cachorroNovo.crescer();
cachorroNovo.morrer();


// Classes

class AnimalClasse implements AnimalInterface {
    readonly nome: string;
    idade: number = 0;
    private _vivo: boolean = false;

    constructor(nome: string){
        this.nome = nome;
    }

    nascer(){
        this._vivo = true;
        return console.log(`O ${this.nome} nasceu!`);
    };

    crescer(){
        this.idade++;
        return console.log(`O ${this.nome} está com ${this.idade} anos!`)
    };

    morrer(){
        this._vivo = false;
        return console.log(`O ${this.nome} morreu ;(`)
    };

    get vivo(): boolean {
        return this._vivo;
    }
}

let cachorroDinDin = new AnimalClasse("The Dog");

cachorroDinDin.nascer();
cachorroDinDin.crescer();
cachorroDinDin.morrer();

let gato = new AnimalClasse("Destructor");

gato.nascer();
gato.crescer();
gato.morrer();


// NameSpaces

namespace Terrestres {
    export class Elefente extends AnimalClasse{
        correr() {
            console.log(`O ${this.nome} Correu!`)
        }
    }

    export let elefente = new Elefente("Dolly");
}

namespace Marinhos {
    export class Golfinho extends AnimalClasse{
        nadar() {
            console.log(`O ${this.nome} Nadou!`)
        }
    }

    export let golfinho = new Golfinho("Willy");
}

Terrestres.elefente.correr();
Marinhos.golfinho.nadar();


// Declaration
import calc from "./calc.js";

console.log(calc.soma(10, 15))