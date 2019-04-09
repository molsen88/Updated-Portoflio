submit();
function submit() {
    var firstName = document.getElementById( "first_name" ).value;
    console.log( firstName );
    var lastName = document.getElementById( "last_name" ).value;
    console.log( lastName );
    var email = document.getElementById( "email" ).value;
    console.log( email );
    var message = document.getElementById( "icon_prefix2" ).value;
    console.log( message );

}
document.addEventListener( 'DOMContentLoaded', function () {
    var elems = document.querySelectorAll( '.collapsible' );
    var instances = M.Collapsible.init( elems, instances );
    // console.log( instances )
} );
document.addEventListener( 'DOMContentLoaded', function () {
    var elems = document.querySelectorAll( '.carousel' );
    var instances = M.Carousel.init( elems, instances );
} );