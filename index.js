// capitalize
function capitalize(string) {
  if (typeof string !== "string") {
    console.log("Input invalid.");
    return;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

// reverseString
function reverseString(string) {
  if (typeof string !== "string") {
    console.log("Input invalid.");
    return;
  }

  return string.split("").reverse().join("");
}

// calculator
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

// caesarCipher
function caesarCipher(string, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const resultArray = [];

  for (let char of string) {
    if (char.toUpperCase() !== char.toLowerCase()) {
      let index = alphabet.indexOf(char.toLowerCase());
      let newIndex = (index + shift + alphabet.length) % alphabet.length;
      let newLetter = alphabet[newIndex];
      if (char === alphabet[index].toUpperCase()) {
        resultArray.push(newLetter.toUpperCase());
      } else {
        resultArray.push(newLetter);
      }
    } else {
      resultArray.push(char);
    }
  }

  return resultArray.join("");
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
