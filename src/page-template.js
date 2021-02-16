const generateEmployees = employeesArray => {

    return `
    <div class="row">
    <div class="card border-primary" style="width: 18rem;">
        <div class="card-body bg-primary text-light">
        ${employeesArray
        .map(({name, icon, role, id, email}) => {
            return `
            <h3 class="card-title">${name}</h3>
            <div class="personTitle">
                <i class="fas fa-${icon}" id="icon"></i>
                <h5 class="title"> ${role}</h5>
            </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">${data.listItem}</li>
            </ul>
            </div>
            `;
        })
        .join('')}
    </div>   
    `
}

module.exports = templateData => {

    const { name, id, email,...header } = templateData;

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
                <h3 class="card-title">${data.managerName}</h3>
                <div class="personTitle">
                    <i class="fas fa-coffee" id="icon"></i>
                    <h5 class="title"> Manager</h5>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.managerId}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.managerEmail}">${data.email}</a></li>
                <li class="list-group-item">Office Number: ${data.managerOffice}</li>
            </ul>
        </div>
        ${generateEmployees}
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" integrity="sha512-WNLxfP/8cVYL9sj8Jnp6et0BkubLP31jhTG9vhL/F5uEZmg5wEzKoXp1kJslzPQWwPT1eyMiSxlKCgzHLOTOTQ==" crossorigin="anonymous"></script>
</body>
</html>
`;
};