
// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

let movies = ["Avengers", "Spider-Man", "Matrix", "Kungfu Panda", "Sherlock Holmes"];

for (let movie of movies) {
    console.log(movie);
}


// Given an array of car manufacturers, convert the array to a string and back to an array

let manufacturers = ["Toyota", "Mercedes-Benz", "Chevrolet", "BMW", "Hyundai", "Kia"];

let toString = manufacturers.join(', ')

console.log(toString)

let toArray = toString.split(', ')

console.log(toArray)


// Given an array of the names of your friends, add the words hello to each element of the array

let friends = ["Abdulaziz", "Jasurbek", "Abdulloh", "Sherzod", "Mohir"];

for (let friend of friends) {
    let greeting = "Hello " + friend
    console.log(greeting)
}


// Convert numeric array to Boolean

let arr = [1, 3, 6, 0, 5, 9, 2];

for (let num of arr) {
    console.log(Boolean(num))
}


// Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1, 6, 7, 8, 3, 4, 5, 6];

arr.sort();
arr.reverse();


// Filter array [1,6,7,8,3,4,5,6] by value> 3

let arr = [1, 6, 7, 8, 3, 4, 5, 6];

arr.filter(item => item > 3)


// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function arrayIndex(arr, num) {
    return arr[num];
}

arrayIndex(["goal", "ball", 4, 123, true, false], 2)


// Implement a loop that will print the number 'a' until it is less than 10

for (let i = 0; i < 10; i++) {
    console.log("a -> " + i)
}


// Implement a loop that prints prime numbers to the console

let x = 0;

for (i = 1; i < 20; i++) {

    for (j = 2; j <= i; j++) {
        if (i % j === 0) {
        x++;    
        }
    }

    if (x === 1) {
        console.log(i);
    }

    x = 0;
}


// Implement a loop that prints odd numbers to the console

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

