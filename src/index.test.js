import { consecutive, high, createPhoneNumber } from ".";

describe("Descride basic functions", () => {
  test("Testing Sum function", () => {
    expect(consecutive([4, 8, 6])).toBe(2);
    expect(consecutive([-1, -5])).not.toBe(2)
  });
  test('Testing high function', () => {
    expect(high('man i need a taxi up to ubud')).toEqual('taxi')
  });
  test('Testing createPhoneNumber function', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890")
  })

});
