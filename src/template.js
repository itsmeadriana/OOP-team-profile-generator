const generateTeamName = teamName => {
    return `
        <section class="hero is-primary" id="header">
            <div class="hero-body">
                <h1 class="title has-text-centered has-text-weight-bold">${teamName}</h1>
            </div>
        </section>
        `
};

const generateManager = (managers) => {
    return managers.map(({ name, role, id, email, officeNumber }) => {
            return `
                <div class="column is-inline-block is-narrow is-multiline">
                <div class="card" id="${id}">
                    <div class="card-header has-background-link">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4 has-text-white">${name}</p>
                                <p class="subtitle is-6 has-text-white">${role}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                <div class="content mx-5 pb-5">
                    <ul>
                        <li><strong>ID: </strong>${id}</li>
                        <li><strong>Email: </strong>
                            <a href="mailto:${email}?subject=Your%20employment&body=Dear%20${name}">
                                ${email}
                            </a>
                        </li>
                        <li><strong>Office Number: </strong>${officeNumber}</li>
                    </ul>
                </div>
                </div>
            `
        })
}

const generateEngineer = (engineers) => {
    return engineers.map(({ name, role, id, email, github }) => {
            return `
                <div class="column is-inline-block is-narrow is-multiline">
                <div class="card" id="${id}">
                    <div class="card-header has-background-link">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4 has-text-white">${name}</p>
                                <p class="subtitle is-6 has-text-white">${role}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="content mx-5 pb-5">
                        <ul>
                            <li><strong>ID: </strong>${id}</li>
                            <li><strong>Email: </strong>
                                <a href="mailto:${email}?subject=Your%20employment&body=Dear%20${name}">
                                    ${email}
                                </a>
                            </li>
                            <li><strong>Github: </strong>
                                <a href="${github}.github.com">
                                    ${github}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        })
}

const generateIntern = (interns) => {
    return interns.map(({ name, role, id, email, school }) => {
            return `
                <div class="column is-inline-block is-narrow is-multiline">
                <div class="card" id="${id}">
                    <div class="card-header has-background-link">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4 has-text-white">${name}</p>
                                <p class="subtitle is-6 has-text-white">${role}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="content mx-5 pb-5">
                        <ul>
                            <li><strong>ID: </strong>${id}</li>
                            <li><strong>Email: </strong>
                                <a href="mailto:${email}?subject=Your%20employment&body=Dear%20${name}">
                                    ${email}
                                </a>
                            </li>
                            <li><strong>School: </strong>
                                ${school}
                            </li>
                        </ul>
                    </div>
                </div>
            `
        })
}


module.exports = templateData => {

        const { teamName, engineers, interns, managers } = templateData;
        console.log(managers)

        let managerContent = ''
        if (managers !== undefined) {
            managerContent = generateManager(managers);
        }

        let engineerContent = ''
        if (engineers !== undefined) {
            engineerContent = generateEngineer(engineers);
        }

        let internContent = '';
        if (interns !== undefined) {
            internContent = generateIntern(interns);
        }
        
        return `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Team Profile</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            </head>

            <body>
                <header>${generateTeamName(teamName)}</header>
                    <section class="mt-6">
                        <div class="columns is-mobile is-centered">
                            ${managerContent}
                            ${engineerContent}
                            ${internContent}
                        </div>
                    </section>
            </body>

            <footer class="footer is-full mt-6">
                <div class="content is-left">
                    <p class="subtitle is-6>
                        <strong>Profile</strong> by OOP Team Profile Generator
                    </p> 
                </div>
            </footer>
        `
    }
