const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  //const mock employee details
  const mockName = "Alex";
  const mockId = "123";
  const mockEmail = "alex@yahoo.com";
  const mockGitHubUser = "@Alexandru";
  const mockRole = "Engineer";

  test("Should create a new instance of Engineer", () => {
    //Given
    const engineer = new Engineer(mockName, mockId, mockEmail, mockGitHubUser);

    //Then
    expect(engineer).toBeInstanceOf(Engineer);
  });

  test("Should return GithubUsername when getGithubUsername is called", () => {
    //Given
    const engineer = new Engineer(mockName, mockId, mockEmail, mockGitHubUser);

    //Then
    expect(engineer.getGithubUsername()).toBe(mockGitHubUser);
  });

  test("Should return role when getRole is called", () => {
    //Given
    const engineer = new Engineer(mockName, mockId, mockEmail, mockGitHubUser);

    //Then
    expect(engineer.getRole()).toBe(mockRole);
  });
});
