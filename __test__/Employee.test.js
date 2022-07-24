const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('John', '23', 'John@gmail.com', 'Employee')

    expect(employee.name).toBe('John')
    expect(employee.id).toBe('23')
    expect(employee.email).toBe('John@gmail.com')
    expect(employee.role).toBe('Employee')
})

test('get employee name', () => {
    const employee = new Employee('John', '23', 'John@gmail.com', 'Employee')

    expect(employee.getName()).toBe('John')
})

test('get employee email', () => {
    const employee = new Employee('John', '23', 'John@gmail.com', 'Employee')

    expect(employee.getEmail()).toBe('John@gmail.com')
})

test('get employee name', () => {
    const employee = new Employee('John', '23', 'John@gmail.com', 'Employee')

    expect(employee.getRole()).toBe('Employee')
})

test('get employee id', () => {
    const employee = new Employee('John', '23', 'John@gmail.com', 'Employee')

    expect(employee.getId()).toBe('23')
})