function Engineer(name = ''){
    this.name = name;

    this.id = 3
    this.email = 'mwpx777@gmail.com'
    this.role = 'engineer'
    this.github = 'mwpx777@github.com'
}

Engineer.prototype.getName = function(){
    return `${this.name}`;
};

Engineer.prototype.getId = function(){
    return `${this.name}'s ID number is ${this.id}`;
};

Engineer.prototype.getEmail = function(){
    return `${this.name}'s email address is ${this.email}`;
};

Engineer.prototype.getGithub = function(){
    return `${this.name}'s Github account is ${this.github}`;
};

Engineer.prototype.getRole = function(){
    return `${this.name}'s role is ${this.role}`;
};

Engineer.prototype.getInfo = function(){
    return{
        Name: this.name,
        ID: this.id,
        Email : this.email,
        GitHub : this.github,
        Role: this.role
    }
}

module.exports = Engineer;