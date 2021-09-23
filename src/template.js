const generateTeamName = teamName => {
    return `
        <section class="hero is-primary" id="header">
            <div class="hero-body">
                <h1 class="title is-size-1 is-size-2-mobile has-text-centered has-text-weight-bold">${teamName}</h1>
            </div>
        </section>
        `
};

const generateManager = (managers) => {
    return managers.map(({ name, role, id, email, officeNumber }) => {
            return `
            <div class="column is-inline-block is-narrow ">
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
                        <dl><strong>ID: </strong>${id}</dl>
                        <dl><strong>Email: </strong>
                            <a href="mailto:${email}?subject=Your%20employment%20as%20${role}&body=Dear%20${name}">
                                ${email}
                            </a>
                        </dl>
                        <dl><strong>Office Number: </strong>${officeNumber}</dl>
                    </ul>
                </div>
                </div>
            </div>
        `
    })
}

const generateEngineer = (engineers) => {
    return engineers.map(({ name, role, id, email, github }) => {
            return `
            <div class="column is-inline-block is-narrow ">
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
                            <dl><strong>ID: </strong>${id}</dl>
                            <dl><strong>Email: </strong>
                                <a href="mailto:${email}?subject=Your%20employment%20as%20${role}&body=Dear%20${name},">
                                    ${email}
                                </a>
                            </dl>
                            <dl><strong>Github: </strong>
                                <a href="https://www.github.com/${github}">
                                    ${github}
                                </a>
                            </dl>
                        </ul>
                    </div>
                </div>
            </div>
        `
    })
}

const generateIntern = (interns) => {
    return interns.map(({ name, role, id, email, school }) => {
            return `
            <div class="column is-inline-block is-narrow">
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
                                <p class="is-size-4 has-text-weight-semibold has-text-white">${name}</p> 
                                <p class="is-size-7 is-italic has-text-white">${school}</p>
                                <p class="subtitle is-6 has-text-white">${role}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="content mx-5 pb-5">
                        <ul>
                            <dl><strong>ID: </strong>${id}</dl>
                            <dl><strong>Email: </strong>
                                <a href="mailto:${email}?subject=Your%20internship%20via%20${school}&body=Dear%20${name}">
                                    ${email}
                                </a>
                            </dl>
                        </ul>
                    </div>
                </div>
            </div>
            `
        })
}


module.exports = templateData => {

        const { teamName, engineers, interns, managers } = templateData;

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
                        <div class="columns is-multiline is-centered is-mobile">
                            ${managerContent}
                            ${engineerContent}
                            ${internContent}
                        </div>
                    </section>
            </body>

            <footer class="footer is-full mt-6">
                <div class="content is-left">
                    <p class="subtitle is-6">
                        <strong>Profile</strong> by OOP Team Profile Generator
                    </p> 
                </div>
            </footer>
        `
    }
