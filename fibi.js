# Fibi
var fib = [];
var fibstart = prompt("Pick a number between 1 and 10.");

fib[0]= 1;
fib[1]= 1;
for(var count = 2; count <101; count++){
  fib[count] = fib[count-2] + fib[count-1];
};
for (var i = 0; i < fibstart; i++){

  console.log(fib[i]);

};

//var answer = prompt("What is the next number?");
