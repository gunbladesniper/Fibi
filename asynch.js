


function combine(af1, af2, clbk){
  var a = af1.call(null, function(num){
    return num;
  });
  var b = af2.call(null, function(num){
    return num;
  });

  clbk.call(this, null, a, b);

}

function callback(err, a, b){
    if(err){
    console.log(err);
    }
    console.log(a+b);
}

function uno(clbk){
  return clbk.call(null, 1);

}
function tres(clbk){
  return clbk.call(null, 3);
  
}
function numb(num){
  return num;
};

combine(uno, tres , callback);
