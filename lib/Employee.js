function Employee(name = ''){
    this.name = name;

    this.id = 1
    this.email = 'mwpx777@gmail.com'
    this.role = 'employee'
}

Employee.prototype.getName = function(){
    return `${this.name}`;
};

Employee.prototype.getId = function(){
    return `${this.name}'s ID number is ${this.id}`;
};

Employee.prototype.getEmail = function(){
    return `${this.name}'s email address is ${this.email}`;
};

Employee.prototype.getRole = function(){
    return `${this.name}'s role is ${this.role}`;
};

Employee.prototype.getInfo = function(){
    return{
        Name: this.name,
        ID: this.id,
        Email : this.email,
        Role: this.role
    }
}







module.exports = Employee