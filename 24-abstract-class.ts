abstract class Upload {
    abstract newFileName: string
    abstract save(file: File): void

    abstract uploadFinish(): void

    status(percent: number){
        console.log("Percent uploaded", percent)
        this.uploadFinish()
    }

}

class UploadAWS extends Upload {
    newFileName!: string

    constructor(newFileName: string){
        super()
        this.newFilename = newFileName
    }

    save(file: File) {
        console.log("name", file.name)
    }

    override status(percent: number){
        console.log(`Percent uploaded: ${percent}% `)
    }

    uploadFinish() {
        console.log("File uploaded")
    }


}

const file = new File(["data"], "report.pdf", {type: "application/pdf"})
const upload = new UploadAWS(new Date().getTime().toString())
upload.save(file)