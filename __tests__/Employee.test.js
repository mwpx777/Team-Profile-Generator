const Employee = require('../lib/Employee.js')


test('create an employee object', () => {
    const employee = new Employee('Mark')
   
    expect(employee.createObject()).toEqual(expect.any(String));

});

test('get an employees name', () => {
    const employee = new Employee('Mark')
   
    expect(employee.getName()).toEqual(expect.any(String));

});

test('get an employees ID', () => {
    const employee = new Employee('Mark')

    expect(employee.getId()).toEqual(expect.any(String));

});

test('get an employees Email', () => {
    const employee = new Employee('Mark')

    expect(employee.getEmail()).toEqual(expect.any(String));
});  

test('get an employees role', () => {
    const employee = new Employee('Mark')

    expect(employee.getRole()).toEqual(expect.any(String));
})

test('get an employees information', () =>{
    const employee = new Employee('Mark')

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(String));
    expect(employee.getEmail()).toEqual(expect.any(String));
});