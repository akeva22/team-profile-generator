const Intern = require('../lib/Intern')


test('creates an intern object', () => {
    const intern = new Intern('John', '23', 'John@gmail.com', 'Glendale High')

    expect(intern.school).toBe('Glendale High')
})

test('gets an intern role', () => {
    const intern = new Intern('John', '23', 'John@gmail.com', 'Glendale High')

    expect(intern.getRole()).toBe('Intern')

})

test('gets an intern github', () => {
    const intern = new Intern('John', '23', 'John@gmail.com', 'Glendale High')

    expect(intern.getSchool()).toBe('Glendale High')

})