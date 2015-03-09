function fizzbuzz(max) {

  function check(n) {
    var output = '';
    if ( n % 3 == 0 ) { output += "Fizz"}
    if ( n % 5 == 0 ) { output += "Buzz"}
    return output || n;
  }

  function checkVaild(max) {
    if (+max == NaN) {
      //TODO does not seem to enter this block
      console.log(max + " is not a number");
      alert("Please provide a number greater than 1");
      return false;

    } else {

      return +max;

    }
  }

  if (checkVaild(max)) {
    for (var i = 0; i <=max; i++) {
      var result = check(i);

      $('ul').append('<li>'+result+'</li>');

    }
  }

}

$(document).ready(function($) {
  $('button#go-button').click(function() {
    var max = $('input:text').val();
    $('input:text').val('');
    $('ul').empty()
    fizzbuzz(max);
  });

});