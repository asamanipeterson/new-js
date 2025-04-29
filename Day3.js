//Arrow Function
const addarrow=()=>{
    num1=20;
    num2=30;
    return num1 + num2
}
console.log(addarrow());

//Closure 
function outsideFunction(){
    let outsideVariable ='I am Outside'
    function innerFunction(){
        console.log(outsideVariable)
    }
    return innerFunction
}

const myInnerFunction = outsideFunction();
myInnerFunction();

//Function Method
// 1. Push Method
let myEven=[];
function evenNumbers(limit){
    for(let i=0;i<=limit;i++){
        if(i%2===0){
            myEven.push(i)
        }
    }
    return myEven;
}
console.log(evenNumbers(10));
//2. Filter Methods
let Numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const OddNums=[]
Numbers.filter((item)=>{
    if(item%2!==0){
        OddNums.push(item)
    }
})
console.log(OddNums)