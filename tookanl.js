const readlineSync = require("readline-sync");

let shape = String(readlineSync.question("Enter a shape: ").toLowerCase());

if (shape == "circle") {

  const radius = Number(readlineSync.question("Radius: "));

  let circleArea = radius * radius * 3.14;

  circleArea = circleArea.toLocaleString('en');

  console.log("\nArea: " + circleArea);

} else if (shape == "rectangle") {

  const length = Number(readlineSync.question("Length: "));
  const width = Number(readlineSync.question("Width: "));
  rectangleArea = rectangleArea.toLocaleString('en');
  let rectangleArea = length * width;
  console.log("\nArea: " + rectangleArea);

} else if (shape == "square") {

  const side = Number(readlineSync.question("Side: "));
  squareArea = squareArea.toLocaleString('en');
  let squareArea = side * side;
  console.log("\nArea: " + squareArea);

} else if (input == "triangle") {

  const base = Number(readlineSync.question("Base: "));
  const height = Number(readlineSync.question("Height: "));
  triangleArea = triangleArea.toLocaleString('en');
  let triangleArea = (base * height) / 2;
  console.log("\nArea: " + triangleArea);

} else {
  input = readlineSync.question("Enter a shape: ");
}
© 2019 GitHub, Inc.
