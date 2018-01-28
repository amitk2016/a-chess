$(document).ready(function(){
  var $board = $('#board');

  var rowLength = 26;
  var columnLength = 15;

  for (var i = 0; i < rowLength; i++) {
    var $row = $('<div>');
    $row.addClass('row');

    for (var j = 0; j < columnLength; j++) {
      var $square = $('<div>');
      $square.addClass('square');
      if ( !(((i+j) % 2 ) == 0)) {
          if (i<3 || i>22) {
            $square.addClass('black');
          }else{
            $square.addClass('darkGreen');
          }
      }else{
        if (i<3 || i>22) {
          $square.addClass('white');
        }else{
          $square.addClass('lightGreen');
        }
      }
      $row.append($square);
    }
    $board.append($row);
  }

});
