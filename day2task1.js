const  limit =20;
const primesFound =[];
let i=2 ;//since the number is between 1 and 20
for(;i<=limit;i++){
    let isPrime =true;
    let j=2;
    for(;j<i;j++){
        if(i%j===0){
            isPrime=false;
            break;
        }
    }
    if (isPrime) {
        primesFound.push(i);
    }
}
primesFound.forEach(prime => {
    console.log(`Prime number found: ${prime}`);
});