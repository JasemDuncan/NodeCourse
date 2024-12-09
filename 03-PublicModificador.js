var Animal2 = /** @class */ (function () {
    // race = "Siberian Husky"
    // color = "Black"
    // esMamal = true 
    function Animal2() {
        this.race = "Siberian Husky";
        this.color = "Black";
        this.esMamal = true;
    }
    Animal2.prototype.description = function () {
        return {
            race: this.race,
            color: this.color,
            esMamal: this.esMamal
        };
    };
    return Animal2;
}());
var animal = new Animal2();
console.log("animal: ", animal);
console.log("race: ", animal.race);
console.log("color: ", animal.color);
console.log("esMamal: ", animal.esMamal);
animal.description();
