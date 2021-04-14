/**
 * Function takes an array of arrays of arrays of ... and flattens them up into one.
 * For example, [1, [2, [3]]] => [1, 2, 3]
 *
 * Notes:
 *  - Arrays always contain numbers
 *  - Arrays always have at least 1 element
 *
 * @param {number[]} array
 * @returns {number[]}
 */
const flatten = (array) => {
  return [];
};

describe("Test 1", () => {
  test("check if task is correct", () => {
    const source = [1, 2, [3, [4, 5], [6, [7]], 8], 9, [10]];

    const result = flatten(source);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
