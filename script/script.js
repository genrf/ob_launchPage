(function($){
	$('.carousel').carousel();

  window.onhashchange = function(){
    $('.active').removeClass('active');
    $('a[href="' + window.location.hash + '"]').parent().addClass('active');
     
  }

})(jQuery);