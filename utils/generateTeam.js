const template = require('../src/template.js')

const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index2.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
};

const copyFile = filePath => {
    return new Promise((resolve, reject) => {
        fs.copyFile('../src/style.css', '../dist/assets/css/stylesheet.css', filePath, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied!'
            })
        })
    })
};

// Create a function to generate HTML for team profile
function generateTeam(data) {
  return template.templateDaddy(data);
}

module.exports = {
    writeFile, copyFile, generateTeam
};

// module.exports = generateTeam;