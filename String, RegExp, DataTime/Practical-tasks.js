
// Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
 
let text = 'ahb acb aeb aeeb adcb axeb';

let result = text.match(/a\wb/g);

console.log(result);


// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let text = '2 + 3 223 2223';

let regex = /2\s\+\s3/g;

let result = text.match(regex);

console.log(result);


// Get the day, month and year of the current date and output it to the console separately

let date = new Date();

console.log("The Year: " + date.getFullYear());
console.log("The Month: " + date.getMonth());
console.log("The Day: " + date.getDay());