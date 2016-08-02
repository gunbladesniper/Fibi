var reverseString = function(string){
  var flip ="";
  for(var i = string.length - 1; i >= 0; i--){
    if(string[i] != " "){
      flip += string[i];
    }
  };
  return flip;
};

function removeSpaces(string){
  var spaceless = "";
  for(var i = 0; i<= string.length-1; i++){
    if(string[i] != " "){
      spaceless += string[i];
    }
  }
  return spaceless;
}



var pally = function(word) {
  var flip = reverseString(word);
  var spaceless = removeSpaces(word);
  if(flip.toUpperCase() == spaceless.toUpperCase()){
    return true;
  }
  return false;
};
pally("taco cat");
