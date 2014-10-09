//Drop down menu

$(function(){
	

	$(".nav-handle a").on("click", function(){

		$("#main-nav li").toggleClass("show");
		
	});

//show squads - Senior, Junior and Mini

	$("#menu a").on("click",function(e){
		e.preventDefault();
		var targetID = "#"+$(this).data("target");

		console.log(targetID);
		$("#squads .show").removeClass("show");
		$(targetID).addClass("show");
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

	var dropdown = document.getElementById("#dropdown");

	$("#more").on("click",function(){

		$("#dropdown").toggleClass("open");
		
		if(dropdown == true){
			$(".close-menu").removeClass("#dropdown.open");
		}

	});


});


//when clicking on drop down menu in mobile, for selecting locate a squad - this will link to the url selected.
function locateSquad(){
        var url = document.getElementById('select-squad').value;
        if(url != 'none') {
            window.location = url;
        }
    }


//Mobile drop down menu href link trasition between sections on web page.





//Tabify function for Sqauds

// $(document).ready(function () {
// 	$('#menu').tabify();
	
// });


//Facebook share ref:http://stackoverflow.com/questions/9120539/facebook-share-link-no-javascript

$(".share-popup").click(function(){
    var window_size = "";
    var url = this.href;
    var domain = url.split("/")[2];
    switch(domain) {
        case "www.facebook.com":
            window_size = "width=585,height=368";
        default:
            window_size = "width=585,height=511";
    }
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
    return false;
});





