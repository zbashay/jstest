const readlineSync = require("readline-sync");

let shape = (readlineSync.question("Enter a shape: ").toLowerCase());

if (shape == "circle") {
  const radius = Number(readlineSync.question("Radius: "));
  let circleArea = radius * radius * 3.14;
  console.log("\nArea: " + circleArea);
}else if (shape == "triangle") {
  const base = Number(readlineSync.question("Base: "));
  const height = Number(readlineSync.question("Height: "));
  let triangleArea = (base * height) / 2;
  console.log("\nArea: " + triangleArea);
}else if (shape == "rectangle") {
  const length = Number(readlineSync.question("Length: "));
  const width = Number(readlineSync.question("Width: "));
  let rectangleArea = length * width;
  console.log("\nArea: " + rectangleArea);
}else if (shape == "square") {
  const side = Number(readlineSync.question("Side: "));
  let squareArea = side * side
  console.log("\nArea: " + squareArea);
} else {
  input = readlineSync.question("Enter a shape: ");
}
