// UNA DIFERENCIA ENTRE TIPOS E INTERFACES 
// ES QUE LAS INTERFACES SE PUEDEN UNIR
// LOS TIPOS NO SE PUEDEN UNIR
//
// EXPRESS UNO DE LOS FRAMEWORKS MAS IMPORTANTES DE NODE

// ESTO ES LO UNICO QUE LOS TIPOS NO PUEDEN HACER Y LAS INTERFACES SI.
// LAS INTERFACES SE PUEDEN UNIR
interface Express {
    field1: string
    field2: string
}

interface Express {
    field3: string
}

const app: Express = {
    field1: "value1",
    field2: "value2",
    field3: "value3"
}