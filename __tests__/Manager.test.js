const Manager = require('../lib/Manager.js')

test('get a Managers name', () => {
    const manager = new Manager('Mark')
   
    expect(manager.getName()).toEqual(expect.any(String));

});

test('get a Managers ID', () => {
    const manager = new Manager('Mark')

    expect(manager.getId()).toEqual(expect.any(String));

});

test('get a Managers Email', () => {
    const manager = new Manager('Mark')

    expect(manager.getEmail()).toEqual(expect.any(String));
}); 

test('get a Managers office number', () => {
    const manager = new Manager('Mark')

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})

test('get a Managers role', () => {
    const manager = new Manager('Mark')

    expect(manager.getRole()).toEqual(expect.any(String));
})

test('get a Managers information', () =>{
    const manager = new Manager('Mark')

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(String));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(String))
    expect(manager.getRole()).toEqual(expect.any(String))
});