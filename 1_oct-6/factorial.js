// val num = 5;
function factorial(fac){
    if (fac == 0 || fac == 1){
        return 1;
    }

     let num = 1;
     
     for (let index = 2; index <= fac; index++) {
            num = num * index;
        
     }
     console.log(num);
     return num; 

     

}

const num = 5;
const a = factorial(5);
// return a;
console.log(`factorial of ${num} is  ${a}`)



