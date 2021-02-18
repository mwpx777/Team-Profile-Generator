const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const generateSite = require('./src/generate-site.js');
const { writeFile, copyFile } = require('./src/generate-site.js');
let employeesArray = [];

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
    .then(managerData => {
        employeesArray.push(managerData);
        
        newEmployee()
    });
};
const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose an employee type",
            choices: ['Intern', 'Engineer' , 'Complete Roster'],
        }])
        .then(({ role }) => {

            if (role === 'Intern') {
                getInternData(role)

            } else if (role === 'Complete Roster') {
                finishRoster()

            } else {
                getEngineerData(role)
            }
        })
}

// const enterEmployee = (managerData) => {
//     console.log(managerData);
//     // if (!employeesArray) {
//     employeesArray = [];
//     // }

// return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'employeeName',
//         message: "Please enter employee name",
//         validate: employeeNameInput => {
//             if (employeeNameInput) {
//                 return true;
//             } else {
//                 console.log("Please enter employee's name!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'employeeId',
//         message: "Please enter employee's ID number. (Required)",
//         validate: employeeIdInput => {
//             if (employeeIdInput) {
//                 return true;
//             } else {
//                 console.log("Please enter employee's ID number!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'employeeEmail',
//         message: "Please enter employee's email address. (Required)",
//         default: () => { },
//         validate: function (email) {

//             valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

//             if (valid) {
//                 return true;
//             } else {
//                 console.log("Please enter a valid email!")
//                 return false;
//             }
//         }

//     },

//     {
//         type: 'list',
//         name: 'role',
//         message: "Please choose an employee type",
//         choices: ['Intern', 'Engineer'],
//     },

// ])

//     .then(({ employeeName, role, employeeEmail, employeeId }) => {

//         if (role === 'Intern') {
//             getInternData(managerData)

//         } else {
//             getEngineerData(managerData)

//         }

//     },
//     );

// };


function getInternData(role) {
    // console.log(employeeInfo);

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
            message: "Please choose the employee's role",
            choices: ['Intern'],
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter employee's ID number. (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter employee's ID number!");
                    return false;
                }
            }
        },
        {

            type: 'input',
            name: 'employeeEmail',
            message: "Please enter employee's email address. (Required)",
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
            message: "Please enter name of the school"
        },
        // {
        //     type: 'confirm',
        //     name: 'employeeConfirm',
        //     message: "Would you like to enter a new employee?",
        //     default: false
        // },

    ])
        .then(getInternData => {
            employeesArray.push(getInternData);
            console.log(employeesArray)
            newEmployee()
        });
};

function getEngineerData(role) {
    // console.log(employeeInfo);
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
            message: "Please choose the employee's role",
            choices: ['Engineer'],
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter employee's ID number. (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter employee's ID number!");
                    return false;
                }
            }
        },
        {

            type: 'input',
            name: 'employeeEmail',
            message: "Please enter employee's email address. (Required)",
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
            message: 'Please enter Github username'
        },
        // {
        //     type: 'confirm',
        //     name: 'employeeConfirm',
        //     message: "Would you like to enter a new employee?",
        //     default: false
        // },

    ])
        .then(getEngineerData => {
            employeesArray.push(getEngineerData);
            console.log(employeesArray)
            newEmployee()

        });

};


promptUser()
 
function finishRoster() {
    
        console.log('employeesArray', employeesArray)
        const pageHTML = generatePage(employeesArray)

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Page created! Please check out index.html")

            // fs.copyFile('./scr/style.css', './dist/style.css', err => {
            //     if (err) {
            //         console.log(err);
            //         return;
            //     }
            //     console.log("Stylesheet created successfully!")
            // });
        });
    };


