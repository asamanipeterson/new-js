let text = "Hello World";
let letterCount = {};

for (let char of text.toLowerCase()) {
  if (char !== ' ') {  // Ignore spaces
    letterCount[char] = (letterCount[char] || 0) + 1;
  }
}

console.log(`Letter counts: ${JSON.stringify(letterCount)}`);
