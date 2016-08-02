
  var chessBoard = new Array();
  for(var y = 0; y < 8; y++){
    chessBoard[y] = new Array();
    for(var x = 0; x< 8 ; x++){
      if(x==5 && y==6){
        chessBoard[y][x]= 1;
      }
      else if(x==4 && y==6){
        chessBoard[y][x]= 1;
      }
      else{
        chessBoard[y][x]= 0;
      }
    }
  }

function rook(arr) {
  var rookLocation = []
  for(var y = 0; y<8; y++){
    for(var x = 0; x<8; x++){
      if(arr[y][x] == 1){
        rookLocation.push(x);
        rookLocation.push(y);
      }
    }
  }
  function conflict(arr){
    if((arr[0] == arr[2]) || (arr[1] == arr[3])){
      return true;
    }
    else{
      return false;
    }
  }
  return conflict(rookLocation);
}

rook(chessBoard);
