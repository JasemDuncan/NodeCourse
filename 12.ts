class Userr{
    readonly userId = "asdfgsdfddsfdsf";
    protected readonly password = "qwertreasd";
}

class Developer extends Userr{

    getPasswordLength() {
        // this.password = "newPassword";
        return this.password.length
    }

    getUserId(){
        return this.userId;
    }
}

class DeveloperCloud extends Developer{
    getPassword() {
        return this.password;
    }
}

const user1 = new Userr();
console.log(user1.password);

const DeveloperCloud = new DeveloperCloud();

console.log(DeveloperCloud.getPassword());