// Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
 
let text = 'ahb acb aeb aeeb adcb axeb';

let result = text.match(/a\wb/g);

console.log(result);