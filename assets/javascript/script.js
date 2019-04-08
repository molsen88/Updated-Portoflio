
document.addEventListener( 'DOMContentLoaded', function () {
    var elems = document.querySelectorAll( '.collapsible' );
    var instances = M.Collapsible.init( elems, instances );
    // console.log( instances )
} );
document.addEventListener( 'DOMContentLoaded', function () {
    var elems = document.querySelectorAll( '.carousel' );
    var instances = M.Carousel.init( elems, instances );
} );