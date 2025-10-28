const expo = require('./index'); 

it("capitalizes the first character", () => {
  expect(expo.capitalize("here comes the sun")).toBe("Here comes the sun");
});

it("reverses the characters in a string", () => {
    expect(expo.reverseString('pu uoy evig annog reveN')).toBe('Never gonna give you up')
}); 

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