const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, role, officeNumber, teamName) {
        super(employeeName, employeeId, employeeEmail, role )
        this.officeNumber = officeNumber
        this.teamName = teamName

        Manager.prototype.getOfficeNumber = function () {
            return `${this.employeeName}'s office number is ${this.officeNumber}`;
        };


        Manager.prototype.getInfo = function () {
            return {
                employeeName: this.employeeName,
                employeeEmail: this.employeeEmail,
                role: this.role,
                employeeId: this.employeeId,
                officeNumber: this.officeNumber,
                teamName: this.teamName
            }
        }

    }
}
module.exports = Manager;