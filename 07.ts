class UserActivity {
    tasks: Array<string>= ["task01","task02","task03"]

}

class UserSalary extends UserActivity {
    amountByTask: number = 100;

    getSalary(quantityTasks: number) {
        return quantityTasks * this.amountByTask;
    }

    getInformation() {
        return {
            quantityTasks: this.tasks.length,
            salary: this.tasks.length * this.amountByTask,
            tasks: this.tasks
        }
    }
}   


const UserSalary = new UserSalary();
const UserActivity = new UserActivity();

const quantityTasks = UserActivity.tasks.length;

console.log(UserSalary.getSalary(quantityTasks));

console.log(UserSalary.getInformation());

