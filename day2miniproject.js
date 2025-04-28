const numbers= [12, -5, 20, 7, -3, 15, 8];
const analysis={
     positiveCount:0,
     evenSum:0,
     maxNumber:numbers[0]
}
// for(num of numbers){
//     if(num >=0){
//       analysis.positiveCount++
//     }
//     if(num % 2===0){
//        analysis.evenSum +=num   
//      }
//      if(num>analysis.maxNumber){
//         analysis.maxNumber=num
//      }
// }
// console.log(`${analysis.positiveCount} Positive numbers have been counted`)
// console.log(`Sum of all even numbers ${analysis.evenSum}`)
// console.log(`${analysis.maxNumber} is the max number`)

numbers.forEach(num=>{
    if(num >=0){
        analysis.positiveCount++
      }
      if(num % 2===0){
         analysis.evenSum +=num   
       }
       if(num>analysis.maxNumber){
          analysis.maxNumber=num
       }
})
console.log(`${analysis.positiveCount} Positive numbers have been counted`)
console.log(`Sum of all even numbers ${analysis.evenSum}`)
console.log(`${analysis.maxNumber} is the max number`)
