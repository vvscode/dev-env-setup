import { consolePromptSum } from "./sum";

// describe("sum", () => {
//   xit("returns sum of params", () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

// describe('getSeconds', () => {
//

describe("consolePromptSum", () => {
  it("logs to console sum of prompt values", () => {
    const values = ["1", "2"];
    jest.spyOn(window, "prompt").mockImplementation(() => values.shift());
    jest.spyOn(console, "log");
    consolePromptSum();
    expect(console.log).toHaveBeenCalledWith(`1+2=3`);
  });
});
