var $aboutUs = $('#about-us');
var $ourProducts = $('#our-products');
var $contactUs = $('#contact-us');

$(window).on('scroll', function() {
  var scrollPosition = $(this).scrollTop();

  $aboutUs.removeClass('active');
  $ourProducts.removeClass('active');
  $contactUs.removeClass('active');
  if (scrollPosition >= $aboutUs.offset().top && scrollPosition < $ourProducts.offset().top) {
    $aboutUs.addClass('active');
  }
  if (scrollPosition >= $ourProducts.offset().top && scrollPosition < $contactUs.offset().top) {
    $ourProducts.addClass('active');
  } 
  if (scrollPosition >= $contactUs.offset().top) {
    $contactUs.addClass('active');
  } 
});
