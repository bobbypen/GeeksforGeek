
const A = [1,2,3,4,5,6,7,8];

const B = A.reduce(function(acc, curval){  // ye 3 acc me jayega or sbse multiply hoga or baki arr value curval me 
    return acc * curval;
},3)

console.log(B);

const C = A.reduce((acc, curval)=>{
    return acc * curval;
},2)

console.log(C);

