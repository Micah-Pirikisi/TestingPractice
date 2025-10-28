it("capitalizes the first character", () => {
  expect(capitalize("here comes the sun")).toBe("Here comes the sun");
});

function capitalize(string) {
  if (typeof string !== "string") {
    console.log("Input invalid.");
    return;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
