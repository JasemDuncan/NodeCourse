class User {
    readonly id: string;
    name: string;
    email: string;
    private password: string;

    constructor() {
        this.name = "crios";
        this.email = "jasemvalencia@gmail.com";
        this.password = "qwertreasd";
    }

    changeRandomPassword() {
        const newPassword = this.password + (Math.random()*100 + 1).toString;
        this.password = newPassword;
    }
}

const user = new User()
console.log(`name: ${user.name}`)
user.id="asdas"
// console.log("email: ", user.email)
// console.log("email: ", user.changeRandomPassword)
