const rules = { 3: "Fizz", 5: "Buzz", 7: "Bang" };
const limit = 21;

// Make an array of numbers from 1 to 21
let numbers = [];
for (let i = 1; i <= limit; i++) {
    numbers.push(i);
}

for (let num of numbers) {
    let output = "";

    if (num % 3 === 0) {
        output += rules[3]; 
    }
    
    if (num % 5 === 0) {
        output += rules[5]; 
    }

    if (num % 7 === 0) {
        output += rules[7]; 
    }

    if (output === "") {
        console.log(`${num}`);
    } else {
        console.log(`${output}`);
    }
}