const inquirer = require("inquirer");
const { rootQuestions, employeeDetails, officeNumber } = require(".");

describe("rootQuestions", () => {
  //the test for the root questions
  test("should return the expected answers for the first questions", async () => {
    // set up our mock
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      username: "alexandru",
      employeeID: "1234",
      email: "alexandru@yahoo.com",
    });

    const expected = {
      username: "alexandru",
      employeeID: "1234",
      email: "alexandru@yahoo.com",
    };
    const actual = await rootQuestions();

    expect(actual).toEqual(expected);
  });

  //test for selecting the office number
  test("should return the expected answers ofr office number", async () => {
    // set up our mock
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      officeNumber: "123",
    });

    //the array of office numbers
    const choicesArray = ["1111", "123", "1234"];

    const userInput = await officeNumber();
    //check if the selected choice is the the specified array
    const actual = choicesArray.includes(userInput.officeNumber);

    expect(actual).toEqual(true);
  });

  //test for selecting the employee role
  test("should return the expected answers for user details", async () => {
    // set up our mock
    const spy = jest.spyOn(inquirer, "prompt").mockResolvedValue({
      userRole: "Engineer",
      userGitHub: "@alex",
      userSchool: undefined,
    });

    //the array of choices for the user role
    const choicesArray = ["Engineer", "Intern"];

    //prompt questions
    const userInput = await employeeDetails();

    //check if github or school are defined and role is inside the specified array
    const actual =
      (!(userInput.userGitHub || userInput.userSchool) ? false : true) &&
      choicesArray.includes(userInput.userRole);

    expect(actual).toEqual(true);
  });
});
