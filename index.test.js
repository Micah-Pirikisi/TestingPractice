const expo = require('./index'); 

it("capitalizes the first character", () => {
  expect(expo.capitalize("here comes the sun")).toBe("Here comes the sun");
});

it("reverses the characters in a string", () => {
    expect(expo.reverseString('pu uoy evig annog reveN')).toBe('Never gonna give you up')
})