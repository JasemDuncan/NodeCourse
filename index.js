class Database {
    username
    password
    host

    users=[]

    constructor(username, password, host){
        this.username = username
        this.password = password
        this.host = host
    }

    insert(name){
        this.users.push(name)
    }
    list(){
        return this.users                           
    }
}



class User {
    user = []
    databse

    connect(username, password, host){
        this.databse = new Database(username, password, host)
    }

    insert (name){
        this.databse.insert(name)
    }

    list() {
        return this.user;
    }
}

const a = new User()
a.insert('Jaem')
a.insert('Jaem2')
a.insert('Jaem3')
a.insert('Jaem4')
const list = a.list()
console.log("usr list", list) // ['Jaem']
