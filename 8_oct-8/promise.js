const a = new Promise(function(resolve,reject){

    setTimeout(function(){

        let flag = false;
        if (flag) {
            console.log("promise run");
            resolve();

        }
        else{
            reject("Network issue");
        }
    },100)



})


a.then(function(){
    console.log("or bhai")
}

).catch(function(){
    console.log("or bhai")
})


