// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail:true
// }

class Animal{
    static type = "tipo ANIMALE"
    constructor(options){
        this.animalName = options.animalName;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice(){
        console.log("I am animal")
    }
}

let animal = new Animal({
    animalName: "gatto",
    age: 4,
    hasTail: true
})

console.log(animal);

//chiamo il metodo di questa classe
// console.log(animal.voice());

//accedere alle rpoprietà static sollo dentro la classe
console.log(Animal.type)

// console.log(animal.type) cosi accedo al oggetto e non funziona


//extends

class Cat extends Animal{
    static type = "CAT"

    constructor(options){
        super(options) //chiamo tutte le options della classe genitore
        this.color = options.color //cosi posso aggiungere qualcosa di nuovo 
    }

    voice(){
     
    super.voice() //posso chiamare il metodo del genitore
     console.log("meow")//posso cambiare i metodi del genitore
    }

    get ageInfo(){
        return this.age * 7
    }

    
    set ageInfo(param){
        this.age = param
    }
}

let cat = new Cat({
    animalName: "cat",
    age: 7,
    hasTail: true,
    color: "black"
})

console.log(cat.voice())