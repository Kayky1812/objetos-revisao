// metodos uteis para objetos

const produto ={nome: "caneta", preco: 1.8};
//Object.freeze(produto); //serve para nao conseguir alterar o objeto
//se eu fizesse produto.nome = "outra coisa", nao funcionaria

const outrasCoisa = { ...produto, material:"Porcelana"};

//usando o spreed operator, é uma maneira de copiar o objeto criado anteriormente para caso haja alguma mudança no segundo objeto, n interfira no primeiro 
//outra maneira de copíar, seria 
// const caneca = objeto.assign({},produto)

outrasCoisa.nome = "Kayky"
outrasCoisa.preco = 2.5

console.log(produto);
console.log(outrasCoisa)

console.log(Object.keys(produto)); // aqui eu crio um array com as chaves do objeto produto
console.log(Object.values(produto)) //mostra os valores que tem o objeto
console.log(Object.entries(produto)) // separa em dois arrrays, um com o nome das chaves e o outro com os valores das chaves
console.log('--------------------------')

Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable: false
});

produto.nome = "Outra coisa" //por ter colocado writable como false, nao consigo mais alterar
delete produto.nome; //tbm nao vai funcionar pq configurable esta como false
delete produto.preco; //aqui eu consigo alterar pq so configurei o nome, o preco esta tudo true ainda 
console.log(produto)



console.log("---------------------")

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// aqui ele ta descrevendo as configuraçoes da chave nome no objeto produto, como configurable,weitable, enumerable
