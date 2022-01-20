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