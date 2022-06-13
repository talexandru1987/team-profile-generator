const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  //const mock employee details
  const mockName = "Alex";
  const mockId = "123";
  const mockEmail = "alex@yahoo.com";

  test("Should create a new instance of Employee", () => {
    //Given
    const employee = new Employee(mockName, mockId, mockEmail);

    //Then
    expect(employee).toBeInstanceOf(Employee);
  });

  test("Should return name when getName is called", () => {
    //Given
    const employee = new Employee(mockName, mockId, mockEmail);

    //Then
    expect(employee.getName()).toBe(mockName);
  });

  test("Should return id when getId is called", () => {
    //Given
    const employee = new Employee(mockName, mockId, mockEmail);

    //Then
    expect(employee.getId()).toBe(mockId);
  });

  test("Should return email when getEmail is called", () => {
    //Given
    const employee = new Employee(mockName, mockId, mockEmail);

    //Then
    expect(employee.getEmail()).toBe(mockEmail);
  });
});
