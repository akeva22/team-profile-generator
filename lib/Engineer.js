const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.role = "Engineer"
        this.github = github
        this.icon = `<span class="mt-1 material-symbols-outlined">
        integration_instructions
        </span>`
    }
    getRole() {
        return this.role
    }

    getSpecial() {
        return this.github
    }

    getIcon() {
        return this.icon
    }



}

module.exports = Engineer