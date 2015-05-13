$( "#edit-menu" )
  .click(function(e) {
    e.preventDefault();
    $( "#sidr" ).slideToggle(200);
  });
$( "#sidr" ).hide();
  /*.mouseout(function() {
    $( this ).css( "width", "190px" );
     $( "ul" ).animate({width: 'toggle'})
     $( "ul" ).toggle( )
  });*/