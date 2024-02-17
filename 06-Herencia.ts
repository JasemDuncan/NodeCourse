class Animal {
    breed: string
    color: string

    constructor(breed: string, color: string) {
        this.breed = breed;
        this.color = color;
    }

    description() {
        return {
            breed: this.breed,
            color: this.color
        }
    }
}

class Mamal extents Animal {
    origins: Array<string> 
    constructor (origins: Array<string>) {
        super(breed,color);
        this.origins = origins;
    }
}  

const animal = new Animal("Siberian Husky", "Black");
console.log("animal: ", animal);
const mamal = new Mamal("Siberian Husky", "Black"); 
console.log("mamal: ", mamal);