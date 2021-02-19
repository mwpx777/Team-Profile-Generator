const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, role, Github) {
        super(employeeName, employeeId, employeeEmail, role)
        this.Github = Github

        Engineer.prototype.getGithub = function () {
            return `${this.employeeName}'s Github account is ${this.Github}`;
        };



        Engineer.prototype.getInfo = function () {
            return {
                employeName: this.employeeName,
                employeeEmail: this.EmployeeEmail,
                role: this.role,
                employeeId: this.employeeId,
                Github: this.Github,
            }
        }
    }
}

module.exports = Engineer;