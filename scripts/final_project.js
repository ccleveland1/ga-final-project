//alert('hello World');
$('document').ready(function(){

  // listen for clicks on any anchor with
  // a `data-action="jump-section"` attribute
  $( 'a[data-action="jump-section"]' ).click(function(event) {
    event.preventDefault();

    // Find the href for the anchor
    var namedAnchor = $(event.target).closest('a').attr('href');

    if (namedAnchor) {
      // Update the browser history
      history.pushState({}, '', namedAnchor);
      // Animate scroll to named anchor
      $('body').animate({scrollTop: $(namedAnchor).offset().top-120}, 500);
    }
  });
 
});
