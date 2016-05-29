var reverseString = function(string){
  var flip ="";
  for(var i = string.length - 1; i >= 0; i--){
    flip += string[i];
  };
  return flip;
};



var pally = function(word) {
  var mid = Math.floor((word.length/2));

    if(word.length % 2 == 0){
      var half1 = word.slice(0, mid);
      var half2 = word.slice(mid);
      //console.log(half2);
      if(half1.toLowerCase() == reverseString(half2.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    };

    if(word.length % 2 !== 0){
      var half1 = word.slice(0, mid);
      var half2 = word.slice(mid+1);
      //console.log(half2);
      if(half1.toLowerCase() == reverseString(half2.toLowerCase())){
        return true;
      }
      else{
        return false;
      }
    };
};
pally("tacoocaT");
