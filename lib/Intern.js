function Intern(name = ''){
    this.name = name;

    this.id = 4
    this.email = 'mwpx777@gmail.com'
    this.role = 'intern'
    this.school = 'UW Madison'
}

Intern.prototype.getName = function(){
    return `${this.name}`;
};

Intern.prototype.getId = function(){
    return `${this.name}'s ID number is ${this.id}`;
};

Intern.prototype.getEmail = function(){
    return `${this.name}'s email address is ${this.email}`;
};

Intern.prototype.getSchool = function(){
    return `${this.name}'s attends ${this.school}`;
};

Intern.prototype.getRole = function(){
    return `${this.name}'s role is ${this.role}`;
};

Intern.prototype.getInfo = function(){
    return{
        Name: this.name,
        ID: this.id,
        Email : this.email,
        School : this.school,
        Role: this.role
    }
}

module.exports = Intern;