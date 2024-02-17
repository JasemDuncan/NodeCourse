interface PatientProperties {
    patientId: string,
    firstname?: string,
    lastname?: string,
    age?: number,
    gender?: string,
    email?: string
}

class Patient {
    patientId: string
    firstname: string
    lastname: string
    age: string
    gender: string
    email: string

    constructor(props: Partial<PatientProperties>){
        Object.assign(this,props)
    }

}

const props: Partial< PatientProperties> = {
    patientId: "asdadasd",
    /*firstname: "jasem",
    lastname: "male",
    age:35,
    gender: "male",
    email: 'j@f.com'*/
}

const patient = new Patient(props)

console.log(patient);