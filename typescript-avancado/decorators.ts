// DECORATOR COM CLASSE

// function setOs(os:string){
//     return (target: any) => {
//         return class extends target{
//             version = os;
//         }
//     }
// }

// @setOs('WebOs 3.0')
// class LG{

// }

// @setOs('Android Tv 2.1')
// class Sony {

// }

// let tvLg = new LG;
// let tvSony = new Sony;

// console.log(tvLg);
// console.log(tvSony);


// DECORATOR COM ATRIBUTOS
// function minSize(size: number){
//     return (target: any, key: any) => {
//         let val = target[key];

//         const getter = () => val;
//         const setter = (value: number) => {
//             if(value < size){
//                 console.log(`O Tamanho da tela deve ser maior que ${size} polegadas`)
//             }else{
//                 val = value;
//             }
//         }

//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         })
//     }
// }

// class LG {
//     @minSize(32)
//     size: number;

//     constructor(size: number){
//         this.size = size;
//     }
// }

// let tvLg = new LG(35);

// DECORATOR COM FUNCTION

function delay(time: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        let method = descriptor.value;
        descriptor.value = function (...arg: any){
            setTimeout(() => {
                method.apply(this, arg);
            }, time)
        }

        return descriptor;
    }
}

class Timer{
    @delay(2000)
    newTimer(cont: number): number{
        if(cont === 0){
            return 0;
        }else{
            console.log(`Contado em ${cont}`)
            return this.newTimer(cont - 1);
        }
    }
}

let t = new Timer();
t.newTimer(5);