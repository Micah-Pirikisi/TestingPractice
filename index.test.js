const expo = require("./index");

// capitalize
it("capitalizes the first character", () => {
  expect(expo.capitalize("here comes the sun")).toBe("Here comes the sun");
});

// reverseString
it("reverses the characters in a string", () => {
  expect(expo.reverseString("pu uoy evig annog reveN")).toBe(
    "Never gonna give you up"
  );
});

// calculator
it("executes basic operations", () => {
  expect(expo.calculator.add(1, 2)).toBe(3);
});

it("executes basic operations", () => {
  expect(expo.calculator.subtract(7, 5)).toBe(2);
});

it("executes basic operations", () => {
  expect(expo.calculator.divide(20, 5)).toBe(4);
});

it("executes basic operations", () => {
  expect(expo.calculator.multiply(6, 6)).toBe(36);
});

// caesarCipher
it("encrypts messages by using a shift factor", () => {
  expect(expo.caesarCipher("xyz", 3)).toBe("abc");
});

it("encrypts messages by using a shift factor", () => {
  expect(expo.caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("encrypts messages by using a shift factor", () => {
  expect(expo.caesarCipher("xyz", 3)).toBe("abc");
});

it("encrypts messages by using a shift factor", () => {
  expect(expo.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

it("takes an array of numbers and returns an object with the average, min, max, and length.", () => {
  expect(expo.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
