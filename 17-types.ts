// TIPOS
// NO SOLO EXISTEN INTERFACES SINO TAMBIEN TIPOS, SE PUEDE HACER PRACTICAMENTE LO MISMO, TIPOS SON MAS MODERNOS.
type Numerico = number
const age: Numerico = 30

//El tipo puede tener mas de un tipo de DateConstructor
type TypeId = number | string
const userId: TypeId= "adad"
const medicId: TypeId = 23432432

type CountryISO = "PE" | "CO" | "CL" | "MX" // Significa que esta variable solo puede recibir alguno de estos valores
const patientCountry: CountryISO = "PE"

class User {
    firstName: string
    lastName: string
}

class Printer {
    area: string
    brand: string
    model: string
    year: number
}

type ElementClass = User | Printer // ACA este tipo puede ser de dos tipos de clases.
const obj: ElementClass = new User()
const printer: ElementClass = new Printer()

