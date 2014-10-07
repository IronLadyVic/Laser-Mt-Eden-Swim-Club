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


//when clicking on drop down menu in mobile, for selecting locate a squad - this will link to the url selected.
function locateSquad(){
        var url = document.getElementById('select-squad').value;
        if(url != 'none') {
            window.location = url;
        }
    }


