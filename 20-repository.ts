//PATRON REPOSITORIO
//SOLO ES UNA INTERFACE QUE SIRVE DE CAPA EN UNA ARQUITECTURA LIMPIA
//CAPA SUPERIOR - Mientras mas cerca del usuario esta es capa superior
// Una CAPA SUPERIOR no puede depender de una CAPA INFERIOR
// Una CAPA INFERIOR si puede depender de una CAPA SUPERIOR
// EL patron REPOSITORY sire como barrera entre CAPAS.


//CAPA SUPERIOR
class User {
    private readonly id: string
    private fullname: string
    private email: string

    constructor(fullname: string, email: string){
        this.fullname = fullname
        this.email = email
        this.id = (new Date().getTime()).toString()
    }

    properties(){
        return {
            id: this.id,
            fullname: this.fullname,
            email: this.email
        }
    }
}
//PATRON REPOSITORIO ES UNA INTERFACE
//CAPA SUPERIOR
interface UserRepository {
    findUserByEmail(email: string): boolean
    insert(user: User): void // void significa que no devuelva nada
}

//CAPA SUPERIOR
// A UserCreate no le interesa como esta implementado el metodo findUserByEmail
class UserCreate {

    private user!: User // ! ESTE OPERADOR INDICA QUE VARIABLE USER VA A SER SI OSI DE TIPO USER, NO PODRA SER UNDEFINED O NULL
    private usersInMemory: Array<User> = []
    private userMemory: UserRepository

    constructor(userMemory: UserMemory){
        this.userMemory = userMemory
    }

    execute(user: User){
        this.user = user

        const userFound = this.userMemory.findUserByEmail(user.properties().email)

        if(userFound == false){
            this.userMemory.insert(user)
        }
    } 
}

// CAPA INFERIOR
class UserMemory implements UserRepository {
    private usersInMemory: Array<User> = []

    findUserByEmail(email: string){
        const userFound = this.findUser(email)
        return userFound ? true : false
    }

    findUser(email: string)
    {
        return this.usersInMemory.find((item: User) => item.properties().email === email )
        
    }

    insert(user: User){
        this.usersInMemory.push(user)
        console.log(this.usersInMemory)
    }
}


const user1 = new User("jasem valencia","jasemvalencia@gmail.com")
const user2 = new User("jan valencia","janvalencia@gmail.com")
const userMemory = new UserMemory()
const userCreate = new UserCreate(userMemory)
userCreate.execute(user1)
userCreate.execute(user2)
