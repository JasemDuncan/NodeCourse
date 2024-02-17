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

    get amount() {
        return this.amountBytask;
    }

    set amount(amount: number) {

        if(amount<50) throw new Error("The amount is too low");
        this.amountBytask = amount;
    
    }
}

const userActivity = new userActivity();
const userSalary = new UserSalary(userActivity);


userSalary.amount=400;

console.log(UserSalary.getInformation());
console.log(UserSalary.amount());