// Create a car object, add a color property to it with the value equals 'black'
let car = {
	color: "black"
}
console.log(car)


// Change the color property of the car object to 'green'
car.color = "green";
console.log(car)


// Add the power property to the car object, which is a function and displays the engine power to the console
function property() {
	car.power = "2.2L";
	console.log(car)
}

property()


// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function fruits(pears, apples) {
  let result = pears + apples
  return console.log("Number of Pears " + pears + " and Number of Apples " + apples + ". Their sum is " + result)
}

fruits(100, 45)


// Your name is saved in the payment terminal, write a function to define the name in the terminal 
// (if you entered your name, then hello + name, if not, then there is no such name)
function checkName(name) {
  if (name === "Sherzod") {
    return "Hello " + name
  } else {
    return "There is no such name"
  }
}

checkName("Sherzod")


// Write a function for calculating the type of argument and type output to the console
function type(argument) {
  return typeof argument;
}


// Write a function that determines whether a number is prime or not
function isPrime(num) {
  
  for (let i = 2; i < num; i++) {
     if (num % i === 0) return false;
  }

  return num > 1;
}

isPrime(7)