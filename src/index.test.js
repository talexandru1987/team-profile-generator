const inquirer = require("inquirer");
const { rootQuestions } = require(".");

describe("rootQuestions", () => {
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
});
