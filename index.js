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

module.exports = {
  capitalize,
  reverseString,
};
