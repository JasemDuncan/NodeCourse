// GenericTransformStream
// GENERIC CONSTRAINTS
// Hacer generica una clase

class DataStorage<T extends string | number | boolean> { // Se peude espeficar unicamente de donde extenderia / heredaria
    private data: Array<T> = []

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        if(this.data.indexOf(item)===-1) return;

        this.data.splice(this.data.indexOf(item) , 1)
    }

    getItems() {
        return [...this.data]
    }
}

const storageText = new DataStorage<string>()
storageText.addItem("Joe")
storageText.addItem("Nike")
storageText.addItem("Jasem")
storageText.removeItem("Nike")

console.log(storageText.getItems())


const storageNumber = new DataStorage<number>()
storageNumber.addItem(10)
storageNumber.addItem(2)
storageNumber.addItem(5)
storageNumber.removeItem(2)

console.log(storageNumber.getItems())

const storageBoolean = new DataStorage<boolean>()
storageBoolean.addItem(true)
storageBoolean.addItem(false)
storageBoolean.addItem(false)
storageBoolean.removeItem(true)

console.log(storageBoolean.getItems())


//se pone el extent en el generico para qualityLimitationResolutionChanges
//const storageObject = new DataStorage<object>()
