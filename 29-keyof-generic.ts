// U extends keyof T = "name"


function extract<T extends object, U extends keyof T>(obj: T, prop: U){
    return obj[prop]
}


console.log(extract({name: "sergio", age:30, lastname: "hidalgo"}, "name"))