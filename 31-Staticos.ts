class DataBase {
    private static readonly protocol ="https" // tambien usar estatico ya que se esta usando dentro de un metodo estatico

    //Cada vez que se usa statico no se puede instanciar sino usar la clase.
    static getUrlConnection(host: string, username: string, password: string, schema: string) {
        return `${this.protocol}://${host}/${username}:${password}/${schema}`
    }

    static getProtocol() {
        return this.protocol
    }

    // Desde un metodo no estatico podemos entrar a una propiedad haciendo referencia a la clase
    returnCurrentProtocol () {
        return DataBase.protocol
    }
}

const database = new DataBase()
console.log(DataBase.getUrlConnection("localhost","user01","pass01","product"))
console.log(DataBase.getProtocol())
console.log(database.returnCurrentProtocol())