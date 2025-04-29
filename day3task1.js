function createFactorial() {
    const cache = {};
    
    return (n) => {
    
        if (!Number.isInteger(n) || n < 0) return "Invalid input";
        

        if (n in cache) return cache[n];
        
    
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        
        
        cache[n] = result;
        return result;
    };
}


const factorial = createFactorial();


const inputs = [5, 0, 3, -1, 7, 5, 2.5];

inputs.forEach(input => {
    console.log(`Factorial of ${input} is: ${factorial(input)}`);
});