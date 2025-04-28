let score =88;
let grade;
if(score>=90){
    grade=`A`
    console.log(`Grade:${grade}`)
}else if(score>=80){
    grade=`B`
    console.log(`Score:${score} Grade:${grade}`)
}else if(score>=70){
    grade=`C`
    console.log(`Grade:${grade}`)
}
else{
    grade=`F`
    console.log(`Grade:${grade}`)
}

//Exercise 2
const  numbers = [10, 15, 20, 25, 30];
let i=0;
for(;i<numbers.length;i++){
    if(numbers[i]%5===0){
        console.log(numbers[i])
    };
}

for(num of numbers){
    if(num%5===0){
        console.log(num)
    }
}

//foreach

numbers.forEach(item =>{
    if(item%5===0){
        console.log(item)
    }
})

//Exercise 3
let count =10;
while(count>=1){
    console.log(count);
    if(count===5){
        console.log(`Stopped early!`)
    }
    count--
} 
//Using a for loop
count=10;
for(; count>=1;count--){
    if(count===5){
        console.log(`Stopped early!`)
    }
    console.log(count)
}
