const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const generateSite = require('./src/generate-site.js');
const { writeFile, copyFile } = require('./src/generate-site.js');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
// const Employee = require('./lib/Employee')
let employeesArray = [];


const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Welcome to the Team Profile Generator! Please make a selection",
            choices: ['Manager', 'Intern', 'Engineer', 'Complete Roster'],
        }])
        .then(({ role }) => {

            if (role === 'Intern') {
                getInternData()

            } else if (role === 'Complete Roster') {
                finishRoster()

            } else if (role === 'Engineer') {
                getEngineerData()

            } else {
                (role === "Manager")
                managerInfo()

            }
        })
};

const managerInfo = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "Please enter manager's name. (Required)",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: 'prompt',
            name: 'role',
            message: "Please verify the employee's role",
            default: 'Manager'
        },
   
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter manager's ID number. (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter manager's ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please enter manager's email address. (Required)",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter manager's office number. (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
        },
    ])
       
        
       
        .then(({employeeName, role, employeeId, employeeEmail, officeNumber }) => {
        //    console.log(employeeName)
            employeesArray.push(new Manager(employeeName, role, employeeId, employeeEmail, officeNumber));
           
            newEmployee()
        });
       
       
};



function getInternData() {
    // console.log(employeeInfo);

    return inquirer.prompt([

        {
            type: 'input',
            name: 'employeeName',
            message: "Please enter Intern's name",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'prompt',
            name: 'role',
            message: "Please verify the employee's position",
            default: 'Intern'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter Intern's ID number. (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's ID number!");
                    return false;
                }
            }
        },
        {

            type: 'input',
            name: 'employeeEmail',
            message: "Please enter Intern's email address. (Required)",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter name of the Intern's school"
        },


    ])

      
        .then(({employeeName, role, employeeId, employeeEmail, school }) => {
            console.log(employeeName)
             employeesArray.push(new Intern(employeeName, role, employeeId, employeeEmail, school));
            
             newEmployee()
})};

function getEngineerData() {
    // console.log(employeeInfo);
    return inquirer.prompt([


        {
            type: 'input',
            name: 'employeeName',
            message: "Please enter Engineer's name",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'prompt',
            name: 'role',
            message: "Please choose the Engineer's role",
            default: 'Engineer'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter Engineer's ID number. (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's ID number!");
                    return false;
                }
            }
        },
        {

            type: 'input',
            name: 'employeeEmail',
            message: "Please enter Engineer's email address. (Required)",
            default: () => { },
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email!")
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'Github',
            message: "Please enter Engineer's Github username"
        },


    ])
      
        .then(({employeeName, role, employeeId, employeeEmail, Github }) => {
            console.log(employeeName)
             employeesArray.push(new Engineer(employeeName, role, employeeId, employeeEmail, Github));
            
             newEmployee()


       });

};


newEmployee()

function finishRoster() {

    // console.log('employeesArray', employeesArray)
    const pageHTML = generatePage(employeesArray)

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Page created! Please check out index.html")


    });
};


