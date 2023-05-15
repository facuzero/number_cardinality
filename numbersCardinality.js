function numbers_cardinality(number) {
  let string = number.toString();
  string.toString();
  console.log(`Input: ${string}`);

  let output = "";
  if (string.charAt(string.length - 1) === "0") {
    output = "zero";
  }
  if (string.charAt(string.length - 1) === "5") {
    output = "five";
  }
  if (string.charAt(string.length - 1) !== "0" && number % 2 === 0) {
    output = "even";
  }
  if (string.charAt(string.length - 1) !== "5" && number % 2 !== 0) {
    output = "odd";
  }
  console.log(`Output: ${output}`);
}
numbers_cardinality(100);
numbers_cardinality(88);
numbers_cardinality(155);
numbers_cardinality(99);
