interface UserProperties {
    userId:string
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
    tall: number
}

interface Actions {
    update: () => void,
    delete: ()  => void,
    reconstitute: () => void
}

const props: UserProperties = {
    userId: "123",
    firstName: "Jaem",
    lastName: "Valencia",
    age: 25,
    gender: "male",
    email: "jasemvalencia@gmail.com",
    tall: 1.75
}

class User2 implements Actions{
    userId: string
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
    tall: number

    // constructor(    
    //     userId: string,
    //     firstName: string,
    //     lastName: string,
    //     age: number,
    //     gender: string,
    //     email: string,
    //     tall: number
        
    //     ) {

    constructor(props: UserProperties) {
        this.userId = props.userId;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.age = props.age;
        this.email = props.email;
        this.tall = props.tall;
    }

    update() {}
    delete () {}
    reconstitute() {}
}

const userProps = {
    userId: "123",
    firstName: "Jaem",
    lastName: "Valencia",
    age: 25,
    gender: "male",
    email: "j@j.com",
    tall: 175
}

//const user = new User2("123", "Jaem", "Valencia",25,"male","a@g.com",175 );
const user = new User2(userProps);

console.log("user: ", user);
