const generateEmployees = employeesArray => {

    return `
   
        ${employeesArray
            .map(({ employeeName, employeeEmail, role, employeeId, school, github }) => {
            return `
            
            <div class="card border-primary" style="width: 18rem;">
            <div class="card-body bg-primary text-light">
                <h3 class="card-title">${employeeName}</h3>
                <div class="personTitle">
                   ${createIcon(role)}
                    <h5 class="title"> ${role}</h5>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employeeId}</li>
                <li class="list-group-item">Email: <a href="mailto:${employeeEmail}">${employeeEmail}</a></li>
                ${displaySchool(school)}
                ${displayGithub(github)}
               
               
            </ul>
        </div>
            `;
            })
            .join('')}
           
    `
}

module.exports = employeesArray => {

    const { managerName, managerId, managerEmail, managerOffice, ...rest } = employeesArray[0];


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
        <div class="card border-primary" style="width: 18rem;">
            <div class="card-body bg-primary text-light">
                <h3 class="card-title">${managerName}</h3>
                <div class="personTitle">
                    <i class="fas fa-coffee" id="icon"></i>
                    <h5 class="title"> Manager</h5>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerId}</li>
                <li class="list-group-item">Email: <a href="mailto:${managerEmail}.com">${managerEmail}</a></li>
                <li class="list-group-item">Office Number: ${managerOffice}</li>
            </ul>
        </div>
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
        return `<i class="fas fa-user-graduate" id="icon"></i>`
    } else {
        return `<i class="fas fa-laptop-code" id="icon"></i>`
    }
}


function displaySchool(school) {
    if (!school =='') {
        return `<li class="list-group-item">School: ${school}</li>`
    } else {
        return ``

    }
}

function displayGithub(github) {
    if (github == '') {
        return `<li class="list-group-item">Github: <a href="https://github.com/john" target="_blank">${Github}</a></li>`
    } else {
        return ``
    }
}
