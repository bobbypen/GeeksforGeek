// let a = 67;
// let b = a;
// b = 54;
// console.log(a); // prints '67' because the value of `a` is not changed by reassignment to variable `b`.
// console.log(b); // prints '54' because the value of `b` is 


var a = {
    2: "two" ,

    3:"three"
}


var b = a;
b[2] = "five";


console.log(a[2]);
console.log(b[2]);

