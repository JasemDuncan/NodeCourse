class UserActivity {
    tasks: Array<string> = ["task1","Taks 2","Task3"]
}

class UserSalary {
    amountByTask =100
    
    getInformation() {
        const userActivity = new UserActivity()//composicion oculta o tambien conocido como Dependencias
        //ya que si colapso o minimo no podre saber que hay una composicion
        return {
            quantityTasks: userActivity.tasks.length,
            salary: userActivity.tasks.length * this.amountByTask,
            tasks: userActivity.tasks
        }
    }
}

const userSalary = new UserSalary()

console.log(userSalary.getInformation())

//En lo posible composiciones en vez de herencia