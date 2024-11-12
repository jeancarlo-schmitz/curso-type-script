type TipoTeste = number | string;
function exibirPessoa(nome: string, idade: TipoTeste){
    if(typeof idade === 'number'){
        console.log(`O Nome é ${nome} e tem ${idade} anos`);
        console.log("Numerico");
    }else{
        console.log(`O Nome é ${nome} e tem ${idade} anos`);
        console.log("string"); 
    
    }
}

exibirPessoa("Teste do Kek", 18)
exibirPessoa("Teste do Kek", 'Dezoito')

type PessoaFisica = {
    nome: string,
    cpf: string
}

type PessoaJuridica = {
    nome: string,
    cnpj: string
}

const pf:PessoaFisica = {
    nome: "hehe",
    cpf: "123456"
}

const pj:PessoaJuridica = {
    nome: "hehe",
    cnpj: "654321"
}

function showPessoa(pessoa: PessoaFisica | PessoaJuridica){
    if((pessoa as PessoaFisica).cpf){
        console.log((pessoa as PessoaFisica).cpf);
    }else{
        console.log((pessoa as PessoaJuridica).cnpj);
    }

    // ou
    if('cpf' in pessoa){
        console.log(pessoa.cpf);
    }else{
        console.log(pessoa.cnpj);
    }
}

showPessoa(pf);
showPessoa(pj);