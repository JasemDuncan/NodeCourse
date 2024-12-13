class Medic {
    name: string
    lastname: string
    cmp: string
    email: string
    age: number
    speciality: string
    subSpeciality: string
    //createdAt!: Date //1 una forma para que se optional es usar ?
    createdAt: Date//Otra Forma es declarar como partial este las props

    constructor(props: MedicProperties) { //Tambine poner partial al igual que el props que se seta pasando
        this.name = props.name
        this.lastname = props.lastname    
        this.cmp = props.cmp
        this.email = props.email
        this.age = props.age
        this.speciality = props.speciality
        this.subSpeciality = props.subSpeciality
        if(props.createdAt){
            this.createdAt= props.createdAt
        } else {
            this.createdAt = new Date()
        }
        
    }
}

// Clean Code dice que si hay mas de 3 parametros se puede generar un objecto
//creamos una interface para ahi poner los parametros
interface MedicEssentials {
    name: string
    lastname: string
    cmp: string
    email: string
    age: number
    speciality: string
    subSpeciality: string
    
}

interface MedicOptional {
    createdAt?: Date 
}

// Metodo 3 : Crear un tipo
type MedicProperties = MedicEssentials & Partial<MedicOptional>

//const props: Partial<MedicProperties> = {// esta es una solucion al usar partial
const props: MedicProperties = {
    name: "Jasem",
    lastname: "Valencia",
    cmp:"123",
    email:"jasem@fmad.com", 
    age: 36,
    speciality : "Traumatologia",
    subSpeciality : "Traumatologia pediatrica",
    //createdAt: new Date()
}
const medic = new Medic(props)
console.log(medic)