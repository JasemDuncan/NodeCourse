class Animal {
    breed: string
    color: string
    
    constructor(breed: string, color: string){
        this.breed = breed
        this.color = color        
    }

    description(){
            return `breed: ${this.breed}, color: ${this.color}`
    }
}

class Mamal extends Animal
{
    origins: Array<string> 

    constructor(origins: Array<string>, breed: string, color: string){
        super( breed,color); //Para llamar al metodo constructor del padre
        this.origins = origins
    }
}


const anime = new Animal("Feline","Brown")

//console.log(anime)

const mamal = new Mamal(["Antartida","Patagonia"],"Giraja","Orange")
console.log(mamal)