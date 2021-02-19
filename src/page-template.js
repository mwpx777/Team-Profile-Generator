const generateEmployees = employeesArray => {

    return `
   
        ${employeesArray
            .map(({ employeeName,  employeeId, employeeEmail, role, officeNumber, school, Github }) => {
                this.employeeName = employeeName
                this.role = role
                this.employeeId = employeeId
                this.employeeEmail = employeeEmail
                this.officeNumber = officeNumber
                this.school = school
                this.Github = Github
                return `
            
            <div class="card border-primary" style="width: 18rem;">
            <div class="card-body bg-primary text-light">
                <h3 class="card-title">${this.employeeName}</h3>
                    <div class="personTitle">
                    <div class= "nameCard">
                    ${createIcon(role)} 
                    </div>
                    
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.employeeId}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.employeeEmail}">${this.employeeEmail}</a></li>
                ${displayOffice(this.officeNumber)}
                ${displaySchool(this.school)}
                ${displayGithub(this.Github)}
               
               
            </ul>
        </div>
            `;
            })
            .join('')}
           
    `
}

module.exports = employeesArray => {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA==" crossorigin="anonymous" />
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile Generator</h1>
       
    </header>
    <div class="container">
        <div class="row">
   
          ${generateEmployees(employeesArray)}
    </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" integrity="sha512-WNLxfP/8cVYL9sj8Jnp6et0BkubLP31jhTG9vhL/F5uEZmg5wEzKoXp1kJslzPQWwPT1eyMiSxlKCgzHLOTOTQ==" crossorigin="anonymous"></script>
</body>
</html>
`;
};

function createIcon(role) {
    if (role == 'Intern') {
        return `<i class="fas fa-user-graduate" id="icon"></i><h3> Intern</h3>`
    } else if (role == "Engineer") {
        return `<i class="fas fa-laptop-code" id="icon"></i><h3> Engineer</h3>`
    } else {
        (role == 'Manager')
        return `<i class="fas fa-coffee" id="icon"></i><h3> Manager</h3>`
    }
}


function displaySchool(school) {
    if (!school == " ") {
        return `<li class="list-group-item">School: ${school}</li>`
    } else {
        return ``

    }
}

function displayGithub(Github) {
    if (!Github == '') {
        return `<li class="list-group-item">Github: <a href="https://github.com/${Github}" target="_blank">${Github}</a></li>`
    } else {
        return ``
    }
}

function displayOffice(officeNumber) {
    if (!officeNumber == '') {
        return `<li class="list-group-item">Office Number: ${officeNumber}</li>`
    } else {
        return ``
    }
}

