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

//Drop down menu - for "more" @media only screen and (min-width: 60em)
$(function(){

	$("#more").on("click",function(){

		$("#dropdown").toggleClass("open");
		$(".athletes-content").toggleClass("show");

	});


});




// $(function(){

// 	$("#more").on("click",function(){

// 		$("#athletes-content").toggleClass("show");

// 	});


// });

