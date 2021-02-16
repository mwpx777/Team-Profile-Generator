const Intern = require('../lib/Intern.js')

test('get a Intern name', () => {
    const intern = new Intern('Mark')
   
    expect(intern.getName()).toEqual(expect.any(String));

});

test('get a Intern ID', () => {
    const intern = new Intern('Mark')

    expect(intern.getId()).toEqual(expect.any(String));

});

test('get a Intern Email', () => {
    const intern = new Intern('Mark')

    expect(intern.getEmail()).toEqual(expect.any(String));
}); 

test('get a Intern Role', () => {
    const intern = new Intern('Mark')

    expect(intern.getRole()).toEqual(expect.any(String));
}); 

test('get a Intern School Name', () => {
    const intern = new Intern('Mark')

    expect(intern.getSchool()).toEqual(expect.any(String));
}); 

test('get a Intern information', () =>{
    const intern= new Intern('Mark')

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(String));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String))
});