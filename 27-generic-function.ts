/*function merge(objA: object, objB: object){
    return Object.assign(objA, objB)
}
*/
//change to generic

function merge<T01 extends object, T02> (objA: T01, objB: T02) {
    return Object.assign(objA, objB)
}


console.log(merge<{name: string}, {lastname: string}>({name: "luis"},{lastname:"perez"}))