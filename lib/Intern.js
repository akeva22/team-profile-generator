const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.role = "Intern"
        this.school = school
        this.icon = `<span class="mt-1 material-symbols-outlined">
        school
        </span>`
    }
    getRole() {
        return this.role
    }

    getSpecial() {
        return this.school
    }

    getIcon() {
        return this.icon

    }

}

module.exports = Intern