function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto= function(quantia){
    this.preco -= quantia;
};

function Camiseta (nome,preco,cor){
    Produto.call(this, nome, preco);
    this.cor = cor;

}
function Caneca (nome,preco,material,estoque){
   Produto.call(this,nome,preco);
   this.material = material; 

   Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable:false,
        

        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }

    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


//copiando o prototype de produto para camiseta
Camiseta.prototype = Object.create(Produto.prototype);
//mudando o nome do construtor para Camiseta
Camiseta.prototype.constructor = Camiseta;
//criando uma função para dar um aumento com porcentagem
Camiseta.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco *(percentual/100));
}

const produto = new Produto("Gen", 111)
const camiseta = new Camiseta("regata", 10, "Preta")
const caneca = new Caneca ("Caneca da Marvel",20,"Vidro", 5)


caneca.estoque = 100;

camiseta.aumento(10)
caneca.aumento(10)

console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta)
console.log(produto)

