const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(employeeName, employeeId, employeeEmail, role, school) {
        super(employeeName, employeeId, employeeEmail, role)
        this.school = school



        Intern.prototype.getSchool = function () {
            return `${this.employeeName}'s attends ${this.school}`;
        };

        

        Intern.prototype.getInfo = function () {
            return {
                employeeName: this.employeeName,
                employeeEmail: this.employeeEmail,
                role: this.role,
                employeeId: this.employeeId,
                school: this.school,
            }
        }
    }
}
module.exports = Intern;