class UserActivity {
    tasks: Array<string> = ["task1","Taks 2","Task3"]
}

class UserSalary {
    amountBytask: number = 100;
    userActivity: UserActivity; //Composicion visible ya que la instancia pasa como argumento

    constructor(userActivity: UserActivity) {
        this.userActivity = userActivity; //Inyeccion de Dependencia o Dependencia Visible o Composicion Visible
    }

    getInformation() {

        return {
            quantityTasks: this.userActivity.tasks.length,
            salary: this.userActivity.tasks.length * this.amountBytask,

        }
    }
}

const userActivity = new UserActivity();
const userSalary = new UserSalary(userActivity);

console.log(userSalary.getInformation());