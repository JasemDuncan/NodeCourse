class userActivity {

}

class UserSalary {
    amountBytask: number = 100;

    constructor(userActivity: userActivity) {
        this.userActivity = userActivity;
    }

    getInformation() {

        return {
            quantityTasks: this.userActivity.tasks.length,
            salary: this.userActivity.tasks.length * this.amountBytask,

        }
    }
}

const userActivity = new userActivity();
const userSalary = new UserSalary(userActivity);

console.log(UserSalary.getInformation());