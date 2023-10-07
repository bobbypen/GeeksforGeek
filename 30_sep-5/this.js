const A = {
    name :"bobby",
    roll: "007",
    abc : function(){
        const b = ()=>{console.log(this);}
        b();
    }
}

console.log(A.name);
A.abc();
