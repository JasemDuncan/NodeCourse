// GENERIC keyof
// Usa la propiedad de otro generico
function extract<T extends object, U extends keyof T>(obj: T, prop: U) {
    return obj[prop]
}

console.log(extract({name: "Sergio"}, "name"))