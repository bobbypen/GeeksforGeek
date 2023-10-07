// const a = "Mern";
// console.log(a);


// console.log((Math.random())*10);


// console.log((Math.round(Math.random()))*10);



// const A = [2,4,1,[2,5,4],1];
// console.log(A);



// const ab = [2,45,52,22,3,4,[25,44,44]];
// console.log(ab);



// const bs = ab.flat(Infinity);
// // const bs = ab.flat(1);// value means dep of array inside it 
// console.log(bs);


// const c = new Array(12,5,4,52);
// console.log(c);


// c.push(73);
// c.push(72);
// c.pop(20);
// c.unshift(0);
// console.log(c);


const a = [1,2,3,4,5,6,7,8];
const b = a.slice(1,3); //this is index value  , no change in orignal 
console.log("b",b)
console.log(a);




const a1 = [1,2,3,4,5,6,7,8];
const b1 = a1.splice(1,3); //this is index value can cut original also
console.log("b1",b1)
console.log(a1);


const ac = a.concat(a1);
console.log("ac",ac);



// spread Operator    ...

// const aa1 = [...a,...a1];
// console.log(aa1);

// console.log(Array.isArray("mern"));

a.forEach((i) => {
    console.log(i);
});



const d = a.filter((i)=>i>3);
console.log(d)



const A = [10,12,14,1,1,1];
const f = A.map((i) => i*2);
console.log('f',f);