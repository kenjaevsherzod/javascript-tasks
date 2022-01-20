// Given an array of car manufacturers, convert the array to a string and back to an array

let manufacturers = ["Toyota", "Mercedes-Benz", "Chevrolet", "BMW", "Hyundai", "Kia"];

let toString = manufacturers.join(', ')

console.log(toString)

let toArray = toString.split(', ')

console.log(toArray)