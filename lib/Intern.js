const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(employeeName, role, employeeId, employeeEmail, school) {
        super(employeeName, employeeId, employeeEmail )
        this.school = school
        this.role = role



        Intern.prototype.getSchool = function () {
            return `${this.employeeName}'s attends ${this.school}`;
        };

        

        Intern.prototype.getInfo = function () {
            return {
                employeeName: this.employeeName,
                role: this.role,
                employeeId: this.employeeId,
                employeeEmail: this.employeeEmail,
                school: this.school,
            }
        }
    }
}
module.exports = Intern;