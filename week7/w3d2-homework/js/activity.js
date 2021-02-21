$(document).ready(function() {

    $("td").click(function () {
      var content = $(this).text();
      var myIndex = $(this).index(); 
 
      var cliffs = ['West Cliff','North Cliff','East Cliff','South Cliff'];

      if (content != "Not Available"){
        $(this).toggleClass("highlight");

        if ($(this).hasClass("highlight")){
          $('#displaySelected').css("visibility","visible");
          $('#displaySelected').css("margin-top","2em");
          $('#result').append("<p>"+content+" at "+cliffs[myIndex-1]+"</p>");
        }
        else {
          $('#result p:contains('+content+')').remove();
          if($('#result').has('p').length == false) {
             $('#displaySelected').css("visibility","hidden");
             $('#displaySelected').css("margin-top","0");
          }
        }   
      }
    });  
});