// PRIMERA FORMA CON ?
//? as optional
/*interface PatientProperties {
    patientId: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    gender: string;
    email?: string;
}*/

interface PatientProperties {
    patientId: string;
    firstName: string;
    lastNam: string;
    age: number;
    gender: string;
    email: string;
}

class Patient {
    patientId: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;

    //constructor(props: PatientProperties){
    constructor(props: Partial<PatientProperties>){ // PARA LA SEGUNDA FORMA TAMBIEN CAMBIAR ACA A PARTIAL
        Object.assign(this, props)
    }
}

//SEGUNDA FORMA CON PARTIAL, CON ESTA FORMA CUALQUIERA DE ESOS CAMPOS PODRIA NO TENER VALOR.
const props: Partial<PatientProperties> = {
    patientId: "asdadd3",
    //firstName: "Jasem",
    //lastName: "Valencia",
    //age: 36,
    gender: "Male",
    //email: "jasemvalencia@gmail.com"
}

const patient = new Patient(props)

console.log(patient)