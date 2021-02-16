function Manager(name = ''){
    this.name = name;

    this.id = 1
    this.email = 'mwpx777@gmail.com'
    this.officeNumber = 100
    this.role = 'manager'
}

Manager.prototype.getName = function(){
    return `${this.name}`;
};

Manager.prototype.getId = function(){
    return `${this.name}'s ID number is ${this.id}`;
};

Manager.prototype.getEmail = function(){
    return `${this.name}'s email address is ${this.email}`;
};

Manager.prototype.getOfficeNumber = function(){
    return `${this.name}'s office number is ${this.officenumber}`;
};

Manager.prototype.getRole = function(){
    return `${this.name}'s role is ${this.role}`;
};

Manager.prototype.getInfo = function(){
    return{
        Name: this.name,
        ID: this.id,
        Email : this.email,
        Office : this.officeNumber,
        Role: this.role
    }
}







module.exports = Manager;