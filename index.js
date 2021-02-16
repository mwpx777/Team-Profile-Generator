const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const generateSite = require('./src/generate-site.js');
// const { writeFile, copyFile } = require('./src/generate-site.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter manager's name. (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter manager's ID number. (Required)",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter manager's ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter manager's email address. (Required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's email address!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Please enter manager's office number. (Required)",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
        },
    ])
};

const enterEmployee = (newEmployee) => {

    if (!newEmployee.details) {
        newEmployee.details = [];
    }

    return inquirer.prompt([

        {
            type: 'input',
            name: 'employeeName',
            message: "Please enter employee name",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please choose an employee type",
            choices: ['Intern', 'Engineer'],
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter name of the school"
        },

        {
            type: 'input',
            name: 'Github',
            message: 'Please enter Github username'
        },

        {
            type: 'confirm',
            name: 'employeeConfirm',
            message: "Would you like to enter a new employee?",
            default: false
        }
    ])
    
        .then(arrayData => {
            newEmployee.details.push(arrayData);
            if (arrayData.employeeConfirm) {
                return enterEmployee(newEmployee);
            } else {
                return promptUser;
            }

        },
    );

};


promptUser()
    .then(enterEmployee)
