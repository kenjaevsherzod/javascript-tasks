// When running 1/0, the error 'cannot be divided by zero'

function divide(a, b) {
        
        let result = a/b;
        
        if (result == "Infinity") { 
            throw new Error('cannot be divided by zero');
        } else {
            return a / b;
        }
        
}

divide(1, 0)