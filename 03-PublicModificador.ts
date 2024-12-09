class Animal2 {
    race: string 
    color: string
    esMamal: boolean

    // race = "Siberian Husky"
    // color = "Black"
    // esMamal = true 

    constructor() {
        this.race = "Siberian Husky";
        this.color = "Black";
        this.esMamal = true;
    }

    description() { 
        return {
            race: this.race,
            color: this.color,
            esMamal: this.esMamal
        }
    }
}

const animal = new Animal2();
console.log("animal: ", animal);
console.log("race: ", animal.race);
console.log("color: ", animal.color);
console.log("esMamal: ", animal.esMamal);
console.log(animal.description());