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

class User implements Actions{
    userId: string
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
    tall: number


    constructor(props: UserProperties) {
        const properties = {}
        console.log("initial properties: ", properties);
        console.log("props: ", props);
        Object.assign(properties, props);
        console.log("properties: ", properties);
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
const user = new User(userProps);

console.log("user: ", user);
