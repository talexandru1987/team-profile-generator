const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Team = require("../lib/Team");

describe("Team Class", () => {
  //const mock intern details
  const mockName = "Alex";
  const mockId = "123";
  const mockEmail = "alex@yahoo.com";
  const mockSchool = "Birmingham";
  const mockOfficeNumber = "69";
  const mockGitHubUser = "@Alexandru";

  test("Should create a new instance of Team", () => {
    //Given
    const theTeam = new Team();

    //Then
    expect(theTeam).toBeInstanceOf(Team);
  });

  test("Should return an instance of a class when createMember is called", () => {
    //Given
    const theTeam = new Team();
    const intern = theTeam.createMember(
      mockName,
      mockId,
      mockEmail,
      undefined,
      undefined,
      mockSchool
    );

    //Then
    expect(intern).toBeInstanceOf(Intern);
  });

  test("Should push  a member to the to the object array when addToMembers is called and return the current members when getMembers is called", () => {
    //Given
    const theTeam = new Team();
    const intern = new Intern(mockName, mockId, mockEmail, mockSchool);
    theTeam.addToMembers(intern);

    //Then
    expect(theTeam.getMembers().length).toBe(1);
  });
});
