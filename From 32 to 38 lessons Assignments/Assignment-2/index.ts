// Write Function Code Here
function showTypes<T = string, S = number, G = boolean>(
  value1: T | "Nothing" = "Nothing",
  value2: S | "Nothing" = "Nothing",
  value3: G | "Nothing" = "Nothing"
): string {
  return `${value1} - ${value2} - ${value3}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
