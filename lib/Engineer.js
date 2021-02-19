const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(employeeName, role, employeeId, employeeEmail, Github) {
        super(employeeName, employeeId, employeeEmail)
        this.Github = Github
        this.role = role

        Engineer.prototype.getGithub = function () {
            return `${this.employeeName}'s Github account is ${this.Github}`;
        };



        Engineer.prototype.getInfo = function () {
            return {
                employeName: this.employeeName,
                role: this.role,
                employeeId: this.employeeId,
                employeeEmail: this.EmployeeEmail,
                Github: this.Github,
            }
        }
    }
}

module.exports = Engineer;