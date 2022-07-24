const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '23', 'John@gmail.com', 'john1234')

    expect(engineer.github).toBe('john1234')
})

test('gets an engineer role', () => {
    const engineer = new Engineer('John', '23', 'John@gmail.com', 'john1234')

    expect(engineer.getRole()).toBe('Engineer')

})

test('gets an engineer github', () => {
    const engineer = new Engineer('John', '23', 'John@gmail.com', 'john1234')

    expect(engineer.getGithub()).toBe('john1234')

})