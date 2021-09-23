const Employee = require('../lib/Employee');

//tests for data types
test('creates an employee object', () => {
    const employee = new Employee('ruben', 'ruben@ruben.com');

    expect(employee.getName()).toEqual("ruben")
    expect(employee.getEmail()).toEqual("ruben@ruben.com")
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})


// //tests for method values
test("gets employee's information as an object", () => {
    const employee = new Employee("Adriana N.", "itsmeadriana@gmail.com");

    expect(employee).toHaveProperty('name');
    expect(employee.getName()).toEqual('Adriana N.')
    expect(employee.getId()).toEqual(expect.any(Number));
    
    expect(employee).toHaveProperty('email');
    expect(employee.getEmail()).toEqual('itsmeadriana@gmail.com');
})