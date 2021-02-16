const Engineer = require('../lib/Engineer.js')

test('get a Engineer name', () => {
    const engineer = new Engineer('Mark')
   
    expect(engineer.getName()).toEqual(expect.any(String));

});

test('get a Engineer ID', () => {
    const engineer = new Engineer('Mark')

    expect(engineer.getId()).toEqual(expect.any(String));

});

test('get a Engineer Email', () => {
    const engineer = new Engineer('Mark')

    expect(engineer.getEmail()).toEqual(expect.any(String));
}); 

test('get a Engineer Role', () => {
    const engineer = new Engineer('Mark')

    expect(engineer.getRole()).toEqual(expect.any(String));
}); 

test('get a Engineer Github', () => {
    const engineer = new Engineer('Mark')

    expect(engineer.getGithub()).toEqual(expect.any(String));
}); 

test('get a Engineer information', () =>{
    const engineer = new Engineer('Mark')

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(String));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String))
});