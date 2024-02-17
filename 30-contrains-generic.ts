class DataStorage<T> {
    private data: Array<T> = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if(this.data.indexOf(item)===1) return;
        this.data.splice(this.data.indexOf(item),1)
    }

    getItems() {
        return [...this.data]
    }
}

const storageText = new DataStorage<string>()
storageText.addItem("joe")
storageText.addItem("mike")
storageText.addItem("john")
storageText.removeItem("mike")
console.log(storageText.getItems())


const storageNumber = new DataStorage<number>()
storageNumber.addItem(22)
storageNumber.addItem(33)
storageNumber.addItem(22)
storageNumber.removeItem(33)
console.log(storageNumber.getItems())

const storageBoolean = new DataStorage<boolean>()
storageBoolean.addItem(true)
storageBoolean.addItem(false)
storageBoolean.addItem(true)
storageBoolean.removeItem(false)
console.log(storageBoolean.getItems())


