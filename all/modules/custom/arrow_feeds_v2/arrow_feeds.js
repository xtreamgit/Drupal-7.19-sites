
(function ($) {
$(document).ready(function () {
  // This example uses the jQuery.ajax() method from the jQuery API.
	$.ajax({
	type: "GET",
	//url: 'http://web.arrownac.com/arrow-videos-newtabs/' + 3691 + '/all/all/' + 255,
	url: 'http://web.arrownac.com/arrow-videos-newtabs/' + '/all/all/all/' + 255,
    jsonpCallback: "videojson",
	dataType: "jsonp",
    success: function(data){
    	var numVideos = 0;
    	$.each(data.videos, function(i, videos){
    		//$("p").append("<div>This is the text added to the page using the \".append\" method.</div>"); 
    		if(this.item['Type'] == "Video") {
                if(this.item['Start Date'] == this.item['End Date']){ 
                    $('#videos-feed-content').append('<li>'+this.item['Start Date']+': '+this.item['City']+' - <a href="http://www.arrownac.com/events-training/video/?vt='+this.item['Nid']+'">'+this.item['Title']+'</a></li>');
                } else {
                    $('#videos-feed-content').append('<li>'+this.item['Start Date']+' - '+this.item['End Date']+': '+this.item['City']+' - <a href="http://www.arrownac.com/events-training/video/?vt='+this.item['Nid']+'">'+this.item['Title']+'</a></li>');
                }
                if ( numVideos == 99 ){
                    return false;
                }
                numVideos++;
            }
    	});
    },           
	});  
  });
})(jQuery);
