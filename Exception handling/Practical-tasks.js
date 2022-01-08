
// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use.

try {
    console.log(a);
    let a = 3;

} catch(err) {
    console.log("let should be declared before use")
}


// When running 1/0, the error 'cannot be divided by zero'

function divide(a, b) {
    try {
        
        if (b == 0) { 
            throw ('cannot be divided by zero');
        } else {
            return a / b;
        }
        
    } catch (err) {
        console.log("Error: " + err ); 
    }
}

divide(1, 0)