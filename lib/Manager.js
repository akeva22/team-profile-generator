const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.role = "Manager"
        this.officeNumber = officeNumber
        this.icon = `<span class="mt-1 material-symbols-outlined">
        school
        </span>`
    }
    getRole() {
        return this.role
    }

    getSpecial() {
        return this.officeNumber
    }

    getIcon() {
        return this.icon

    }

}

module.exports = Manager