class UserActivity {
    tasks: Array<string> = ["Task1","Taks2","Task3"]
}

class UserSalary {
    amountBytask: number = 100;
    userActivity: UserActivity; //Composicion visible ya que la instancia pasa como argumento

    constructor(userActivity: UserActivity) {
        this.userActivity = userActivity; //Inyeccion de Dependencia o Dependencia Visible
    }

    getInformation() {

        return {
            quantityTasks: this.userActivity.tasks.length,
            salary: this.userActivity.tasks.length * this.amountBytask,
            task: this.userActivity.tasks

        }
    }

    // getAmountByTask(){
    //    return this.amountBytask
    // }

    get amount(){ //USAR GET
        return this.amountBytask
    }

    // setAmountByTask(amount: number){
    //    this.amountBytask = amount
    // }

    set amount(amount: number){ //USAR SET
        //if(amount<50) throw "Amount must be grater than 50"
        if(amount <50){
            this.amountBytask = 50
        } else {
            this.amountBytask = amount
        }
    }

}

const userActivity = new UserActivity();
const userSalary = new UserSalary(userActivity);

userSalary.amount = 20;
console.log(userSalary.getInformation())
console.log(userSalary.amount)

