

class Animal {
    race: string = "Siberian Husky";
    color: string = "Black"
    esMamal: boolean = true; 

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

const animal = new Animal();
console.log("animal: ", animal);
console.log("race: ", animal.race);
console.log("color: ", animal.color);
console.log("esMamal: ", animal.esMamal);