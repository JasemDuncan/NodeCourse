class User {
    private readonly id:string
    private fullname:string
    private email:string

    constructor(fullname: string, email: string){
        this.fullname = fullname
        this.email = email
        this.id = (new Date().getTime()).toString()

    }

    properties() {
        return {
            id: this.id,
            fullname: this.fullname,
            email: this.email
        }
    }
}

interface UserRepository {
    findUserByEmail(email: string): boolean
    insert(user: User): void
}

class UserCreate {
    private user!: User
    private usersInMemory: Array<User> = []
    private userMemory: UserRepository

    constructor(userMemory: UserRepository){
        this.userMemory = userMemory
    }

    execute(user: User) {
        this.user = user

        //const userMemory: UserRepository = new UserMemory()

        const userFound = this.userMemory.findUserByEmail(user.properties().email)

        if(!userFound ===false){
            this.userMemory.insert(user)
        }
            
    }
}

class UserMemory implements UserRepository{

    private usersInMemory: Array<User> = []

    findUserByEmail(email: string){
        const userFound= this.findUser(email)
        return userFound ? true : false
    }

    findUser(email: string){
        return this.usersInMemory.some((item: User) => item.properties().email === email)
    }

    insert(user: User){
        this.usersInMemory.push(user)
        console.log(this.usersInMemory)
    }
} 

const user = new User("Cristina Valdez", "cval@fa.com")
const userCreate = new UserCreate(user)
userCreate.execute(user)