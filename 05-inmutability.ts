class User {
    readonly name: string
    email: string
    private password: string

    constructor() {
        this.name = "crios";
        this.email = "jasemvalencia@gmail.com";
        this.password = "qwertreasd";
    }

    changeRandomPassword() {
        const newPassword = this.password + (Math.random()*100 + 1).toString;
        this.password = newPassword;
}

const user = new User();

console.log("user: ", user);
console.log("name: ", user.name);
console.log("email: ", user.email);
//el valor de name solo podra ser cambiado en el contructor o al declararr la variable en el readonly
//Por eso es inmutable