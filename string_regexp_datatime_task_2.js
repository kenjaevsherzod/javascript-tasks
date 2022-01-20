// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let text = '2 + 3 223 2223';

let regex = /2\s\+\s3/g;

let result = text.match(regex);

console.log(result);