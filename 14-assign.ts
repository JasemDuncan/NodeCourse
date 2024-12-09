interface UserProperties {
    userId: string
    firstName: string
    lastName: string
    age:number
    gender: string
    email: string
    tall: number
}
//Las interfaces no necesariamente se aplican a variables.
interface Actions {
    update: ()=> void //el Void significa que no me devuelva nada
    delete: ()=> void
    reconstitute: () => void
}

/*const props: UserProperties = {
    userId: "asdadasd",
    firstName: "jasem",
    lastName: "valencia",
    age: 36,
    gender: "Male",
    email: "jasemvalencia@gmail.com",
    tall: 175
}*/

//Una clase puede implementar mas de un interface
class User implements Actions, UserProperties {

    userId: string
    firstName: string
    lastName: string
    age:number
    gender: string
    email: string
    tall: number

    constructor( props: UserProperties)
    {
        //Existe en javascript el metodo ASIGN que pertenece ala clase OBJECT
        //Metodo 1
        /*const properties = {}
        console.log("Initial properties", properties)
        console.log("Props",props)
        Object.assign(properties, props)
        console.log("Properties",properties)*/
        
        //Metodo 2
        Object.assign(this, props)

    }

    update() {}
    
    delete(){}

    reconstitute(){}
}

//Clean Code, apartir de 3 parametros deberiamos reducir a 1 solo que agrupe los 3.

const userProps: UserProperties ={
    userId: "asdasdasd",
    firstName: "JasemDuncan",
    lastName: "Vargas",
    age: 36,
    gender: "male",
    email: "jasem@gmail.com",
    tall: 175
}

//Con clean code
const user = new User(userProps)
console.log(user);