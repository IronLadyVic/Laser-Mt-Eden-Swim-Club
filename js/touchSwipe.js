$(function() {      
      $("#test").swipe( {
        swipe:function(event, direction) {
          $(this).text("You swiped " + direction);
        },
        swipeStatus:function(event, phase) {
          if (phase=="cancel") {
            $(this).text("You didnt swipe far enough ");
          }
        },
        threshold:200
       });
    });

// $(function() {        
//         $("#test3").swipe( {
//           swipe:function(event, direction) {
//             $(this).text("You swiped " + direction );
//           },
//           swipeStatus:function(event, phase, direction, distance, duration, fingers) {
            
//             $("#test3").text(" Your have swiped " + distance + " px so far");
            
//             if(distance>200) {
//                 $("#test3").text(" Now swipe back 10px and release to cancel.. distance = " + distance + "px");
//             }
            
//             if (phase=="cancel") {
//               $("#test3").text(" You cancelled the swipe");
//             }
//           },
//           threshold:200,
//           cancelThreshold:10
          
//         });
//       });