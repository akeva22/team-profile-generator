const inquirer = require('inquirer');
const fs = require('fs');
const { generateEmployee, generateHTML } = require('./src/generatepage');
const e = require('express');

function welcome() {
    console.log('Welcome, Enter your stuff!')

    getEmployeeinfo()
}

function getEmployeeinfo() {

    inquirer
        .prompt(

            [{
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of this team member?'
                },

                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the ID for this team member?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email for this team member?'
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is the role of this team memeber?',
                    choices: ['Manager', 'Engineer', 'Intern']
                }

            ])

    .then(answers => {
        switch (answers.role) {
            case 'Intern':
                internPrompt(answers)
                break
            case 'Manager':
                managerPrompt(answers)
                break
            case 'Engineer':
                engineerPrompt(answers)
        }
    })

}

const internPrompt = (answers) => {
    inquirer
        .prompt([{

                type: 'input',
                name: 'school',
                message: `What school does ${answers.name} attend?`

            }

        ])

    .then(school => {
            answers.school = school.school
            return generateEmployee(answers)

        })
        .then(newEmployee)

}

const managerPrompt = (answers) => {
    inquirer
        .prompt([{

                type: 'input',
                name: 'officeNumber',
                message: `What is ${answers.name}'s office number?`

            }

        ])

    .then(officeNumber => {
            answers.officeNumber = officeNumber.officeNumber

            return generateEmployee(answers)

        })
        .then(newEmployee)

}

const engineerPrompt = (answers) => {
    inquirer
        .prompt([{

                type: 'input',
                name: 'github',
                message: `What is ${answers.name}'s github user name?`

            }

        ])

    .then(github => {
            answers.github = github.github

            return generateEmployee(answers)


        })
        .then(newEmployee)
}

const newEmployee = () => {
    inquirer.prompt([{
            type: 'confirm',
            name: 'newEmployee',
            message: `Would you like to add another employee?`,
            default: 'false'

        }])
        .then(answer => {
            if (answer.newEmployee) {
                return getEmployeeinfo()
            }

            const htmlPage = generateHTML()

            fs.writeFile('./dist/index.html', htmlPage, (err) => {
                if (err) {
                    err.log(err)
                    return;
                }
                console.log('File successfully created!')
            })
        })
}

welcome()