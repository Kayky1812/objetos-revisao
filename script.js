// para acessar alguma coisa de um objeto podemos utilizar 

//notação de colchetes console.log(pessoa['nome])
// notação de ponto console.log(pessoa.nome)

//alem da forma normal, posso criar um objeto da seguinte maneira 

const pessoa = {
    nome: "Lulu",
    Sobrenome: "Barbosa"
}

const pessoa1 = new Object();
pessoa1.nome = "Kayky"
pessoa1.Sobrenome = "Santos"

console.log(pessoa1,pessoa)


function criaPessoa(nome,sobrenome,terceiroNome){       //factory function
    return{
        nome,
        sobrenome,
        terceiroNome,
        get nomeCompleto(){         //get faz essa função se passar por um atributo 
            return `${this.nome} ${this.sobrenome} ${this.terceiroNome}`;
        }
    }
}
const p1 = criaPessoa("Kayky", "Santos", "Couto")
console.log(p1.nomeCompleto)        //se eu nao tivesse usado o get. teria que usar () após o nome completo 


function Pessoa(nome,sobrenome) {           //função construtora 
    this.nome = nome;                       // O nome da função construtora começa com maiuscula 
    this.sobrenome = sobrenome;

    this.Fullname = function (){
        return this.nome + " " +  this.sobrenome
    }
}    

const p2 = new Pessoa("Luciana", "Barbosa")

console.log(p2.Fullname());

//objeto.freeze()   serve para travar e nao conseguir fazer alteraçoes 