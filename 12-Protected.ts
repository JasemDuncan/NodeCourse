//TERCER MODIFICADOR DE accessor = PROTECTED
//Primer modificador = PUBLIC
//Segundo modificador = PRIVATE - solo puede ser usado en la clase declarada
//Tercer modificador = PROTECTED - solo va ser accesible de la clase y de sus herencias
class User {
    readonly userId = "asdsadads"
    protected readonly password ="asdadad"

}

class Developer extends User {
    getPasswordLength(){
        return this.password.length
    }

    getUserId(){
        return this.userId
    }
}

class DeveloperCloud extends Developer {
    getPassword(){
        return this.password
    }
}

const user = new User()
//console.log(user.password)
const developerCloud = new DeveloperCloud()
console.log(developerCloud.getPassword())


