/*
class Animal{
    constructor(nome, idade, peso, porte){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.porte = porte;
    }
    dormir(){
        console.log('O animal está dormindo')
    }
    comer(){
        console.log('O animal está comendo')
    }
    listarCaracteristicas(){
        console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}, porte: ${this.porte}`)
    }
}
class Cachorro extends Animal{
    constructor(nome, idade, peso, porte,patas){
        super(nome, idade, peso, porte);
        this.patas = patas;
    }
    correr(){
        console.log('O cachorro está correndo');
    }
}
class Peixe extends Animal{
    constructor(nome, idade, peso, porte,nadadeiras){
        super(nome, idade, peso, porte);
        this.nadadeiras = nadadeiras;
    }
    nadar(){
        console.log('O peixe está nadando');
    }
}
class Passaro extends Animal{
    constructor(nome, idade, peso, porte,asas){
        super(nome, idade, peso, porte);
        this.asas = asas;
    }
    voar(){
        console.log('O passaro está voando');
    }
}

let peixe = new Peixe('Alfredo',10,2,'Pequeno',2);
let passaro = new Passaro('Cosmo',2,5,'Médio',2);
let cachorro = new Cachorro('Nina',4,19,'Grande',4);

console.log(`${cachorro.correr()}, ${passaro.voar()}`)
console.log(`${cachorro.dormir()}, ${peixe.comer()}`)
console.log(peixe.listarCaracteristicas());
console.log(`O peixe possui ${peixe.nadadeiras} nadadeiras`);
*/

//Correção
/*
class Animal{
    constructor(patas){
        this._patas = patas;
    }
    patas(){
        console.log(this._patas);
    }
    respirar(){
        console.log('respirando');
    }
    comer(){
        console.log('comendo');
    }
}

class Gato extends Animal{
    constructor(patas){
        super(patas);
    }
    miar(){
        console.log('miau');
    }
}

class Cachorro extends Animal{
    constructor(patas){
        super(patas);
    }
    latir(){
        console.log('auau');
    }
}

let dog = new Cachorro(4);
let cat = new Gato(4);
dog.respirar();
cat.miar();
dog.latir();*/

/*

class Animal {
    constructor(especie) {
      this.especie = especie;
    }
    tipo() {
      console.log(`Especie: ${this.especie}`);
    }
    comer() {
      console.log(`${this.especie} está comendo..`);
    }
  }
  class Ave extends Animal {
    constructor(especie, temAsa) {
      super(especie);
      this.temAsa = temAsa;
    }
    voar() {
      if (this.temAsa) {
        console.log(`${this.especie} está voando..`);
      } else {
        console.log(`${this.especie} não pode voar`);
      }
    }
  }
  class Peixe extends Animal {
    constructor(especie, estaNadando) {
      super(especie);
      this.estaNadando = estaNadando;
    }
    nadar() {
      if (this.estaNadando) {
        console.log(`${this.especie} está nadando..`);
      } else {
        console.log(`${this.especie} parou de nadar`);
      }
    }
    set inverter(situação) {
      this.estaNadando = situação;
    }
  }
  let ave = new Ave('avestruz', false);
  let peixe = new Peixe('sardinha', true);
  ave.tipo();
  ave.comer();
  ave.voar();
  peixe.tipo();
  peixe.nadar();
  peixe.inverter = false;
  peixe.nadar();


  class Animal {
    constructor(nome,tipo,idade){
        this.nome = nome
        this.tipo = tipo
        this.idade = idade
    }
    status(){
        console.log(`${this.nome} é um ${this.tipo} e tem ${this.idade} anos. `)
    }
    falar(){
        console.log(`${this.nome} Falando..`)
    }
    mover(){
        console.log(`${this.nome} Andando..`)
    }
}
class Passaro extends Animal{
    constructor(nome,tipo,idade){
        super(nome,tipo,idade)
    }
    mover(){
        console.log(`${this.nome} Voando..`)
    }
    falar(){
        console.log(`${this.nome} Piando..`)
    }
}
class Cachorro extends Animal{
    constructor(nome,tipo,idade,raca){
        super(nome,tipo,idade)
       this.raca = raca
    }
    falar(){
        console.log(`${this.nome} Latindo...`)
    }
    mover(){
        console.log(`${this.nome} Correndo..`)
    }
}
class Baleia extends Animal{
    constructor(nome,tipo,idade){
        super(nome,tipo,idade)
    }
    mover(){
        console.log(`${this.nome} Nadando..`)
    }
}
let arara = new Passaro()
arara.nome = 'arara'
arara.mover()
arara.falar()
arara.tipo = 'pássaro'
arara.idade = 15
arara.status()
let cachorro1 = new Cachorro()
cachorro1.nome = 'Cachorro'
cachorro1.raca = 'Poodle'
cachorro1.falar()
cachorro1.mover()
cachorro1.tipo = 'mamifero'
cachorro1.idade = 4
cachorro1.status()
let baleia1  = new Baleia()
baleia1.nome = 'Baleia'
baleia1.tipo = 'mamífero'
baleia1.mover()
baleia1.idade = 20
baleia1.status()*/

