// GENERICOS CON INTERFACES

// Funcion Interface generica
interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy >(element: T): [T, string]{
    return [element, `Total: ${element.length}`]
}

//console.log(countAndDescribe(["Futbol","Voley"]))
console.log(countAndDescribe([30,40,50,"20",true]))