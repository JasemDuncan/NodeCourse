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

class Patient {
    patientId: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;

   
    constructor(props: PatientRequired & Partial<PatientOptional){ 
        Object.assign(this, props)
    }
}

//Props AHORA SERA LA SUMA DE DOS INTERFACES PatientRequired + PatientOptional
const props: PatientRequired & Partial<PatientOptional> = { // & SIGNIFICA UNION
    patientId: "asdadd3",
    firstName: "Jasem",
    //lastName: "Valencia",
    //age: 36,
    gender: "Male",
    //email: "jasemvalencia@gmail.com"
}

const patient = new Patient(props)

console.log(patient)