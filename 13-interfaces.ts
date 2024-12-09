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

    /*constructor( userId: string, firstName: string, lastName: string, age:number, gender: string, email: string, tall:number)
    {
        this.userId=userId;
        this.firstName=firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.tall = tall;
    }*/

    constructor( props: UserProperties)
    {
        this.userId=props.userId;
        this.firstName=props.firstName;
        this.lastName = props.lastName;
        this.age = props.age;
        this.gender = props.gender;
        this.email = props.email;
        this.tall = props.tall;
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
//Esto sin clean code
//const user = new User("asdasd","duncan","valencia",36,"male","duncna@gmail.com",175)

//Con clean code
const user = new User(userProps)
console.log(user);