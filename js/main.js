//Drop down menu

$(function(){
	

	$(".nav-handle a").on("click", function(){

		$("#main-nav li").toggleClass("show");
		
	});
	
	


});

//Drop down menu - with locate a squad drop down

$(function(){
	
	$(".locate-squad-touch").on("click", function(){
		

		$("#select").toggleClass("show");

	});
	
	


});

//Club information banner/unslider

$(function() {
    $('.banner').unslider();
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});