jQuery(document).ready(function($) {

  for (var i = 0; i <=100; i++){
    var output = ''
    if (i % 3 == 0) {
      output += "fizz"
    }
    if (i % 5 == 0) {
      output += "buzz"
    }
    if (output == '') {
      output = String(i)
    }

    $('ul').append('<li>'+output+'</li>')

  }

});