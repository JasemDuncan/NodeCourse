//GENERICOS
class User {
    readonly id: number
    
    constructor( public name: string, public age: number){
        this.id = new Date().getTime()
    }
}

class Medic {
    readonly id: number

    constructor( public name: string, public age: number, public cmp: number){
        this.id = new Date().getTime()
    }
}

class Patient {
    readonly id: number

    constructor( public name: string, public age: number){
        this.id = new Date().getTime()
    }
}

/*
//Clase para hacer la persistencia
class UserDB {
    insert(user: User) {
        console.log("user",user)
    }
}

class MedicDB {
    insert(medic: Medic) {
        console.log("medic", medic)
    }
}

class PatientDB {
    insert(patient: Patient) {
        console.log("medic", patient)
    }
}
*/

// APLICAR GENERICOS
// En lugar de estar creando varias clases, creas un GENERICO
class EntityDB<Entity> {
    insert(entity: Entity){
        console.log("Entity",entity)
    }
}

const user = new User("Claudia",20)
const medic = new Medic("Rosa",40, 123)
const patient = new Patient("Jorge", 50)
//USAMOS EL GENERICO
const userDB = new EntityDB<User>()
userDB.insert(user)

const medicDB = new EntityDB<Medic | User>()
medicDB.insert(medic)

const patientDB = new EntityDB<Patient>()
patientDB.insert(patient)

/*
const userDB = new UserDB()
userDB.insert(user)

const medicDB = new MedicDB()
medicDB.insert(medic)

const patientDB = new PatientDB()
patientDB.insert(patient)
*/