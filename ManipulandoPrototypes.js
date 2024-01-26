const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C'
//para dizer que o B vai ser um prototipo do A 

Object.setPrototypeOf(objB,objA);
Object.setPrototypeOf(objC,objB);

const prototipo = Object.getPrototypeOf(objB)



function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
} 

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco *(percentual /100)); 
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual /100));
}

const p1 = new Produto('camisa', 100);
// se eu quisesse utilizar as funçoes de aumento e desconto eu teria que fazer

// const p2 = new Produto("Lapis", 2) ou

const p2 ={
    nome: "Lapis",
    preco: 2

};

Object.setPrototypeOf(p2, Produto.prototype) //Nessa linha estou atirbuindo o prototype de Produto ao meu p2


//outra maneira de criar um produto e atribuir o prototype
const p3 = Object.create(Produto.prototype);
p3.nome = "Bola"
p3.preco = 100;
p3.aumento(10);
console.log(p3)


p2.aumento(50)
console.log(p2)
// p1.desconto(50)
p1.aumento(50)
console.log(p1)

