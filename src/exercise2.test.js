/**
 * Function that creates a speaker with the name "name".
 * When chat function is called it returns the value with the name of the speaker (see tests).
 *
 * @param {name} string
 */
const speaker = (name) => {};

describe("Task 2", () => {
  test("check if task is correct", () => {
    const ted = speaker("Ted");
    const hannah = speaker("Hannah");

    expect(ted("Hello!")).toEqual("Ted: Hello!");
    expect(hannah("Wazzup!")).toEqual("Ted: Wazzup!");
    expect(ted("Woop woop!")).toEqual("Ted: Woop woop!");
  });
});
