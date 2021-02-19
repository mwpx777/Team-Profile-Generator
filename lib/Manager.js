const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(employeeName, role, employeeId, employeeEmail, officeNumber) {
        super(employeeName, employeeId, employeeEmail )
        this.officeNumber = officeNumber
        this.role = role
        

        Manager.prototype.getOfficeNumber = function () {
            return `${this.employeeName}'s office number is ${this.officeNumber}`;
        };


        Manager.prototype.getInfo = function () {
            return {
                employeeName: this.employeeName,
                // role: this.role,
                employeeId: this.employeeId,
                employeeEmail: this.employeeEmail,
                officeNumber: this.officeNumber,
               
            }
        }

    }
}
module.exports = Manager;
