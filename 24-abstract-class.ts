// ABSTRACT class
// Son como cualquier clase con la unica diferencia que no pueden ser instanciadas.
// Se debe de indicar que metodos o campos van a ser implementados por la clase que herede esos campos.
// Solo sirven para ser heredadas.
// Otra diferencia con las interfaces es que las clases abstract pueden implementar logica

abstract class Upload {
    abstract newFileName: string // Si pongo la palabra abstrac significa que hay que implementarlo

    abstract save(file: File): void // Como tiene abstract igual se debe de implementar

    abstract uploadFinish():void

    status(percent: number){
        console.log("Percent uploaded",percent)
        this.uploadFinish()
    }
}

class UploadAWS extends Upload {
    newFileName!:string

    constructor(newFileName: string){
        super()// Si voy a sobreescribir el contructor tengo que llamar al constructor de la clase que heredo
               // Por eso se llama super() siempre todos tienen constructor.
               // Luego del super recien hacer cualquier modificacion de la clase UploadAWS
         this.newFileName = newFileName
    }

    save(file: File){
        console.log("name:", file.name)
        this.status(30)
    }

    uploadFinish(){
        console.log("File uploaded")
    }

    override status(percent: number){
        console.log(`Percent uploaded: ${percent}%`)
        this.uploadFinish()
    }
}

const file = new File(["Data"], "report.pdf", {type: "application/pdf"})
const upload = new UploadAWS(new Date().getTime().toString())
upload.save(file)
