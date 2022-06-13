const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  //const mock intern details
  const mockName = "Alex";
  const mockId = "123";
  const mockEmail = "alex@yahoo.com";
  const mockSchool = "Birmingham";
  const mockRole = "Intern";

  test("Should create a new instance of Intern", () => {
    //Given
    const intern = new Intern(mockName, mockId, mockEmail, mockSchool);

    //Then
    expect(intern).toBeInstanceOf(Intern);
  });

  test("Should return the School when getSchool is called", () => {
    //Given
    const intern = new Intern(mockName, mockId, mockEmail, mockSchool);

    //Then
    expect(intern.getSchool()).toBe(mockSchool);
  });

  test("Should return role when getRole is called", () => {
    //Given
    const intern = new Intern(mockName, mockId, mockEmail, mockSchool);

    //Then
    expect(intern.getRole()).toBe(mockRole);
  });
});
