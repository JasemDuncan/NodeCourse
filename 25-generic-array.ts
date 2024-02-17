const users: Array<string> = ["Luis","Carla"]
const statusTask: Array<boolean> = [true,false,false,true]
const person: Array<{name: string, age: number}> = [
    {name: "Jose", age:20},
    {name: "Rosa", age: 30}
]

person.push({name: "jasem", age: 35})

const clients: Array<string | {nombre: string, id: number}> = ["javier", {name: "Duncan", id:30}]

class User {

    readonly id: number
    constructor(public name: string, public age: number){
        this.id=new Date().getTime()
    }
}

class Medic {
    readonly id: number
    constructor(public name: string, public age: number){
        this.id = new Date().getTime()
    }
}

class Patient {
    readonly id: number
    constructor(public name: string, public age: number){
        this.id = new Date().getTime()
    }
}

/*class UserDB{
    insert(user: User) {
        console.log("user", user)
    }
}

class MedicDb {
    insert(medic: Medic){
        console.log("medic", medic)
    }
}

class PatientDB {
    insert(patient: Patient){
        console.log("patient", patient)
    }
}
*/

class EntityDB<T>{
    insert(entity: T){
        console.log("entity", entity)
    }
}


const user = new User("Claudia", 20 )
const medic = new Medic("Oscar",30)
const patient = new Patient("jose",40)

const userDB = new EntityDB<User>()
userDB.insert(user)

const medicDB = new EntityDB<Medic>()
medicDB.insert(medic)

const patientDB = new EntityDB<Patient>()
patientDB.insert(patient)

/*const userDB = new UserDB()
userDB.insert(user)

const medicDB = new MedicDb()
userDB.insert(user)

const patientDB = new PatientDB()
userDB.insert(user)
*/