var choice = prompt("Pick a number.");

var fib = function(number){
  var fib0 = 1;
  var fib1 = 1;
  var fibNext;
  var count = 2;
  while (count < number) {
    fibNext = fib0 + fib1;
    fib0 = fib1;
    fib1 = fibNext;
    count++;
  };
    return(fibNext);
};
fib(choice);
