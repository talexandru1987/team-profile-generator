const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  //const mock manager details
  const mockName = "Alex";
  const mockId = "123";
  const mockEmail = "alex@yahoo.com";
  const mockOfficeNumber = "69";
  const mockRole = "Manager";

  test("Should create a new instance of Manager", () => {
    //Given
    const manager = new Manager(mockName, mockId, mockEmail, mockOfficeNumber);

    //Then
    expect(manager).toBeInstanceOf(Manager);
  });

  test("Should return the office number when getOfficeNumber is called", () => {
    //Given
    const manager = new Manager(mockName, mockId, mockEmail, mockOfficeNumber);

    //Then
    expect(manager.getOfficeNumber()).toBe(mockOfficeNumber);
  });

  test("Should return role when getRole is called", () => {
    //Given
    const manager = new Manager(mockName, mockId, mockEmail, mockOfficeNumber);

    //Then
    expect(manager.getRole()).toBe(mockRole);
  });
});
