var User = /** @class */ (function () {
    function User() {
        this.name = "crios";
        this.email = "jasemvalencia@gmail.com";
        this.password = "qwertreasd";
    }
    User.prototype.changeRandomPassword = function () {
        var newPassword = this.password + (Math.random() * 100 + 1).toString;
        this.password = newPassword;
    };
    return User;
}());
var user = new User();
console.log("name: ".concat(user.name));
// console.log("email: ", user.email)
// console.log("email: ", user.changeRandomPassword)
