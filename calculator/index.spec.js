const Calculator = require("./index.js");

describe("Basic calculations", () => {
  test("Add 1 + 3", () => {
    expect(Calculator.add(1, 3)).toBe(4);
  });

  test("Subtract 1 - 3", () => {
    expect(Calculator.subtract(1, 3)).toBe(-2);
  });

  test("Multiply 3 * 4", () => {
    expect(Calculator.multiply(3, 4)).toBe(12);
  });

  test("Divide 10 / 2", () => {
    expect(Calculator.divide(10, 2)).toBe(5);
  });
});
