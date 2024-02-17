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


class Patient {
    patientId: string
    firstname: string
    lastname: string
    age: string
    gender: string
    email: string

    constructor(props: PatientRequired & Partial<PatientOptional>){
        Object.assign(this,props)
    }

}

const props: PatientRequired & Partial<PatientOptional> = {
    patientId: "asdadasd",
    gender: "male"
}

const patient = new Patient(props)

console.log(patient);