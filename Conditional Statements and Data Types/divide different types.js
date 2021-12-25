//string / boolean
console.log("2" / true);  //2
console.log(false / "3");  //0
console.log("hello" / true);  //NaN
//string / number
console.log("2" / 2);  //1
console.log("1" / 2 / 1);  //0.5
console.log(2 / 1 / "2");  //1
console.log("hello" / 3);  //NaN
//number / boolean
console.log(1 / true);  //1
console.log(1 / false);  //Infinity
console.log(true / 2);  //0.5
console.log(false / 2);  //0
//boolean / boolean
console.log(true / false);  //Infinity
