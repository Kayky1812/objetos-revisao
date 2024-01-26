// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto 

    // this.nomeCompleto = function(){
    //     return this.nome + '' + this.sobrenome;
    // }

    //this.nomeCompleto = function(){
    //   return this.nome + '' + this.sobrenome;
    //}

}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// isso serviria para que eu linkasse essa função na classe construtora pessoa, assim que eu instanciasse alguma classe usando pessoa, ja viria automaticamente com essa função



// instância
const pessoa1 = new Pessoa('Luiz', '0.'); //<- Pessoa = Funçāo construtora
const pessoa2 = new Pessoa('Maria', 'A.' ); //<- Pessoa = Funçāo construtora
console.dir (pessoa1);
console.dir(pessoa2);
    
