const Manager = require('../lib/Manager')


test('creates an Manager object', () => {
    const manager = new Manager('John', '23', 'John@gmail.com', 'D2')

    expect(manager.officeNumber).toBe('D2')
})

test('gets an Manager role', () => {
    const manager = new Manager('John', '23', 'John@gmail.com', 'D2')

    expect(manager.getRole()).toBe('Manager')

})

test('gets an Manager github', () => {
    const manager = new Manager('John', '23', 'John@gmail.com', 'D2')

    expect(manager.getofficeNumber()).toBe('D2')

})