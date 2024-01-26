//defineProperty - defineProperties 

// function Produto(nome,preco,estoque){
//     this.nome = nome;
//     this.preco = preco;
    

//     Object.defineProperty(this, 'estoque',{
//         enumerable : true,      //indica se a propriedade aparecerá em iterações for...in e Object.keys()
//         value: estoque, //o valor 
//         writable: false,  //indica se posso alterar o valor
//         configurable: false,    //indica se posso apagar, ou edita a chave (reconfigurala)
//     });

    //caso configurable estivesse true, eu poderia criar uma nova define.property e alterar as configuraçoes 

    // Object.defineProperty(this, 'estoque',{
    //     enumerable : true,      //indica se a propriedade aparecerá em iterações for...in e Object.keys()
    //     value: estoque, //o valor 
    //     writable: false,  //indica se posso alterar o valor
    //     configurable: false,    //indica se posso apagar, ou edita a chave (reconfigurala)
    // });


//define properties serve para definir mais de uma propriedade 
//nesse caso, podemos dar configuraçoes diferentes para cada uma das chaves 

// Object.defineProperties(this, {
//     nome: {
//         enumerable : true,      
//         value: estoque, 
//         writable: false,  
//     },
//     preco:{
//         enumerable : true,      
//         value: estoque,  
//         writable: false,  
//         configurable: false,
//     }
// })


// const p1 = new Produto ("Camisa", 20 , 3)

// console.log(p1)


    //getters e setters
    // são uma maneira de proteger a propriedade
    //get obtem o valor e set configura o valor

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque',{
        enumerable : true,         
        configurable: false,   
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }
            console.log((valor))
        }
    });
}

const p1 = new Produto ("Camisa", 20 , 25)

// console.log(p1)
p1.estoque = 100
console.log(p1.estoque)



