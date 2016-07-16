//function combines takes 2 async functions that have no arguments except a
// callback and the third argument is a callback. it calls the third callback
//with null or error for the first argument and the second is the callback value
// from the first function. third argument is the value from the second function.
//fn((cb)=>cb(null, 1), (cb)=>cb(null,3),(err,a,b)



function combine(af1, af2, clbk){
   clbk.call(this, null, af1, af2);
   
}

function callback(err, a, b){
    if(err){
    console.log(err);
    }
    console.log(a+b);
}

combine(1, 3, callback);
