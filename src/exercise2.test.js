/**
 * Function that creates a speaker with the name "name".
 * When "speaker" function is called it returns the value with the name of the speaker.
 *
 * @param {name} string
 */
const createSpeaker = (name) => {};

describe("Task 2", () => {
  test("check if task is correct", () => {
    const ted = createSpeaker("Ted");
    const hannah = createSpeaker("Hannah");

    expect(ted("Hello!")).toEqual("Ted: Hello!");
    expect(hannah("Wazzup!")).toEqual("Ted: Wazzup!");
    expect(ted("Woop woop!")).toEqual("Ted: Woop woop!");
  });
});
