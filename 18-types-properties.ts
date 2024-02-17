type Numerico = number
const age: Numerico = 30

type TypeId = number | string

const userId: TypeId = "asdasdsadasd"

const medicId: TypeId = 12312321;

type CountryISO = "PE" | "CO" | "CL" | "MX"

const patientCountry: CountryISO = "PE"

class User {
    firstname: string
    lastname: string
}

class Printer {
    area: string,
    brand: string,
    model: string,
    year: number
}

type ElementClass = User | Printer

const obj: ElementClass = new User()

const printer: ElementClass = new Printer()






interface PatientRequired {
    patientId: string,
    gender: string

}

interface PatientOptional {
    firstname: string,
    lastname: string,
    age: number,
    email: string
}

type PatientProperties = PatientProperties & Partial<PatientOptional>

class Patient {
    patientId: string
    firstname: string
    lastname: string
    age: string
    gender: string
    email: string

    constructor(props: PatientProperties){
        Object.assign(this,props)
    }

}

const props: PatientRequired & Partial<PatientOptional> = {
    patientId: "asdadasd",
    gender: "male"
}

const patient = new Patient(props)

console.log(patient);