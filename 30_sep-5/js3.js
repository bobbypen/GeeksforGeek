const A = {
    1:"Gaurav",
    name : "mern",
    "roll" : "nppnu"
}



const B = {
    1:"Gaurav",
    name : "mern",
    "roll" : "nppnu"
}



const aa1 = {...A,...B};
console.log(aa1);

const D = Object.assign({},A,B);
console.log("D: ",D);