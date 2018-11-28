let paraRectangle = function(largeur,hauteur) {

return 2 * (largeur + hauteur);

}

paraRectangle(5,2);



let laireRectangle = function(largeur,hauteur) {

return  (largeur * hauteur);

}

laireRectangle(7,3);


$(function() {
  $('button').on('click', function(e) {
    e.preventDefault();

    var numArray = [];

    while( numArray.length < 5 ) {
      var number = Math.floor((Math.random() * 45 ) + 1);
      if( $.inArray( number, numArray ) == -1 ) {
        numArray.push( number );
      }
    }
    numArray.push( Math.floor((Math.random() * 25 ) + 1) );
    $('div').html( numArray.join("<br />") );
  });
});
