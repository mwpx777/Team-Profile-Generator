
function Employee(employeeName, employeeId, employeeEmail, role){
    // console.log('this is ' + employeeName)
    this.employeeName = employeeName;

    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
    this.role = role;
}

Employee.prototype.getName = function(){
    return `${this.employeeName}`;
};

Employee.prototype.getId = function(){
    return `${this.employeeName}'s ID number is ${this.employeeId}`;
};

Employee.prototype.getEmail = function(){
    return `${this.employeeName}'s email address is ${this.employeeEmail}`;
};

Employee.prototype.getRole = function(){
    return `${this.employeeName}'s role is ${this.role}`;
};

Employee.prototype.getInfo = function(){
    return{
        employeeName: this.employeeName,
        employeeId: this.employeeId,
        employeeEmail : this.employeeEmail,
        role: this.role
    }
};


module.exports = Employee;