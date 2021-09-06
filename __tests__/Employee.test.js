const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

//tests for properties
test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})


//tests for method values
// test("gets employee's information as an object", () => {
//     const employee = new Employee();

//     expect(employee.getName()).toBeDefined();
//     expect(employee.getId()).toHaveLength(3);
//     expect(employee.getEmail()).toContain('@');
// });