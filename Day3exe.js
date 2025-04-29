function calculateArea(){
    let width=5;
    let height=3;
    let Rectangle_Area=width*height;
    return `Area ${Rectangle_Area}`
}
console.log(calculateArea())

const arrowcalculateArea=( width,height=1)=>{
  width=5;
  let Area=width*height
  return `Area ${Area}`
}
console.log(arrowcalculateArea())

//Exercise 2
const message= "Global greeting"
const sayHello=(name=`User`)=>{
    let message =`Hello from function`
    return `${message}, ${name}`
}
console.log(sayHello());        
console.log(sayHello("Alice"));