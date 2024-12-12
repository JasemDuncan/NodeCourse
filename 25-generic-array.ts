//GENERICOS
// Generio significa que puede usar diferentes tipos
// Se se puede ver esta variando el tipo de dato del arreglo 
// Array es una interfaz generica

const users: Array<string> = ["Luis","Carla"]
const statusTask: Array<boolean> = [true,false]
const personas: Array<{name: string, age: number}> = [
    {name: "Jose", age: 15},
    {name: "Rosa", age: 20}
]

personas.push({name: "perla", age: 25})

const clients: Array< string | { name: string, id: number}> = ["Javier",{name: "Rosa", id: 30}] //Generico 2
