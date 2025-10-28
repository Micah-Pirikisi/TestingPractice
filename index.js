function capitalize(string) {
  if (typeof string !== "string") {
    console.log("Input invalid.");
    return;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  if (typeof string !== "string") {
    console.log("Input invalid.");
    return;
  }

  return string.split("").reverse().join("");
}

calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero.");
      return null;
    }
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
