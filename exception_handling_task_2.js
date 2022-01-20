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