// Updated to wait until the document is loaded.
/*
jQuery(document).ready(function () {
  var text = jQuery('h1').text();
  alert(text);
  jQuery('p').text("The DOM has been loaded and can be manipulated");
});
*/



//Wraps a function around the code and supplies $ as a local variable.

/*
(function ($) {
  $(document).ready(function () {
    var text = $('h1').text();
    alert(text);
    $('p').text("The DOM has been loaded and can be manipulated");
  });
})(jQuery);
*/

/*
(function ($) {
  $(document).ready(function () {
	  $('input').keyup(function () {
	  var value = $(this).val();
	  $('p').text(value);
	  }).keyup();
  });
})(jQuery);
*/

/*
(function ($) {
  $(document).ready(function () {
	  $.ajax({
			type: "GET",
			url: "test.js",
			dataType: "script"
	  });
  });
})(jQuery);
*/



/*
(function ($) {
$(document).ready(function () {
  // This example uses the jQuery.ajax() method from the jQuery API.
	$.ajax({
	type: "GET",
	url: 'http://web.arrownac.com/arrow-events-json/' + 3691 + '/all/all/' + 255,
    jsonpCallback: "eventsresponse",
	dataType: "jsonp",
    success: function(data){
    	$("p").append("<div>This is the text added to the page using the \".append\" method.</div>"); 
    },           
	});  
  });
})(jQuery);
*/


(function ($) {
$(document).ready(function () {
  // This example uses the jQuery.ajax() method from the jQuery API.
	$.ajax({
	type: "GET",
	url: 'http://web.arrownac.com/arrow-videos-newtabs/' + 3691 + '/all/all/' + 255,
    jsonpCallback: "videojson",
	dataType: "jsonp",
    success: function(data){
    	var numVideos = 0;
    	$.each(data.videos, function(i, videos){
    		//$("p").append("<div>This is the text added to the page using the \".append\" method.</div>"); 
    		if(this.item['Type'] == "Video") {
                if(this.item['Start Date'] == this.item['End Date']){ 
                    $('#videos-content').append('<li>'+this.item['Start Date']+': '+this.item['City']+' - <a href="http://www.arrownac.com/events-training/video/?vt='+this.item['Nid']+'">'+this.item['Title']+'</a></li>');
                } else {
                    $('#videos-content').append('<li>'+this.item['Start Date']+' - '+this.item['End Date']+': '+this.item['City']+' - <a href="http://www.arrownac.com/events-training/video/?vt='+this.item['Nid']+'">'+this.item['Title']+'</a></li>');
                }
                if ( numVideos == 3 ){
                    return false;
                }
                numVideos++;
            }
    	});
    },           
	});  
  });
})(jQuery);



/*
(function ($) {
	$(document).ready(function () {
	  // This example uses the jQuery.ajax() method from the jQuery API.
		$.ajax({
		type: "GET",
		url: 'http://web.arrownac.com/arrow-events-json/' + 3691 + '/all/all/' + 255,
	    jsonpCallback: "eventsresponse",
		dataType: "jsonp",
	    success: function(data){
	    	$("p").append("<div>This is the text added to the page using the \".append\" method.</div>"); 
	    },           
		});  
	  });
	})(jQuery);

*/

/*
(function ($) {
	$(document).ready(function () {
	  $.ajax({
		type: "GET",
		url: 'http://web.arrownac.com/arrow-events-json/' + 3691 + '/all/all/' + 255,
	    jsonpCallback: "eventsresponse",
		dataType: "jsonp",
	    success: function(data){
	        //$("#videos-content").append('<li>'+this.item['Start Date']+': '+this.item['City']+' - <a href="http://www.arrownac.com/events-training/video/?vt='+this.item['nid']+'">'+this.item['Title']+'</a></li>');    	
	    	$("p").append("<div>This is the text added to the page using the \".append\" method.</div>"); 
	    },    
	       
		});  
	  });
	})(jQuery);
*/

/*
(function ($) {
	$(document).ready(function () {
	  $.ajax({
		type: "GET",
		url: 'http://web.arrownac.com/arrow-events-json/' + '3691' + '/all/all/' + '255',
	    jsonpCallback: "eventsresponse",
		dataType: "jsonp",
	    success: function(data) { alert("Success"); },

	    });
			  
	  });
	})(jQuery);
*/







