// TIPOS
// Los tipos tambien se pueden trabajar con interfaces

interface PatientRequired {
    patientId: string
    gender: string
}

interface PatientOptional {    
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

type PatientProperties = PatientRequired & Partial<PatientOptional> // Aca estamos creando un tipo con dos interfaces

class Patient {
    patientId: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;

   
    constructor(props: PatientProperties){ 
        Object.assign(this, props)
    }
}

const props: PatientRequired & Partial<PatientOptional> = { // & SIGNIFICA UNION
    patientId: "asdadd3",
    firstName: "Jasem",
    gender: "Male"    
}

const patient = new Patient(props)

console.log(patient)